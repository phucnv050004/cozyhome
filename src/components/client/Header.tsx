
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import RoomIcon from "@mui/icons-material/Room";
import {
  Badge,
  Button,
  Fade,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NestedMenu from "./MenuHeader";
import { HeaderSecond, SubHeaderLeft, SubHeaderRight } from "./Styled";
import SearchIcon from "@mui/icons-material/Search";
import { TextPro } from "src/pages/client/Styled";
import React, { useMemo } from "react";
import { useCart } from "src/contexts/cart";
import { NavLink } from "react-router-dom";
import Cart from "src/pages/client/Cart";
const Header = () => {
  const { cart } = useCart();

  const cartQuantity = useMemo(
      () =>
          cart
              ? cart.products.reduce(
                    (total, { quantity }) => total + quantity,
                    0
                )
              : 0,
      [cart]
  );
  const LogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      window.location.href = "/";
    }
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userJson = localStorage.getItem("user");
  const username = userJson ? JSON.parse(userJson)?.user.username : null;
  const user = userJson ? JSON.parse(userJson)?.user : null;
  console.log(user);
  return (
    <>
      {/* first header */}
      <Stack
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <SubHeaderLeft
          direction={"row"}
          gap={"10px"}
          display={"flex"}
          alignItems={"center"}
        >
          <PhonePausedIcon />
          <Typography sx={{ fontSize: "12px", fontFamily: "Roboto" }}>
            0385137111
          </Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: "Roboto" }}>
            Giới Thiệu
          </Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: "Roboto" }}>
            Khuyến Mãi
          </Typography>
          <Typography
            color={"red"}
            sx={{ fontSize: "12px", fontFamily: "Roboto" }}
          >
            Giá Đặc Biệt
          </Typography>
        </SubHeaderLeft>
        <SubHeaderRight
          direction={"row"}
          gap={"10px"}
          display={"flex"}
          alignItems={"center"}
        >
           <Typography>
                        <Badge badgeContent={cartQuantity} color="error">
                            <Cart />
                        </Badge>
                    </Typography>
          <RoomIcon
            sx={{
              fontSize: "20px",
              fontFamily: "Roboto",
              marginRight: "5px",
            }}
          />
          <FavoriteBorderIcon
            sx={{
              fontSize: "20px",
              fontFamily: "Roboto",
              marginRight: "5px",
            }}
          />
          {username ? (
            <>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {username}
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {user?.role === "admin" ? (
                  <>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <a style={{ textDecoration: "none" }} href="/admin">
                      <MenuItem onClick={handleClose}>Admin</MenuItem>
                    </a>
                    <Typography onClick={LogOut}>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Typography>
                  </>
                ) : (
                  <>
                   <MenuItem  onClick={handleClose}><NavLink style={{ textDecoration: "none" }} to={"/orders"}>Đơn hàng</NavLink></MenuItem>
                    <Typography onClick={LogOut}>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Typography>
                  </>
                )}
              </Menu>
            </>
          ) : (
            <>
              <TextPro
                to={"/login"}
                sx={{
                  fontSize: "15px",
                  fontFamily: "Roboto",
                  marginRight: "-10px",
                  marginTop: "5px",
                }}
              >
                Login
              </TextPro>
              <PersonIcon sx={{ fontSize: "20px", fontFamily: "Roboto" }} />
            </>
          )}
        </SubHeaderRight>
      </Stack>
      {/* second header*/}
      <HeaderSecond
        direction={"row"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{
          marginTop: "10px",
          paddingBottom: "15px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack direction={"row"} display={"flex"}>
          <MenuIcon
            sx={{
              fontSize: "35px",
              marginRight: "30px",
              marginTop: "1px",
            }}
          />
          <a href="/">
            <img
              style={{ height:"60px",width:"100px",marginTop:"-10px" }}
              src="https://xuonginhanoi.vn/files/logo-noi-that%20(14).jpg"
              alt=""
              width={"120px"}
            />
          </a>
        </Stack>
        <Stack
          direction={"row"}
          display={"flex"}
          gap={"20px"}
          sx={{ marginLeft: "-80px" }}
        >
          <NestedMenu />
          <Typography sx={{ fontSize: "15px", fontFamily: "Roboto" }}>
            Bộ Sưu Tập
          </Typography>
          <Typography sx={{ fontSize: "15px", fontFamily: "Roboto" }}>
            Thiết Kế Nội Thất
          </Typography>
          <Typography sx={{ fontSize: "15px", fontFamily: "Roboto" }}>
            Góc Cảm Hứng
          </Typography>
        </Stack>
        <Stack>
          <TextField
            id="search-input"
            label="TÌM KIẾM SẢN PHẨM"
            variant="standard"
            sx={{ width: "300px", marginTop: "-20px" }}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </Stack>
      </HeaderSecond>
    </>
  )
}

export default Header