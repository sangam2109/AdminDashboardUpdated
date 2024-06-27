import React from "react";
import { Grid, Typography, Breadcrumbs } from "@mui/material";

import styles from "../../../styles/basicUi.module.scss";
import NextLink from "next/link"; // Import Next.js Link
import TypographyCards from "@/components/typography/typographyCards";
import Footer from "@/components/footer/footer";

const Buttons: React.FC = () => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.aligning}>
        <Typography variant="h5" className={styles.pageTitle}>
          Typography
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
          <Typography component={NextLink} color="inherit" href="#">
            UI Elements
          </Typography>

          <Typography color="textPrimary">Typography</Typography>
        </Breadcrumbs>
      </div>
      <Grid container spacing={2}>
        <TypographyCards />
      </Grid>
      {/* <Footer/> */}
    </div>
  );
};

export default Buttons;
