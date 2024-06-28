// MessageMenuBar.tsx
import React from "react";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Box,
  ListItem,
  ListItemText,
  
} from "@mui/material";
import { Trans } from "react-i18next";
import Image from "next/image";
import { EmailOutlined as MailIcon } from "@mui/icons-material";
import styles from "../../styles/menuBars.module.scss"
import face2 from "../../assets/images/faces/face2.jpg";
import face3 from "../../assets/images/faces/face3.jpg";
import face4 from "../../assets/images/faces/face4.jpg";
interface MessageMenuBarProps {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  onClose: () => void;
  handleMessagesMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MessageMenuBar: React.FC<MessageMenuBarProps> = ({
  anchorEl,
  isOpen,
  onClose,
  handleMessagesMenuOpen,
}) => {
  return (
    <Box>
      <IconButton
        disableRipple
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
              minWidth: "6px",
              height: "6px",
              padding: "0 1px",
              marginRight: "4px",
            },
          }}
        >
          <MailIcon fontSize="small" sx={{ fontSize: "1.25rem" }} />
        </Badge>
      </IconButton>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        <Typography variant="inherit" className={styles.headingText}>
          Messages
        </Typography>
        <Divider />
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <Image src={face4} alt="user" className={styles.img} />
          <div className={styles.textAlignment}>
            <Typography variant="body1" className={styles.primaryText}>
              {" "}
              Mark send you a message
            </Typography>
            <Typography variant="body2" className={styles.secondaryText}>
              1 Minutes ago
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <Image src={face2} alt="user" className={styles.img} />
          <div className={styles.textAlignment}>
            <Typography variant="body1" className={styles.primaryText}>
              {" "}
              Cregh send you a message
            </Typography>
            <Typography variant="body2" className={styles.secondaryText}>
              15 Minutes ago
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onClose} className={styles.MenuItem}>
          <Image src={face3} alt="user" className={styles.img} />
          <div className={styles.textAlignment}>
            <Typography variant="body1" className={styles.primaryText}>
              {" "}
              Profile picture updated
            </Typography>
            <Typography variant="body2" className={styles.secondaryText}>
              18 Minutes ago
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <Typography className={` ${styles.menuFooter}`}>
          4 new messages
        </Typography>
      </Menu>
    </Box>
  );
};

export default MessageMenuBar;
