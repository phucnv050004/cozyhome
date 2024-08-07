import { RollbackOutlined } from '@ant-design/icons';
import { styled, TableCell, tableCellClasses } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';
import { useOrder } from 'src/contexts/order';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14, 
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const OrderDetail = () => {
   
    const { order } = useOrder();
  
  return (
    <div>
    <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           
            <StyledTableCell align="left">Tên sản phẩm</StyledTableCell>
            <StyledTableCell align="left">Ảnh sản phẩm</StyledTableCell>
            <StyledTableCell align="left">Số lượng</StyledTableCell>
            <StyledTableCell align="left">Mô tả</StyledTableCell>
            <StyledTableCell align="left">Tổng tiền</StyledTableCell>
            <StyledTableCell align="left">Tác vụ</StyledTableCell>
          </TableRow>
        </TableHead>
       {order ? 
        <TableBody>
        {order?.products?.map((item, index) => (
          <StyledTableRow key={index}>
            
            <StyledTableCell align="left">{item.product.title.substring(0,20)}...</StyledTableCell>
           
            <StyledTableCell align="left">
              <img
                src={item.product.image}
                width={100}
                alt="Đợi tí..."
              />
            </StyledTableCell>
            <StyledTableCell align="left">{item.quantity}</StyledTableCell>
            <StyledTableCell align="left">{item.product.description.substring(0,30)}...</StyledTableCell>
            <StyledTableCell align="left">{order.totalPrice}</StyledTableCell>
            <StyledTableCell align="left"><NavLink to={'/orders'}><RollbackOutlined /></NavLink></StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
        :
        <div style={{  color: 'red',marginTop:"50px"}}>Không có sản phẩm</div>
        }
      </Table>
    </TableContainer>
    </div>
  )
}

export default OrderDetail