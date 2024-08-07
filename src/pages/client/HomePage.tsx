import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import {
  ButtonPro,
  CartPro,
  IconPro,
  ImgPrimary,
  InfoBannerFirst,
  InfoBannerSecond,
  InfoImgProduct,
  InformationSample,
  NewArrival,
  PricePro,
  SubBox1,
  SubBox2,
  SubBox3,
  SubBox4,
  TextBannerFirst,
  TextBannerSecond,
  TextInfo_1,
  TextInfo_2,
  TextInfo_3,
  TextInfo_4,
  TextPro,
} from "./Styled";
import { useEffect, useState } from "react";
import { TProduct } from "src/interfaces/TProduct";
import axios from "axios";
import { useLoading } from "src/contexts/loading";
const HomePage = () => {
  const { loading, setLoading } = useLoading();
  const [products, setProduct] = useState<TProduct[]>([]);
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/products");
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
    {loading ? (
      <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
      }}
     >
      <CircularProgress />
      <Typography mt={2}>Loading...</Typography>
     </Stack>
    ):(
      <>
      <InfoBannerFirst>
       <img
         src="https://i.ex-cdn.com/vovgiaothong.vn/files/f1/Sites/1/media/letung/images/xulyvipham-xechorac/banner-w2.png"
         alt=""
         width={"100%"}
         height={"100%"}
       />
       <TextBannerFirst>
         <Typography variant="h2" sx={{ fontWeight: "500",color:"white" }}>
           7 Bộ Sưu Tập Mới
         </Typography>
         <Button
           variant="outlined"
           sx={{
             width: "300px",
             minWidth: "300px",
             borderRadius: "5px",
             marginLeft: "75px",
             marginTop: "15px",
             backgroundColor: "white",
             color: "black",
           }}
         >
           Xem Tại Cửa Hàng
         </Button>
       </TextBannerFirst>
     </InfoBannerFirst>
 
     <InfoBannerSecond>
       <img
         src="https://vietnammoving.com/upload/images/pictures/banner-thiet-ke-noi-that.jpg"
         alt=""
         width={"100%"}
         height={"100%"}
       />
       <TextBannerSecond sx={{ textAlign: "center" }}>
         <Typography variant="h4" sx={{ fontWeight: "500",color:"white" }}>
          THIẾT KẾ HIỆN ĐẠI
         </Typography>
         <Typography
           variant="body1"
           sx={{
             width: "570px",
             textAlign: "center",
             color: "white",
             marginTop: "5px",
           }}
         >
           Chất lượng tuyệt hảo từ thương hiệu nổi tiếng tại Mỹ, bảo hành 10
           năm, thư giãn và thoải mái tuyệt vời.
         </Typography>
         <Button
           variant="outlined"
           sx={{
             width: "130px",
             minWidth: "130px",
             borderRadius: "5px",
             marginLeft: "210px",
             marginTop: "15px",
             backgroundColor: "white",
             color: "black",
           }}
         >
           Xem Chi Tiết
         </Button>
       </TextBannerSecond>
     </InfoBannerSecond>
 
     <InfoImgProduct direction={"row"}>
       <Stack width={"100%"}>
         <img
           src="https://images.tcdn.com.br/img/img_prod/752045/sofa_3_lugares_texas_living_pes_e_base_em_madeira_linho_bisart_decor_10000681_1_43d10a380077a7613069c3ae0fd6b79f.jpg"
           alt=""
           width={"100%"}
           height={"520px"}
           style={{ margin: "20px 20px 20px 10px" }}
         />
       </Stack>
       <Stack
         direction={"row"}
         width={"100%"}
         style={{ margin: "20px 10px 20px 30px" }}
       >
         <Stack gap={"20px"} mr={"20px"}>
           <img
             src="http://cdn.home-designing.com/wp-content/uploads/2023/02/designer-modular-sofa-set-for-sale-on-amazon-minimalist-contemporary-living-room-furniture-inspiration-colorful-couch-ideas-bright-orange-upholstery-low-profile-chiclet-shaped-cushion-600x600.jpg"
             alt=""
             width={"370px"}
             height={"250px"}
           />
           <img
             src="https://kfa.vn/wp-content/uploads/2021/08/ban-ghe-cf-go.jpg"
             alt=""
             width={"370px"}
             height={"250px"}
           />
         </Stack>
         <Stack gap={"20px"}>
           <img
             src="https://product.hstatic.net/1000240719/product/o1cn01ek0s2g1xcozznfvga___651072944_8ab988d0388149028d4486988effc0a3_master.jpg"
             alt=""
             width={"370px"}
             height={"250px"}
           />
           <img
             src="https://noithatmanhhe.vn/media/25300/1-ban-trang-diem-dep.jpg"
             alt=""
             width={"370px"}
             height={"250px"}
           />
         </Stack>
       </Stack>
     </InfoImgProduct>
 
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
 
     {/* Show Products */}
     <NewArrival
       variant="h6"
       sx={{ textAlign: "left", margin: "10px 0px 10px 120px" }}
     >
       SẢN PHẨM MỚI
     </NewArrival>
     <Stack
       direction={"row"}
       justifyContent={"center"}
       alignItems={"center"}
       flexWrap={"wrap"}
       gap={10}
       sx={{ marginTop: 5 }}
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
             <TextPro to={`/products/${item._id}`}>{item.title}</TextPro>
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
 
     {/* img product end */}
     <Stack
       direction={"row"}
       sx={{ backgroundColor: "rgb(235, 235, 235)" }}
       mt={10}
       mb={10}
     >
       <Stack width={"50%"} sx={{ margin: "150px 20px 40px 160px" }}>
         <Typography
           variant="h4"
           sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
         >
           Tổ ấm của người tinh tế
         </Typography>
         <Typography
           width={"520px"}
           sx={{
             fontFamily: "Roboto",
             fontSize: "17px",
             marginTop: "20px",
             lineHeight: "1.7",
             marginBottom: "20px",
           }}
         >
           Trong suốt hơn 24 năm qua, cảm hứng từ gu thẩm mỹ tinh tế và tinh
           thần “Việt” đã giúp Nhà Xinh tạo ra những thiết kế độc đáo, hợp thời
           và chất lượng. Nhà Xinh hiện đã mở 10 cửa hàng tại Việt Nam.
         </Typography>
         <Button
           variant="contained"
           sx={{
             width: "170px",
             padding: "12px 10px",
             backgroundColor: "rgb(121, 156, 88)",
           }}
         >
           Về HomeBeautiful
         </Button>
       </Stack>
       <Stack width={"50%"}>
         <img
           src="https://kenh14cdn.com/203336854389633024/2023/2/14/photo-10-1676365359760789757326.jpg"
           alt=""
         />
       </Stack>
     </Stack>
      </>
    )}
    </>
)};
  


export default HomePage