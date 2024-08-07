import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";


const Sidebar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <h1 style={{ marginLeft: "20px" }}>Hello Admin</h1>
        {["Quản lý sản phẩm", "Quản lý bài viết", "Quản lý đơn hàng", "Thống kê"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["LogOut"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <a href="/">
                <Button  sx={{marginLeft:"50px"}} variant="contained" color="error">
                  <ListItemText primary={text} />
                </Button>
                </a>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    ); 
  return (
    <div style={{ zIndex: "1" }}>
    <Button onClick={toggleDrawer(true)}>
        <DensityMediumIcon />
    </Button>
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
</div>
  )
}

export default Sidebar