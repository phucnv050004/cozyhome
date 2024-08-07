import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductCart } from "src/hooks/useProductCart";
import { TProduct } from "src/interfaces/TProduct";
import { InfoImgProduct, TextPro } from "./Styled";
  
  const ProductDetail = () => {
    const { addToCart } = useProductCart();
    const [quantity, setQuantity] = useState<number>(0);
    //sản phẩm liên quan
    const [products, setProducts] = useState<TProduct[]>([]);
    const getAllProducts = async () => {
      const { data } = await axios.get("/products");
      console.log(data);
      setProducts(data);
    };
    useEffect(() => {
      getAllProducts();
    }, []);
  
    //chi tiết sản phẩm
    const [product, setProduct] = useState<TProduct | null>(null);
    const { id } = useParams();
    useEffect(() => {
      const fetchProduct = async () => {
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
        console.log(data);
      };
      fetchProduct();
    }, []);
    const handleAddToCart = (product: TProduct) => {
      if (quantity <= 0) return;
      addToCart({ product, quantity });
    };
  
    return (
      <>
        {product ? (
          <>
            <Stack>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "17px",
                  marginTop: "10px",
                  marginBottom: "-70px",
                  marginLeft: "170px",
                }}
                href="/"
              >
                Trang chủ
              </a>
              <p
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "17px",
                  marginTop: "50px",
                  marginBottom: "-70px",
                  marginLeft: "250px",
                }}
              >
                / Chi tiết sản phẩm
              </p>
            </Stack>
            <Container
              // maxWidth="md"
              component="article"
              sx={{ mt: 5, mb: 5, display: "flex" }}
            >
              {/* Images small */}
              <Stack width={"30%"}>
                {/* {["url", "2", "3"].map((item) => ( */}
                {[1, 2, 3].map(() => (
                  <img
                    src={product?.image}
                    alt=""
                    style={{
                      width: "140px",
                      maxWidth: "100%",
                      objectFit: "cover",
                      marginBottom: "10px",
                      marginTop: "20px",
                    }}
                  />
                ))}
              </Stack>
              <Stack direction={"row"} gap={3} width={"100%"} ml={"-200px"}>
                <img src={product.image} alt="" width={"600px"} />
                <Stack gap={3} width={"400px"}>
                  <Typography
                    component="h1"
                    fontSize={"26px"}
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography color={"red"}>{product.price}đ</Typography>
                  <Typography fontWeight={"bold"} color={"black"}>
                    Danh mục : {product.category.name}
                  </Typography>
                  <Stack direction={"row"} gap={2} alignItems={"center"}>
                    <Typography>Quantity: </Typography>
                    <IconButton
                      onClick={() =>
                        setQuantity(quantity === 0 ? 0 : quantity - 1)
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      id="outlined-basic"
                      label="quantity"
                      variant="outlined"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <IconButton onClick={() => setQuantity(quantity + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      width: "150px",
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                  <Typography
                    sx={{
                      borderBottom: "2px solid black",
                      paddingBottom: "5px",
                      width: "70px",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Mô tả
                  </Typography>
                  <Typography sx={{ fontFamily: "monsterrat" }}>
                    {product.description}
                  </Typography>
                </Stack>
              </Stack>
            </Container>
            <hr />
          </>
        ) : (
          <div
            style={{
              marginTop: "290px",
              textAlign: "center",
              marginBottom: "290px",
              color: "red",
            }}
          >
            Sản phẩm không tồn tại!...
          </div>
        )}
        {/* sản phẩm liên quan  */}
        <Container>
          <Stack
            sx={{
              textAlign: "center",
              fontSize: "30px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Có thể bạn cũng thích
          </Stack>
          <Grid container spacing={3}>
            {products.slice(0, 4).map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={3}>
                <TextPro to={`/products/${product._id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                </TextPro>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* banner */}
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
      </>
    );
  };
  
  export default ProductDetail;
  