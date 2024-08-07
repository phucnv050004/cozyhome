
import { PhoneSDT, Footers } from "./Styled";
import { List, ListItem, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
    sx={{
        backgroundColor: "rgb(49, 48, 54)", marginBottom:"-8px",
    }}
    width={"100%"}
>
    {/* Footer */}
    <Footers
        direction={"row"}
        sx={{ height: "350px", paddingTop: "40px"}}
        flexWrap={"wrap"}
        gap={15}
    >
        {/* logo */}
        <Stack sx={{ marginLeft: "20px" }}>
            <Stack>
                {" "}
                <img
                    src="../../public/images/logo2.png"
                    alt=""
                    style={{ width: "150px", marginLeft: "40px" }}
                />
            </Stack>

            <PhoneSDT>HOTLINE:0385137427</PhoneSDT>
        </Stack>
        {/* info */}
        {/* 1 */}
        <Stack>
            <List>
                <ListItem>
                    <Typography variant="h4">Giới thiệu</Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Về G Shop
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Tuyển Dụng
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Hệ Thống Cửa Hàng
                    </Typography>
                </ListItem>
            </List>
        </Stack>
        {/* 2 */}
        <Stack>
            <List>
                <ListItem>
                    <Typography variant="h4">
                        Dịch Vụ Khách Hàng
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Chính Sách Điều Khoản
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Hướng Dấn Mua Hàng
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Chính Sách Đổi Trả
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Chính Sách Thanh Toán
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Chính Sách ĐỔi Trả
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Chính Sách Giao Nhận Vận Chuyển
                    </Typography>
                </ListItem>
            </List>
        </Stack>
        {/* 3 */}
        <Stack>
            <List>
                <ListItem>
                    <Typography variant="h4">Liên Hệ</Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Hotline
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Email
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Live Chat
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Messenger
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "Montserrat" }}
                    >
                        Liên Hệ
                    </Typography>
                </ListItem>
            </List>
        </Stack>
    </Footers>
    <br />
    <Typography
        textAlign={"center"}
        sx={{ fontFamily: "Montserrat", color: "white" }}
    >
        Copyright by @CozyHome
    </Typography>
    <br />
</Stack>
  )
}

export default Footer