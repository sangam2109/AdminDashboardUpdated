"use client";

import React, { useState, useEffect } from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from "@mui/material/styles";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import {
  AppBarProps as MuiAppBarProps,
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  Menu,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Collapse,
  MenuItem,
} from "@mui/material";
import { Avatar } from "@mui/material";
import { Trans } from "react-i18next";
import Badge from "@mui/material/Badge";
import ProfileMenuBar from "./profileMenu";
import NotificationMenuBar from "./notificationMenu";
import MessageMenuBar from "./messageMenu";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Cached, ImageAspectRatioOutlined, Logout } from "@mui/icons-material";
import face1 from "../../assets/images/faces/face1.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  EmailOutlined as MailIcon,
  Inbox as InboxIcon,
  
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../styles/navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../../assets/images/logo.svg"
import miniLogo from "../../assets/images/logo-mini.svg"
import { MenuItems } from "./navbarConstants";
import HoverCard from "./hoverCard";
const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 70,
  [theme.breakpoints.up("sm")]: {
    width: 70,
  },
});


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  display: "flex",
  justifyContent: "center",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));


const MiniDrawer: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuState, setMenuState] = useState<{ [key: string]: boolean }>({});
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string>("Dashboard");
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );
  const [anchorElMessages, setAnchorElMessages] = useState<null | HTMLElement>(
    null
  );
  const [anchorElNotification, setAnchorElNotification] =
    useState<null | HTMLElement>(null);
     const [hoveredItem, setHoveredItem] = useState(""); // State to track hovered sidebar item

     const handleHover = (title:string) => {
       setHoveredItem(title);
     };

     const handleHoverOut = () => {
       setHoveredItem("");
     };

  const handleExpandClick = () => {
    if (isExpanded) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsExpanded(!isExpanded);
  };
  const handleClick = (title: string) => {
    
    setMenuState({ ...menuState, [title]: !menuState[title] });
    
  };
    const handleClickItem = (title: string) => {
      setActiveItem(title)
    };

  const handleSubItemClick = (path: string) => {
    router.push(path);
  };

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen((open)=>!open)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  useEffect(() => {
    // Reset menu state on route change
    setMenuState({});
  }, [router]);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleMessagesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMessages(event.currentTarget);
  };
  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleMessagesMenuClose = () => {
    setAnchorElMessages(null);
  };
   const handleNotificationMenuClose = () => {
     setAnchorElNotification(null);
   };

  const isProfileMenuOpen = Boolean(anchorElProfile);
  const isMessagesMenuOpen = Boolean(anchorElMessages);
  const isNotificationMenuOpen=Boolean(anchorElNotification)

  const menuIdProfile = "primary-search-account-menu";
  const menuIdMessages = "messages-menu";
 
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        color="inherit"
        className={styles.navbar}
      >
        <Toolbar className={styles.toolbar}>
          {open ? (
            <Image src={logo} alt="logo" className={styles.navbarBrand} />
          ) : (
            <Image
              src={miniLogo}
              className={styles.navbarBrandMini}
              alt="logo"
            />
          )}
          <Box
            className={`${styles.navbarArea} ${
              open ? styles.openWidth : styles.closedWidth
            } `}
          >
            <Box className={styles.SearchBarAlign}>
              <IconButton
                disableRipple
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={styles.menuIcon}
                sx={{
                  ml: { xs: "auto", sm: "auto", md: 0 },
                }}
              >
                <MenuIcon sx={{ fontSize: "1.9rem" }} />
              </IconButton>

              <Box
                className={styles.searchField}
                sx={{ display: { xs: "none", md: "block", sm: "none" } }}
              >
                <form className={styles.form} action="#">
                  <Box className={styles.inputGroup}>
                    <Box
                      className={styles.inputGroupPrepend}
                      sx={{ height: "100%" }}
                    >
                      <IconButton
                        disableRipple className={styles.inputGroupText} disabled>
                        <SearchIcon sx={{ fontSize: "17px" }} />
                      </IconButton>
                    </Box>
                    <InputBase
                      placeholder="Search projects"
                      className={styles.formControl}
                    />
                  </Box>
                </form>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <ProfileMenuBar
                  anchorEl={anchorElProfile}
                  menuId={menuIdProfile}
                  isOpen={isProfileMenuOpen}
                  onClose={handleProfileMenuClose}
                  handleProfileMenuOpen={handleProfileMenuOpen}
                  faceSrc={face1.src} // Replace with actual prop
                  userName="David Greymax" // Replace with actual prop
                />
                <IconButton
                  disableRipple
                  size="small"
                  aria-label="expand screen"
                  color="inherit"
                  onClick={handleExpandClick}
                  sx={{ display: { xs: "none", md: "block", sm: "none" } }}
                >
                  <CropFreeIcon fontSize="small" sx={{ fontSize: "1.25rem" }} />
                </IconButton>
                {/* Message Menu */}
                <MessageMenuBar
                  anchorEl={anchorElMessages}
                  isOpen={isMessagesMenuOpen}
                  onClose={handleMessagesMenuClose}
                  handleMessagesMenuOpen={handleMessagesMenuOpen}
                />

                {/* Notification Menu */}
                <NotificationMenuBar
                  anchorEl={anchorElNotification}
                  isOpen={isNotificationMenuOpen}
                  onClose={handleNotificationMenuClose}
                  handleNotificationMenuOpen={handleNotificationMenuOpen}
                />
                <IconButton
                  disableRipple
                  size="small"
                  aria-label="Log Out"
                  color="inherit"
                  sx={{ display: { xs: "none", md: "block", sm: "none" } }}
                >
                  <PowerSettingsNewIcon
                    fontSize="medium"
                    sx={{ fontSize: "1.25rem" }}
                  />
                </IconButton>
                <IconButton
                  disableRipple
                  size="small"
                  aria-label="Log Out"
                  color="inherit"
                  sx={{ display: { xs: "none", md: "block", sm: "none" } }}
                >
                  <FormatLineSpacingIcon
                    fontSize="medium"
                    sx={{ fontSize: "1.25rem" }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/*SideBar Part*/}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            disableRipple onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className={styles.SidebarList}>
          <ListItem sx={{ display: open ? "block" : "none" }}>
            <a
              href="#!"
              className={styles.navLink}
              onClick={(evt) => evt.preventDefault()}
            >
              <div className={styles.navProfileImage}>
                <Image src={face1} alt="profile" width={50} height={50} />
                <span
                  className={`${styles.loginStatus} ${styles.online}`}
                ></span>{" "}
              </div>
              <div className={styles.navProfileText}>
                <Typography variant="body1" className={styles.fontWeightBold}>
                  David Grey. H
                </Typography>
                <Typography variant="body2" className={styles.textSecondary}>
                  Project Manager
                </Typography>
              </div>
              <BookmarkAddedIcon
                className={`${styles.textSuccess} ${styles.navProfileBadge}`}
              />{" "}
              {/* Material-UI Icon */}
            </a>
          </ListItem>
          {MenuItems.map((item) => (
            <React.Fragment key={item.title}>
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                }}
                onClick={() => handleClickItem(item.title)}
                className={`${styles.menuList} ${
                  activeItem === item.title ? styles.activeItem : ""
                }`}
                onMouseEnter={() => handleHover(item.title)}
                onMouseLeave={handleHoverOut}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() =>
                    item.subMenu
                      ? handleClick(item.title)
                      : router.push(item.path)
                  }
                  className={styles.MenuBar}
                >
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  ></ListItemText>

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.arrowIcon === 1 && (
                      <ArrowBackIosNewIcon
                        sx={{
                          opacity: open ? 1 : 0,
                          fontSize: "0.6rem",
                          top: "50%",
                          color: "#a2a2a2",
                          display: open ? "block" : "none",
                          transform: open ? "translateY(65%)" : "translateY(0)", // Adjust the values as needed
                        }}
                      />
                    )}
                    {item.icon &&
                      React.cloneElement(item.icon, {
                        sx: {
                          ...(item.icon.props.sx || {}), // Preserve existing styles if any
                          color: activeItem === item.title ? "#b66dff" : "", // Apply conditional color
                        },
                      })}
                  </ListItemIcon>
                </ListItemButton>
                {item.subMenu && (
                  <Collapse
                    in={menuState[item.title]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          disablePadding
                          sx={{ display: open ? "block" : "none" }}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 4,
                              fontWeight: 300,
                            }}
                            onClick={() => handleSubItemClick(subItem.path)}
                            // Use handleClick here
                          >
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                              <Typography className={styles.SubMenuItem}>
                                {subItem.icon === 1 ? (
                                  <ArrowForwardIcon
                                    className={styles.ArrowIcon}
                                    sx={{ fontSize: "1rem" }}
                                  />
                                ) : null}
                                {subItem.title}
                              </Typography>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </ListItem>
              {hoveredItem === item.title && (
                <HoverCard item={item} position={{ right: 240, top: 0 }} />
              )}
            </React.Fragment>
          ))}
        </List>
        <Divider />
        {/* Additional Menu Items */}
      </Drawer>
      <Box component="main">
        <DrawerHeader />
        {/* Main content */}
      </Box>
    </>
  );
};
export default MiniDrawer;
