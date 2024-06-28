import React from "react";
import { Typography, Link, Grid } from "@mui/material";
import styles from "../../styles/footer.module.scss"; // Import SCSS styles

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            color="textSecondary"
            className={styles.copyright}
          >
            Copyright ©{" "}
            <Link
              href="https://www.bootstrapdash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.copyright}
            >
              bootstrapdash.com
            </Link>{" "}
            2020
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            className={styles.templates}
          >
            Free{" "}
            <Link
              href="https://www.bootstrapdash.com/react-admin-templates/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.LinkColor}
            >
              Bootstrap admin templates
            </Link>{" "}
            from BootstrapDash.com.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
