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
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Cached, ImageAspectRatioOutlined, Logout } from "@mui/icons-material";
import face1 from "../../assets/images/faces/face1.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Inbox as InboxIcon,
  Settings,
  CalendarMonth,
   LinkOff,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../styles/navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import Image from "next/image";
import BasicUiIcon from "@mui/icons-material/GpsFixedSharp";
import TableIcon from "@mui/icons-material/BackupTableSharp";
import ContactsIcon from "@mui/icons-material/Contacts";
import ChartBarIcon from "@mui/icons-material/Addchart";
import MedicalBagIcon from "@mui/icons-material/MedicalServices";
import face2 from "../../assets/images/faces/face2.jpg";
import face3 from "../../assets/images/faces/face3.jpg";
import face4 from "../../assets/images/faces/face4.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../../assets/images/logo.svg"
import miniLogo from "../../assets/images/logo-mini.svg"
import { MenuItems } from "./navbarconstants";
const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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
  const [open, setOpen] = useState(false);
  const [menuState, setMenuState] = useState<{ [key: string]: boolean }>({});
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);(null);
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );
  const [anchorElMessages, setAnchorElMessages] = useState<null | HTMLElement>(
    null
  );
  const [anchorElNotification, setAnchorElNotification] =
    useState<null | HTMLElement>(null);

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
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorElProfile}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuIdProfile}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
      className={styles.Menu}
    >
      <MenuItem onClick={handleProfileMenuClose} className={styles.IconStyle}>
        <Cached fontSize="small" color="success" />
        <Typography variant="inherit" noWrap>
          <Trans>Activity Log</Trans>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose} className={styles.IconStyle}>
        <Logout
          fontSize="small"
          className={styles.LogoutIcon}
          style={{ color: "#ebedf2" }}
        />
        <Typography variant="inherit" noWrap>
          <Trans>Signout</Trans>
        </Typography>
      </MenuItem>
    </Menu>
  );

  const renderMessagesMenu = (
    <Menu
      anchorEl={anchorElMessages}
      open={isMessagesMenuOpen}
      onClose={handleMessagesMenuClose}
    >
      <Typography className={styles.headingText}>Messages</Typography>

      <Divider />
      <MenuItem onClick={handleMessagesMenuClose} className={styles.MenuItem}>
        <Image src={face4} alt="user" className={styles.img} />
        <ListItemText
          primary={<Trans>Mark send you a message</Trans>}
          secondary="1 Minutes ago"
        />
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMessagesMenuClose} className={styles.MenuItem}>
        <Image src={face2} alt="user" className={styles.img} />
        <ListItemText
          primary={<Trans>Cregh send you a message</Trans>}
          secondary="15 Minutes ago"
        />
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMessagesMenuClose} className={styles.MenuItem}>
        <Image src={face3} alt="user" className={styles.img} />
        <ListItemText
          primary={<Trans>Profile picture updated</Trans>}
          secondary="18 Minutes ago"
        />
      </MenuItem>
      <Divider />

      <Typography className={` ${styles.cursorPointer}`}>
        {" "}
        4 new messages
      </Typography>
    </Menu>
  );

  const renderNotificationMenu = (
    <Menu
      anchorEl={anchorElNotification}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
    >
      <Typography className={styles.headingText}>Notifications</Typography>

      <Divider />
      <MenuItem
        onClick={handleNotificationMenuClose}
        className={styles.MenuItem}
      >
        <CalendarMonth className={styles.iconCalendar} />

        <ListItemText
          primary={<Trans>Event today</Trans>}
          secondary="Just a reminder that you have an event today"
        />
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleNotificationMenuClose}
        className={styles.MenuItem}
      >
        <Settings className={`${styles.img} ${styles.iconSetting}`} />
        <ListItemText
          primary={<Trans>Settings</Trans>}
          secondary="Update Dashboard"
        />
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleNotificationMenuClose}
        className={styles.MenuItem}
      >
        <LinkOff className={`${styles.img} ${styles.iconLink}`} />
        <ListItemText
          primary={<Trans>Launch Admin</Trans>}
          secondary="New admin now"
        />
      </MenuItem>
      <Divider />

      <Typography className={` ${styles.cursorPointer}`}>
        {" "}
        See all notifications
      </Typography>
    </Menu>
  );

  

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        color="inherit"
        className={styles.navbar}
      >
        <Toolbar>
          {open ? (
            <Image src={logo} alt="logo" className={styles.navbarBrand} />
          ) : (
            <Image
              src={miniLogo}
              className={styles.navbarBrandMini}
              alt="logo"
            />
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={styles.menuIcon}
            sx={{
              ml: { xs: "auto", sm: "auto", md: 0 },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            className={styles.searchField}
            sx={{ display: { xs: "none", md: "block", sm: "none" } }}
          >
            <form className={styles.form} action="#">
              <Box className={styles.inputGroup}>
                <Box className={styles.inputGroupPrepend}>
                  <IconButton className={styles.inputGroupText} disabled>
                    <SearchIcon />
                  </IconButton>
                </Box>
                <InputBase
                  placeholder="Search projects"
                  classes={{
                    root: styles.formControl,
                  }}
                />
              </Box>
            </form>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" }, gap: 4 }}>
            <Box className={styles.ProfileIcon}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuIdProfile}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{ display: { xs: "flex", md: "flex", sm: "flex" } }}
              >
                <Badge
                  badgeContent={""}
                  color="success"
                  sx={{
                    "& .MuiBadge-badge": {
                      minWidth: "10px",
                      height: "10px",
                      fontSize: "10px",
                      padding: "0 4px",
                      marginTop: "33px",
                      marginRight: "12px",
                    },
                  }}
                >
                  <Avatar
                    src={face1.src}
                    alt="Profile Image"
                    className={styles.img}
                  />
                </Badge>
                <Typography
                  className={styles.ProfileName}
                  sx={{ display: { xs: "none", md: "block", sm: "none" } }}
                >
                  David Greymax
                </Typography>
                <KeyboardArrowDownIcon />
              </IconButton>
              {renderProfileMenu}
            </Box>

            <IconButton
              size="small"
              aria-label="expand screen"
              color="inherit"
              onClick={handleExpandClick}
              sx={{ display: { xs: "none", md: "block", sm: "none" } }}
            >
              <CropFreeIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleMessagesMenuOpen}
              sx={{ display: { xs: "block", md: "block", sm: "block" } }}
            >
              <Badge
                badgeContent={""}
                color="secondary"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "10px",
                    height: "10px",
                    fontSize: "10px",
                    padding: "0 4px",
                  },
                }}
              >
                <MailIcon fontSize="small" />
              </Badge>
            </IconButton>
            {renderMessagesMenu}

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationMenuOpen}
              sx={{ display: { xs: "block", md: "block", sm: "block" } }}
            >
              <Badge
                badgeContent={""}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "10px",
                    height: "10px",
                    fontSize: "10px",
                    padding: "0 4px",
                  },
                }}
              >
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            {renderNotificationMenu}
            <IconButton
              size="small"
              aria-label="Log Out"
              color="inherit"
              sx={{ display: { xs: "none", md: "block", sm: "none" } }}
            >
              <PowerSettingsNewIcon fontSize="medium" />
            </IconButton>
            <IconButton
              size="small"
              aria-label="Log Out"
              color="inherit"
              sx={{ display: { xs: "none", md: "block", sm: "none" } }}
            >
              <FormatLineSpacingIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
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
                    {item.icon}
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
