import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Fullscreen,
  FullscreenExit,
  DarkMode,
  Menu as MenuIcon,
  Brightness7,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../home-page";
import { handleLogout } from "../../store/userSlice";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { toggleDarkMode } from "../../store/userSlice/theme";

const drawerWidth = 270;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

interface DarkThemeColors {
  backgroundColor: string;
  textColor: string;
}

const darkThemeColors: DarkThemeColors = {
  backgroundColor: "rgb(18, 18, 18)",
  textColor: "#fff",
};

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const darkMode = useSelector((state: any) => state.user.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { backgroundColor, textColor } = darkMode
    ? darkThemeColors
    : { backgroundColor: "#fff", textColor: "#000" };

  const [dropDown, setdropDown] = useState(null);

  const handleClick = (event: any) => {
    setdropDown(event.currentTarget);
  };

  const handleClose = () => {
    setdropDown(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleLogoutClick = () => {
    dispatch(handleLogout());
    navigate("/");
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        console.log(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>,
    <svg
      id="icon-home1"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g id="Layer_2" data-name="Layer 2" stroke="currentColor">
        <g id="Layer_1-2" data-name="Layer 1" stroke="white">
          <path d="M10.66,13H5a4,4,0,0,0-4,4v2"></path>
          <circle cx="8.5" cy="5" r="4"></circle>
          <path d="M19.32,9.1H14.6a1.18,1.18,0,0,0-1.18,1.19v9.44a1.18,1.18,0,0,0,1.18,1.18h7.09a1.18,1.18,0,0,0,1.18-1.18V12.65Z"></path>
          <line x1="20.13" y1="15.5" x2="16.15" y2="15.5"></line>
          <line x1="18.59" y1="13.03" x2="16.1" y2="13.03"></line>
          <line x1="20.13" y1="17.96" x2="16.15" y2="17.96"></line>
        </g>
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <path d="M14,2L14,8L20,8"></path>
      <path d="M16,13L8,13"></path>
      <path d="M16,17L8,17"></path>
      <path d="M10,9L9,9L8,9"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>,
  ];

  const menuItems = [
    { text: "Profile", path: "/home", icon: icons[0] },
    { text: "Resources", path: "/Resources", icon: icons[1] },
    { text: "My Resources", path: "/MyResources", icon: icons[2] },
    { text: "Saved Resources", path: "/SavedResources", icon: icons[3] },
    { text: "Setting", path: "", icon: icons[4] },
  ];
  const isActive = (path: string) => {
    return location.pathname === path
      ? {
          color: "#21536f",
          backgroundColor: "rgb(249, 217, 182)",
          borderRadius: "10px",
          width: "220px",
        }
      : { color: "white", backgroundColor: "transparent", width: "220px" };
  };

  const drawer = (
    <div>
      <List sx={{ margin: "15px" }}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              padding: "10px 0px",
            }}
          >
            <Link to={item.path} style={{ textDecoration: "none" }}>
              <ListItemButton
                disableRipple
                sx={{
                  borderRadius: "10px",
                  padding: "3px 15px",
                  "&:hover": {
                    backgroundColor: "rgb(249, 217, 182)",
                    color: "#21536f",
                    borderRadius: "10px",
                    padding: "3px 15px",
                  },
                  "&.Mui-selected, &.Mui-selected:hover": {
                    backgroundColor: "transparent",
                  },
                  ...isActive(item.path), // Apply active or inactive styles
                }}
              >
                <ListItemIcon sx={{ minWidth: "50px", height: "25px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ fontSize: "16px" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div
      className="main-container"
      style={{
        backgroundColor: "#EBEEF6",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: backgroundColor,
            boxShadow: "0",
          }}
        >
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#21536f", fontSize: "30px" }}
            >
              Education Hub
            </Typography>

            <IconButton
              sx={{
                ml: "auto",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "rgb(235, 238, 246)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
                onClick={() => dispatch(toggleDarkMode())}
              >
                {darkMode ? (
                  <Brightness7
                    sx={{ width: "40px", color: "rgb(61, 68, 101)" }}
                  />
                ) : (
                  <DarkMode sx={{ width: "40px", color: "rgb(61, 68, 101)" }} />
                )}
              </div>
            </IconButton>

            <IconButton
              onClick={toggleFullscreen}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "rgb(235, 238, 246)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
              >
                {isFullscreen ? (
                  <FullscreenExit
                    sx={{ fontSize: "34px", color: "rgb(61, 68, 101)" }}
                    onClick={toggleFullscreen}
                  />
                ) : (
                  <Fullscreen
                    sx={{ fontSize: "34px", color: "rgb(61, 68, 101)" }}
                    onClick={toggleFullscreen}
                  />
                )}
              </div>
            </IconButton>

            <div>
              <IconButton
                aria-controls="account-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:active": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <img
                  src={require("../../assets/profile.jpg")}
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "5px",
                    marginLeft: "5px",
                  }}
                />
                <p
                  style={{
                    color: textColor,
                    margin: "0",
                    marginLeft: "7px",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  Hey,{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Demo
                  </span>{" "}
                  <br /> Admin
                </p>
              </IconButton>
              <Menu
                id="account-menu"
                anchorEl={dropDown}
                keepMounted
                open={Boolean(dropDown)}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#21536f",
                color: "#fff",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={require("../../assets/logo.png")}
                alt=""
                style={{ height: "150px" }}
              />
            </div>

            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,

                background: "#21536f",
                color: "#FFF",
              },
              background: "#9E0303",
            }}
            open
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={require("../../assets/logo.png")}
                alt=""
                style={{ height: "150px" }}
              />
            </div>

            {drawer}
          </Drawer>
        </Box>
      </Box>

      <main style={{ marginLeft: mobileOpen ? "280px" : "20px" }}>
        <Box>
          <Paper
            elevation={3}
            style={{
              padding: 10,
              marginTop: 80,
              marginRight: "20px",
              marginBottom: "20px",
              backgroundColor: backgroundColor,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: " #21536f",
                }}
              >
                <h2
                  style={{
                    margin: "0px",
                    marginLeft: "25px",
                    fontWeight: " 600",
                    fontSize: "24px",
                  }}
                >
                  Welcome back!
                </h2>
              </div>
              <div style={{ color: "grey" }}>
                <p style={{ margin: "0px" }}>Back / Dashboard</p>
              </div>
            </div>
          </Paper>
        </Box>
        <Outlet />
      </main>
    </div>
  );
}
