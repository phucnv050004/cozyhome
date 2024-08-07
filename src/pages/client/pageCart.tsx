import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Stack, styled, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import { Button, Flex } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "src/contexts/cart";
import { useProductCart } from "src/hooks/useProductCart";

const pageCart = () => {
    const EllipsisTypography = styled(Typography)({
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "400px",
    });
    const nav = useNavigate();
    const [loadings, setLoadings] = useState<boolean[]>([]);
    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
            nav("/checkout");
        }, 2000);
    };
    const { cart } = useCart();
    const { removeToCart } = useProductCart();
    const [isFavorited, setIsFavorited] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };
    return (
        <>
            <Stack sx={{ height: "700px" }}>
                <Stack sx={{ margin: "40px 0px 30px 170px" }}>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontFamily: "Montserrat",
                            fontSize: "25px",
                        }}
                    >
                        Giỏ Hàng
                    </Typography>
                </Stack>
                {/* cart */}
                {cart ? (
                    <>
                        {cart?.products.map((item, index) => (
                            <Stack
                                key={index}
                                direction={"row"}
                                justifyContent={"space-evenly"}
                                alignItems={"center"}
                                sx={{
                                    // backgroundColor: "red",
                                    width: "1300px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    paddingBottom: "15px",
                                    marginTop: "20px",
                                    borderBottom: "1px solid black",
                                }}
                            >
                                <Stack direction={"row"} gap={3}>
                                    {/* img */}
                                    <img
                                        src={item.product.image}
                                        alt=""
                                        width={"200px"}
                                    />
                                    {/* Thong tin san pham */}
                                    <Stack>
                                        {/* <Typography
                                            variant="h5"
                                            mb={1}
                                        ></Typography> */}
                                        <EllipsisTypography variant="h5" mb={1}>
                                            {item.product.title}
                                        </EllipsisTypography>
                                        <Typography>
                                            {item.product.category.name}
                                        </Typography>
                                        <Typography
                                            mt={"10px"}
                                            sx={{
                                                color: "red",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {item.product.price}
                                        </Typography>
                                        <Stack
                                            onClick={handleFavoriteClick}
                                            direction={"row"}
                                            alignItems={"center"}
                                            sx={{
                                                width: "500px",
                                                height: "50px",
                                                marginLeft: "-10px",
                                            }}
                                        >
                                            {isFavorited ? (
                                                <>
                                                    <IconButton
                                                        sx={{
                                                            width: "50px",
                                                            height: "50px",
                                                        }}
                                                    >
                                                        <FavoriteIcon color="error" />
                                                    </IconButton>
                                                    <Typography>
                                                        Thêm vào yêu thích
                                                    </Typography>
                                                </>
                                            ) : (
                                                <>
                                                    <IconButton
                                                        sx={{
                                                            width: "50px",
                                                            height: "50px",
                                                        }}
                                                    >
                                                        <FavoriteBorderIcon />
                                                    </IconButton>
                                                    <Typography>
                                                        Thêm vào yêu thích
                                                    </Typography>
                                                </>
                                            )}
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Số lượng */}
                                <Stack>
                                    <Typography>{item.quantity}</Typography>
                                </Stack>
                                {/* Delete product */}
                                <IconButton
                                    onClick={() =>
                                        removeToCart(item.product._id)
                                    }
                                >
                                    <DeleteIcon
                                        sx={{
                                            color: "gray",
                                            textAlign: "right",
                                        }}
                                    />
                                </IconButton>
                            </Stack>
                        ))}
                        <Flex
                            gap="small"
                            style={{ marginTop: "20px", marginLeft: "110px" }}
                            wrap
                        >
                            <Button
                                type="primary"
                                loading={loadings[0]}
                                onClick={() => enterLoading(0)}
                            >
                                Thanh toán
                            </Button>
                        </Flex>
                    </>
                ) : (
                    <>
                        <div style={{ textAlign: "center" }}>
                            Không có sản phẩm trong giỏ hàng
                        </div>
                        <Flex align="flex-start" gap="small" vertical>
                            <Button
                                style={{ marginLeft: "47%" }}
                                type="primary"
                            >
                                <NavLink to={"/products"}>Mua ngay</NavLink>
                            </Button>
                        </Flex>
                    </>
                )}
            </Stack>
        </>
    );
};

export default pageCart;
