// NotificationMenuBar.tsx
import React from "react";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Box,
  ListItemText
} from "@mui/material";
import { Trans } from "react-i18next";
import {
  NotificationsNoneOutlined as NotificationsIcon,
  CalendarMonth,
  Settings,
  LinkOff,
} from "@mui/icons-material";
import styles from "../../styles/menuBars.module.scss";

interface NotificationMenuBarProps {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  onClose: () => void;
  handleNotificationMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const NotificationMenuBar: React.FC<NotificationMenuBarProps> = ({
  anchorEl,
  isOpen,
  onClose,
  handleNotificationMenuOpen,
}) => {
  return (
    <Box>
      <IconButton
        disableRipple
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
              minWidth: "6px",
              height: "6px",
              padding: "0 1px",
              marginRight: "4px",
            },
          }}
        >
          <NotificationsIcon fontSize="small" sx={{ fontSize: "1.25rem" }} />
        </Badge>
      </IconButton>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        <Typography variant="inherit" className={styles.headingText}>
          Notifications
        </Typography>
        <Divider />
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <CalendarMonth className={styles.iconCalendar} />
          <div className={styles.textAlignment}>
            <Typography variant="body1" className={styles.primaryText}>
              {" "}
              Event today
            </Typography>
            <Typography variant="body2" className={styles.secondaryText}>
              Just a reminder that you have an event today
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <Settings className={`${styles.img} ${styles.iconSetting}`} />
          <div className={styles.textAlignment}>
            <Typography variant="body1" className={styles.primaryText}>
              {" "}
              Settings
            </Typography>
            <Typography variant="body2" className={styles.secondaryText}>
              Update Dashboard
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <LinkOff className={`${styles.img} ${styles.iconLink}`} />
          <div className={styles.textAlignment}>
            <Typography variant="body1" className={styles.primaryText}>
              {" "}
              Launch Admin
            </Typography>
            <Typography variant="body2" className={styles.secondaryText}>
              New admin now
            </Typography>
          </div>
          
        </MenuItem>
        <Divider />
        <Typography className={` ${styles.menuFooter}`}>
          {" "}
          See all notifications
        </Typography>
      </Menu>
    </Box>
  );
};

export default NotificationMenuBar;
