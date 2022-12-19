import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '@/models/user.model'
import { RootState } from '@/store/store'
import * as serverService from '@/services/serverService'
import { SignUp } from '@/models/auth.model'
import httpClient from '@/utils/httpClient'
import { AxiosRequestConfig } from 'axios'


interface UserState {
  username: string
  accessToken: string
  error?: string
  isAuthenticated: boolean
  isAuthenticating: boolean
  user?: UserData
}

interface SingleProps{
  data:string
}

const initialState: UserState = {
  username: 'pascal',
  accessToken: '',
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
}

interface SignAction {
  username: string
  password: string
}

export const signUp = createAsyncThunk(
  'user/signup',
  async (credential: SignAction) => {
    const response = await serverService.signUp(credential)
    return response
  }
)

export const signIn = createAsyncThunk(
  'user/signin',
  async (credential: SignAction) => {
     const response =await serverService.signIn(credential)
     if (response.result != 'ok') {
       throw new Error('login failed')
     }

     // set access token
     httpClient.interceptors.request.use((config?: AxiosRequestConfig) => {
       if (config && config.headers) {
         config.headers['Authorization'] = `Bearer ${response.token}`
       }

       return config
     })
     return response
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUsername: (state, action: PayloadAction<SingleProps>) => {
      state.username = action.payload.data
    },
  },
  extraReducers: (builder) => {
     builder.addCase(signUp.fulfilled, (state, action) => {
      state.accessToken = ""
      state.user = undefined
      state.isAuthenticated = false
     } )
     builder.addCase(signIn.fulfilled, (state, action:any) => {
      state.username = action.payload.result;
     } )
  },
})

export const { resetUsername } = userSlice.actions

// export common user selector
export const userSelector = (store: RootState) => store.user
export const isAuthenticatedSelector = (store: RootState): boolean =>
  store.user.isAuthenticated

// // export reducer
export default userSlice.reducer
