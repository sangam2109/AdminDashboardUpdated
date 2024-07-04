// ProfileMenuBar.tsx
import React from "react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Cached,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Logout,
} from "@mui/icons-material";
import styles from "../../styles/menuBars.module.scss";

interface ProfileMenuBarProps {
  anchorEl: null | HTMLElement;
  menuId: string;
  isOpen: boolean;
  onClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  faceSrc: string; // Replace with actual prop type
  userName: string; // Replace with actual prop type
}

const ProfileMenuBar: React.FC<ProfileMenuBarProps> = ({
  anchorEl,
  menuId,
  isOpen,
  onClose,
  handleProfileMenuOpen,
  faceSrc,
  userName,
}) => {
  return (
    <Box>
      <IconButton
        disableRipple
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        className={styles.Profile}
        sx={{ display: { xs: "flex", md: "flex", sm: "flex" } }}
      >
        <Badge
          badgeContent={""}
          color="success"
          sx={{
            "& .MuiBadge-badge": {
              minWidth: "8px",
              height: "8px",
              padding: "0 1px",
              marginTop: "25px",
              marginRight: "2px",
            },
          }}
        >
          <Avatar src={faceSrc} alt="Profile Image" className={styles.profileImage}/>
        </Badge>
        <Typography
          variant="body1"
          sx={{ display: { xs: "none", md: "block", sm: "none" } }}
          className={styles.ProfileName}
        >
          {userName}
        </Typography>
        <KeyboardArrowDownIcon sx={{ transform: "translateY(-2px)" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isOpen}
        onClose={onClose}
        className={styles.Menu}
      >
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <Cached
            fontSize="small"
            color="success"
            sx={{ marginRight: "16px", color: "#1bcfb4" }}
          />
          <Typography
            variant="inherit"
            noWrap
            className={styles.profileMenuText}
          >
            Activity Log
          </Typography>
        </MenuItem>
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <Logout
            fontSize="small"
            sx={{ marginRight: "16px", color: "#b66dff" }}
          />
          <Typography
            variant="inherit"
            noWrap
            className={styles.profileMenuText}
          >
            Signout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenuBar;
