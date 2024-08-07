import { Box, CardActions, CardContent, CardMedia, Stack, styled, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ButtonPro, CartPro, IconPro, ImgPrimary, InformationSample, PricePro, SubBox1, SubBox2, SubBox3, SubBox4, TextInfo_1, TextInfo_2, TextInfo_3, TextInfo_4, TextPro } from "./Styled";
import { useEffect, useState } from "react";
import { TProduct } from "src/interfaces/TProduct";
import axios from "axios";
const Products = () => {
  const BannerImage = styled(Box)({
    backgroundImage: "url(https://hoanghao.vn/wp-content/uploads/2020/07/thiet-ke-noi-that-nha-pho-130m2-quan-1-3.jpg)",
    height: "316px",
   
  });
const [products, setProduct] = useState<TProduct[]>([]);
const getAllProducts = async () => {
    const { data } = await axios.get("/products");
    console.log(data);
    setProduct(data);
};
useEffect(() => {
    getAllProducts();
}, []);``
  return (
    <>
    <BannerImage>
    <Stack justifyContent={"center"} alignItems={"center"} height={"100%"} sx={{ color: "white" }} >
       
          <Typography fontSize={48}>Sản phẩm</Typography>
          <Stack direction={"row"}>
            <TextPro sx={{marginTop:'5px',fontWeight:500,color:"white",}} to={"/"} >Trang chủ</TextPro>
            <NavigateNextIcon />
            <Typography fontWeight={300}>Sản phẩm</Typography>
          </Stack>
        </Stack>
    </BannerImage>
    <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={10}
                sx={{ marginTop: 10,marginBottom:10 }}
            >
                {products.map((item, index) => (
                    <Stack sx={{ maxWidth: 250 }} key={index}>
                        <CardMedia
                            component="img" // nên có thì mới hiển thị ảnh
                            alt={item.title}
                            image={item.image}
                            sx={{ objectFit: "cover" }}
                        />
                        <IconPro />
                        <CardContent>
                            <TextPro to={`/products/${item._id}`}>
                                {item.title}
                            </TextPro>
                            <PricePro variant="h6">{item.price}đ</PricePro>
                        </CardContent>
                        <CardActions>
                            <ButtonPro to={""}>
                                <CartPro />
                            </ButtonPro>
                        </CardActions>
                    </Stack>
                ))}
            </Stack>

            <InformationSample sx={{ backgroundColor: "rgb(235, 235, 235)" }}>
       {/* box 1 */}
       <SubBox1 direction={"row"}>
         <ImgPrimary
           component="img"
           image={"https://luxurydecor.vn/wp-content/uploads/2020/02/noi-that-phong-khach-chung-cu-8.jpg"}
           sx={{ height: 500, width: 750 }}
         />
         <TextInfo_1>
           <Typography
             variant="h4"
             sx={{
               fontFamily: "Montserrat",
               fontWeight: "550",
               width: "270px",
               fontSize: "30px",
               lineHeight: "40px",
               marginBottom: "15px",
             }}
           >
             Không gian phòng khách
           </Typography>
           <Typography
             width={"260px"}
             sx={{
               fontFamily: "Roboto",
               fontSize: "14px",
               lineHeight: "24px",
               marginBottom: "5px",
             }}
           >
             Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia
             đình
           </Typography>
         </TextInfo_1>
       </SubBox1>
       {/* box 2 */}
       <SubBox2 direction={"row-reverse"}>
         <ImgPrimary
           component="img"
           image={"https://blogbatdongsan.vn/wp-content/uploads/2022/09/top-nhung-mau-do-trang-tri-phong-1.jpg"}
           sx={{ height: 450, width: 360 }}
         />
         <TextInfo_2 sx={{ marginTop: "320px" }}>
           <Typography
             variant="h4"
             sx={{
               fontFamily: "Montserrat",
               fontWeight: "550",
               width: "270px",
               fontSize: "30px",
               lineHeight: "40px",
               marginBottom: "15px",
             }}
           >
             Đồ trang trí
           </Typography>
           <Typography
             width={"270px"}
             sx={{
               fontFamily: "Roboto",
               fontSize: "14px",
               lineHeight: "24px",
               marginBottom: "5px",
             }}
           >
             Mang lại những nguồn cảm hứng và nét sinh động cho không gian
           </Typography>
         </TextInfo_2>
       </SubBox2>
       {/* box 3 */}
       <SubBox3 direction={"row"}>
         {/* <img
                       src="../../../public/images/Banner/imgRoom2.jpg"
                       alt=""
                       width={"350px"}
                   /> */}
         <ImgPrimary
           component="img"
           image={"https://novafurniture.vn/uploads/news/topics/thietkephongngu1-1.jpg"}
           // width={"350px"}
           sx={{ height: 340 }}
         />
         <TextInfo_3>
           <Typography
             width={"100px"}
             variant="h4"
             sx={{
               fontFamily: "Montserrat",
               fontWeight: "550",
               fontSize: "30px",
               lineHeight: "40px",
               marginBottom: "15px",
             }}
           >
             Không gian phòng ngủ
           </Typography>
           <Typography
             width={"150px"}
             sx={{
               fontFamily: "Roboto",
               fontSize: "14px",
               lineHeight: "24px",
               marginBottom: "5px",
             }}
           >
             Những mẫu phòng ngủ của Nhà Xinh mang đến cảm giác ấm cúng, gần
             gũi và thoải mái
           </Typography>
         </TextInfo_3>
       </SubBox3>
       {/* box 4    */}
       <SubBox4>
         {/* <img
                       src="../../../public/images/Banner/imgghe.jpg"
                       alt=""
                       width={"560px"}
                   /> */}
         <ImgPrimary
           component="img"
           image={"https://aeros.vn/upload/images/nha-pho/noi-that-phong-bep-nha-pho-dep-1.jpeg"}
           sx={{ width: 560 }}
         />
         <TextInfo_4 sx={{ marginTop: "20px" }}>
           <Typography
             variant="h4"
             sx={{
               fontFamily: "Montserrat",
               fontWeight: "550",
               fontSize: "30px",
               lineHeight: "40px",
               marginBottom: "15px",
             }}
           >
             Không gian phòng ăn
           </Typography>
           <Typography
             width={"560px"}
             sx={{
               fontFamily: "Roboto",
               fontSize: "14px",
               lineHeight: "24px",
               marginBottom: "5px",
             }}
           >
             Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian
             phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt
           </Typography>
         </TextInfo_4>
       </SubBox4>
     </InformationSample>
    </>
  )
}

export default Products