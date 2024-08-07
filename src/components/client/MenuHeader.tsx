import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu, MenuItem, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "src/interfaces/TProduct";
import { TextPro } from "src/pages/client/Styled";

const MenuHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [,setSubMenuAnchorEl] = useState(null);
    const [, setSubSubMenuAnchorEl] = useState(null);
    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSubMenuAnchorEl(null);
        setSubSubMenuAnchorEl(null);
    };
    const [category, SetCategory] = useState<Category[]>([]);
    const getAllCategory = async () => {
        const { data } = await axios.get("/categories");
        console.log(data);
        SetCategory(data);
    };
    useEffect(() => {
        getAllCategory();
    }, []);
  return (
    <Stack>
            <Stack onClick={handleMenuOpen} direction={"row"}>
                <TextPro to={'/products'} sx={{ fontSize: "15px", fontFamily: "Roboto",marginTop:'1px' }}>
                    Sản Phẩm
                </TextPro>
                <ExpandMoreIcon sx={{ fontSize: "20px" }} />
            </Stack>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {category.map((cate) => (
                    <>
                        <MenuItem
                            onClick={handleMenuClose}
                            sx={{ width: "120px", paddingLeft: "20px" }}
                        >
                            <Typography
                                sx={{ fontSize: "15px", fontFamily: "Roboto" }}
                            >
                                {cate.name}
                            </Typography>
                        </MenuItem>
                    </>
                ))}
            </Menu>
        </Stack>
  )
}

export default MenuHeader