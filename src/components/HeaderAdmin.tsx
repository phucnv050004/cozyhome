import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import NotificationsIcon from "@mui/icons-material/Notifications";


const HeaderAdmin = () => {
  return (
    <div>
            <Toolbar
                sx={{
                    pr: "24px",
                    bgcolor: "primary.main",
                    mt: -1,
                    zIndex: "1",
                    position: "fixed",
                    right: 0,
                    left: 0, // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        marginRight: "36px",
                    }}
                >
                    <DensityMediumIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </div>
  )
}

export default HeaderAdmin