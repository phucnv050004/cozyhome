import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "src/contexts/cart";
import { useProductCart } from "src/hooks/useProductCart";
const Cart = () => {
    const [open, setOpen] = React.useState(false);
    const { cart } = useCart();
    const { removeToCart } = useProductCart();
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 350, right: 0 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <h1 style={{ textAlign: "center" }}>Giỏ Hàng</h1>

            <>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </ListItem>
                </List>
                {cart ? (
                    cart?.products.map((item, index) => (
                        <>
                            <List>
                                <Box
                                    key={index}
                                    display="flex"
                                    justifyContent="space-between"
                                    p={2}
                                    borderBottom="1px solid"
                                    borderColor="text.secondary"
                                >
                                    <Box display="flex" alignItems="center">
                                        <Avatar
                                            src={item.product.image}
                                            alt="Armchair Oriental"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 1,
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Box ml={2}>
                                            <Typography
                                                variant="h6"
                                                color="text.primary"
                                            >
                                                {item.product.title.substring(
                                                    0,
                                                    15
                                                )}
                                                ...
                                            </Typography>
                                            <Typography color="text.secondary">
                                                {item.quantity} ×{" "}
                                                {item.product.price}₫
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <IconButton
                                        onClick={() =>
                                            removeToCart(item.product._id)
                                        }
                                        color="error"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            </List>
                        </>
                    ))
                ) : (
                    <Typography
                        sx={{ textAlign: "center" }}
                        variant="h6"
                        color="text.primary"
                    >
                        Không có sản phẩm nào trong giỏ hàng
                    </Typography>
                )}

                {/*  */}
                <List sx={{ marginTop: 45 }}>
                    <Stack sx={{ width: "200px", marginLeft: "80px" }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "black",
                                marginBottom: "10px",
                                border: "2px solid gray",
                                height: "50px",
                                borderRadius: "15px",
                            }}
                        >
                            <Link
                                to="cart"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                }}
                            >
                                Xem Giỏ Hàng
                            </Link>
                        </Button>
                    </Stack>
                </List>
            </>
        </Box>
    );

    return (
        <div style={{ zIndex: "1" }}>
            <Button
                onClick={toggleDrawer(true)}
                sx={{ color: "black", marginRight: "-20px" }}
            >
                <ShoppingCartIcon
                    sx={{ fontSize: "20px", fontFamily: "Roboto" }}
                />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default Cart;
