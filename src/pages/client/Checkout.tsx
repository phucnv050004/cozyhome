import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from "@mui/material";

import axios from "axios";
import { useMemo } from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { InputText } from "src/components/elements/InputText";
import { useCart } from "src/contexts/cart";
import { useLoading } from "src/contexts/loading";
import { useUser } from "src/contexts/user";
import { useProductCart } from "src/hooks/useProductCart";

type CheckoutFormParams = {
  name: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  address: string;
  note: string;
  payment: string;
};

function Checkout() {
  const nav = useNavigate();
  const { setLoading } = useLoading();
  const { cart } = useCart();
  const { user } = useUser();
  const { getCartUser } = useProductCart();

  const totalPrice = useMemo(
    () =>
      cart
        ? cart.products.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
          )
        : 0,
    [cart]
  );

  const onSubmit = async (values: CheckoutFormParams) => {
    if (!user || !cart || !cart?.products.length) return;
    try {
      setLoading(true);
      await axios.post("/orders", {
        ...values,
        products: cart.products,
        user: user._id,
        totalPrice,
      });
      await getCartUser();
      alert("Checkout thành công");
      nav("/");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <br />
      <Container sx={{ mb: 10 }}>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            payment: "COD",
          }}
          render={({ values }) => {
            return (
              <Grid container spacing={2}>
                {/* Địa chỉ giao hàng */}
                <Grid item xs={12} md={7}>
                  <Paper
                    elevation={3}
                    style={{
                      padding: "20px",
                      margin: "10px",
                    }}
                  >
                    <Typography variant="h6">Địa Chỉ Giao Hàng</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Field
                          name="name"
                          render={({ input, meta }) => (
                            <InputText
                              input={input}
                              label={"Họ và tên"}
                              messageError={meta.touched && meta.error}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="phone"
                          render={({ input, meta }) => (
                            <InputText
                              input={input}
                              label={"Số điện thoại"}
                              messageError={meta.touched && meta.error}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Field
                          name="address"
                          render={({ input, meta }) => (
                            <InputText
                              input={input}
                              label={"Địa chỉ"}
                              messageError={meta.touched && meta.error}
                            />
                          )}
                        />
                      </Grid>

                    
                      <Typography variant="body2" style={{marginLeft:"17px"}}>
                       <p style={{fontSize:"17px",color:"black"}}>CHÍNH SÁCH THANH TOÁN</p>
                       <p>
                       Nhà Xinh chỉ áp dụng duy nhất một hình thức thanh toán
                       online qua thẻ tín dụng, chuyển <br/> khoản, cụ thể:
                       </p>
                        <p>
                        Bước 1: Khách hàng tìm hiểu thông tin về sản phẩm. <br />
                        Bước 2: Khách hàng xác thực đơn hàng (điện thoại, tin nhắn, email).<br/>
                        Bước 3: Khách hàng đồng ý các điều khoản mua hàng, chi
                        phí giao hàng và lắp đặt.<br/>
                        Bước 4: Khách hàng thanh toán qua các thẻ ATM/VISA/CREDIT CARD.<br/>
                        Bước 5: Hệ thống Nhà Xinh xác nhận thông tin khách hàng và giao hàng.<br/>
                        Bước 6: Khách hàng nhận hàng, kiểm tra và xác nhận với nhân viên.
                       </p> 
                      </Typography>
                      <FormControlLabel
                      sx={{marginLeft:"5px",marginTop:"-10px"}}
                      control={<Checkbox />}
                      label="Tôi đã đọc và đồng ý..."
                    />
                    </Grid>
                  </Paper>
                </Grid>

                {/* Tóm tắt đơn hàng */}
                <Grid item xs={12} md={5}>
                  <Paper
                    elevation={3}
                    style={{ padding: "20px", margin: "10px" }}
                  >
                    <Typography sx={{mb :2}} variant="h6">Tóm tắt đơn hàng</Typography>
                    {cart?.products.map(({ product, quantity }) => (
                      <Stack
                        key={product._id}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{ mb: 2 }}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{ width: 50, height: 50, objectFit: "cover" }}
                        />
                        <Typography variant="body2">
                          {product.title} <br /> sl: {quantity} -{" "}
                          {product.price * quantity} VND
                        </Typography>
                      </Stack>
                    ))}
                    <FormControl component="fieldset">
                      <FormLabel component="legend">VẬN CHUYỂN</FormLabel>
                      <RadioGroup defaultValue="contactForShipping">
                        <FormControlLabel
                          value="contactForShipping"
                          control={<Radio />}
                          label="Vận chuyển thường"
                        />
                        <FormControlLabel
                          value="shippingFee"
                          control={<Radio />}
                          
                          label="Giao hàng hỏa tốc"
                        />
                      </RadioGroup>
                    </FormControl>

                   
                    <Typography sx={{mb :2,mt :2}} variant="body2">
                      Tổng cộng: {totalPrice} VND
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => onSubmit(values)}
                    >
                      ĐẶT MUA
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            );
          }}
        />
      </Container>
    </>
  );
}

export default Checkout;

