import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
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




export default function ShowOrder() {
  const { order } = useOrder();
  console.log(order ,"fix done!")

  return (
    <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã Đơn hàng</StyledTableCell>
            <StyledTableCell align="left">Tên người nhận</StyledTableCell>
            <StyledTableCell align="left">Số điện thoại</StyledTableCell>
            <StyledTableCell align="left">Địa chỉ</StyledTableCell>
            <StyledTableCell align="left">Phương thức thanh toán</StyledTableCell>
            <StyledTableCell align="left">Tác vụ</StyledTableCell>
          </TableRow>
        </TableHead>
       {order ? 
        <TableBody>
       
          <StyledTableRow >
            <StyledTableCell component="th" scope="row">
              {order._id}
            </StyledTableCell>
            <StyledTableCell align="left">{order.name}</StyledTableCell>
            <StyledTableCell align="left">{order.phone}</StyledTableCell>
            <StyledTableCell align="left">{order.address}</StyledTableCell>
            <StyledTableCell align="left">{order.payment}</StyledTableCell>
            <StyledTableCell align="left">
              <Link to={`/orders/${order._id}`}>Xem chi tiết</Link>
            </StyledTableCell>
          </StyledTableRow>
       
      </TableBody>
        :
        <div style={{  color: 'red',marginTop:"50px"}}>Không có sản phẩm</div>
        }
      </Table>
    </TableContainer>
  );
}
// export default function ShowOrder() {
//   const {order} = useOrder();
//   return (
//     <TableContainer component={Paper} sx={{mt:2, mb:2}}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell >Mã Đơn hàng</StyledTableCell>
//             <StyledTableCell align="left">Tên người nhận</StyledTableCell>
//             <StyledTableCell align="left">Số điện thoại</StyledTableCell>
//             <StyledTableCell align="left">Địa chỉ</StyledTableCell>
//             <StyledTableCell align="left">Ảnh sản phẩm</StyledTableCell>
//             <StyledTableCell align="left">Số lượng</StyledTableCell>
//             <StyledTableCell align="left">Tác vụ</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//             {order?.products.map((item,index) => (
//                 <StyledTableRow key={index} >
//                 <StyledTableCell component="th" scope="row">
//                 {order._id}
//                 </StyledTableCell>
//                 <StyledTableCell align="left">{order.name}</StyledTableCell>
//                 <StyledTableCell align="left">{order.phone}</StyledTableCell>
//                 <StyledTableCell align="left">{order.address}</StyledTableCell>
//                 <StyledTableCell align="left"><img src={item.product.image} width={100} alt="Đợi tí..." /></StyledTableCell>
//                 <StyledTableCell align="left">{item.quantity}</StyledTableCell>
//                 <StyledTableCell align="left"><Button>Xem chi tiết</Button></StyledTableCell>
//               </StyledTableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
