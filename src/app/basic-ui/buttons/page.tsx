
import React from "react";
import {
  Grid,

  Typography,

  Breadcrumbs,
} from "@mui/material";

import styles from "../../../styles/basicUiElements.module.scss";
import NextLink from "next/link"; // Import Next.js Link
import ButtonsTypes from "@/components/Buttons/buttonTypes";
import IconButtons from "@/components/Buttons/IconButton";
import Footer from "@/components/Footer/footer";
const Buttons: React.FC = () => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.aligning}>
          <Typography variant="h5" className={styles.pageTitle}>
            Buttons
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
            <Typography component={NextLink} color="inherit" href="#">
              UI Elements
            </Typography>

            <Typography color="textPrimary">Buttons</Typography>
          </Breadcrumbs>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} className={styles.Columns}>
            <ButtonsTypes />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "2rem" }}>
          <IconButtons />
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default Buttons;
