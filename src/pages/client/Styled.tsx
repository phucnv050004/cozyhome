import {
    CardMedia,
    Stack,
    styled,
    CardMediaProps,
    Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

export const InfoBannerFirst = styled(Stack)({
    position: "relative",
    marginBottom: "30px",
});
export const TextBannerFirst = styled(Stack)({
    position: "absolute",
    top: "25%",
    left: "35%",
});
export const InfoBannerSecond = styled(Stack)({
    position: "relative",
});
export const TextBannerSecond = styled(Stack)({
    position: "absolute",
    top: "30%",
    left: "5%",
});
export const InfoImgProduct = styled(Stack)({});
// img banner products
export const InformationSample = styled(Stack)({
    paddingTop: "86px",
    position: "relative",
    height: "1000px",
});
// ------------------------
export const ImgPrimary = styled(CardMedia)<CardMediaProps>`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;
// ------------------------
export const SubBox1 = styled(Stack)({
    // position: "absolute",
});
export const TextInfo_1 = styled(Stack)({
    marginLeft: "47px",
});

export const SubBox2 = styled(Stack)({
    position: "absolute",
    top: "80px",
    right: "10px",
});
export const TextInfo_2 = styled(Stack)({
    marginRight: "25px",
});
export const SubBox3 = styled(Stack)({
    position: "absolute",
    top: "680px",
    left: "100px",
});
export const TextInfo_3 = styled(Stack)({
    marginLeft: "47px",
});
export const SubBox4 = styled(Stack)({
    position: "absolute",
    top: "580px",
    right: "150px",
});
export const TextInfo_4 = styled(Stack)({});
//----------------------------------Main--------------------------------
export const NewArrival = styled(Typography)({
    fontFamily: "Montserrat",
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        left: "0",
        top: "35px",
        width: "170px",
        height: "1px",
        backgroundColor: "black",
        // transform: "translateX(30%)",
        // borderRadius: "10px",
    },
});
// nameProducts
export const TextPro = styled(Link)({
    textDecoration: "none",
    color: "black",
    marginTop: "-10px",
    marginLeft: "-10px",
    fontSize: "13px",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
});
export const PricePro = styled(Typography)({
    fontSize: "20px",
    color: "red",
    marginLeft: "-10px",
    marginTop: "5px",
});
export const IconPro = styled(FavoriteBorderIcon)({
    marginLeft: "220px",
    marginTop: "10px",
});
export const ButtonPro = styled(Link)({
    position: "relative",
    backgroundColor: "black",
    width: "45px",
    height: "40px",
    marginLeft: "190px",
    marginTop: "-10px",
    borderTopLeftRadius: "15px",
    borderEndEndRadius: "15px",
});
export const CartPro = styled(ShoppingBagOutlinedIcon)({
    position: "absolute",
    left: "9.5px",
    top: "6px",
    color: "white",
    fontSize: "25px",
});
