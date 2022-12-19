import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '@/models/user.model'
import { RootState } from '@/store/store'

interface UserState {
  username: string
  accessToken: string
  error?: string
  isAuthenticated: boolean
  isAuthenticating: boolean
  user?: UserData
}

const initialState: UserState = {
  username: 'ss2222',
  accessToken: '',
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

// export common user selector
export const userSelector = (store: RootState) => store.user;
export const isAuthenticatedSelector = (store: RootState): boolean => store.user.isAuthenticated;



// // export reducer
export default userSlice.reducer
