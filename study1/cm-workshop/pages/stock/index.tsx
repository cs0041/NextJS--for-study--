import Layout from '@/components/Layouts/Layout'
import withAuth from '@/components/Layouts/withAuth'
import React from 'react'
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid'
import { useAppDispatch } from '@/store/store'
import { deleteProduct, getProducts, productSelector } from '@/store/slices/productSlice'
import { useSelector } from 'react-redux'
import { productImageURL } from '@/utils/commonUtil'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  Typography,
} from '@mui/material'
import NumberFormat from "react-number-format";
import Moment from 'react-moment'
import router from 'next/router'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductData } from '@/models/product.model'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type Props = {}

const  Stock = ({}: Props) => {

  const dispatch = useAppDispatch()
  const productList = useSelector(productSelector)
  const [openDialog, setOpenDialog] = React.useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = React.useState<ProductData | null>(null)


  React.useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleClose = () => {
    setOpenDialog(false)
  }

   const showDialog = () => {
     if (selectedProduct === null) {
       return
     }

     return (
       <Dialog
         open={openDialog}
         keepMounted
         aria-labelledby="alert-dialog-slide-title"
         aria-describedby="alert-dialog-slide-description"
       >
         <DialogTitle id="alert-dialog-slide-title">
           <Image
             width={100}
             height={100}
             objectFit="cover"
             alt="product image"
             src={productImageURL(selectedProduct.image)}
             style={{ width: 100, borderRadius: '5%' }}
           />
           <br />
           Confirm to delete the product? : {selectedProduct.name}
         </DialogTitle>
         <DialogContent>
           <DialogContentText id="alert-dialog-slide-description">
             You cannot restore deleted product.
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button onClick={() => setOpenDialog(false)} color="info">
             Cancel
           </Button>
           <Button onClick={handleDeleteConfirm} color="primary">
             Delete
           </Button>
         </DialogActions>
       </Dialog>
     )
   }

   const handleDeleteConfirm = () => {
     if (selectedProduct) {
       dispatch(deleteProduct(String(selectedProduct.id)));
       setOpenDialog(false);
     }
   }


  

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      headerName: 'IMG',
      field: 'image',
      width: 80,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Zoom>
          <Image
            height={500}
            width={500}
            objectFit="cover"
            alt="product image"
            src={productImageURL(value)}
            style={{ width: 70, height: 70, borderRadius: '5%' }}
          />
        </Zoom>
      ),
    },
    {
      field: 'name',
      headerName: 'name',
      width: 150,
    },
    {
      field: 'stock',
      headerName: 'stock',
      width: 150,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Typography variant="body1">{value}</Typography>
      ),
    },
    {
      headerName: 'PRICE',
      field: 'price',
      width: 120,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Typography variant="body1">{value}$</Typography>
      ),
    },
    {
      headerName: 'TIME',
      field: 'createdAt',
      width: 220,
      renderCell: ({ value }: GridRenderCellParams<string>) => (
        <Typography variant="body1">
          <Moment format="DD/MM/YYYY HH:mm">{value}</Moment>
        </Typography>
      ),
    },
    {
      headerName: 'ACTION',
      field: '.',
      width: 120,
      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <Stack direction="row">
          <IconButton
            aria-label="edit"
            size="large"
            onClick={() => router.push('/stock/edit?id=' + row.id)}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              setSelectedProduct(row)
              setOpenDialog(true)
            }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ]



  return (
    <Layout>
      <div>Stock</div>
      <DataGrid
        sx={{ backgroundColor: 'white', height: '70vh' }}
        rows={productList ?? []}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
      {showDialog()}
    </Layout>
  )
}
export default withAuth(Stock)
