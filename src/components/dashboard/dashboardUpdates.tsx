import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import face3 from "../../assets/images/faces/face3.jpg";
import img1 from "../../assets/images/dashboardImages/img_1.jpg";
import img2 from "../../assets/images/dashboardImages/img_2.jpg";
import img3 from "../../assets/images/dashboardImages/img_3.jpg";
import img4 from "../../assets/images/dashboardImages/img_4.jpg";
import styles from "../../styles/recentUpdates.module.scss";

const RecentUpdates: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} sx={{ paddingBottom: "32px" }}>
        <Card className={styles.card}>
          <CardContent className={styles.cardBody}>
            <Typography variant="h5" className={styles.cardTitle}>
              Recent Updates
            </Typography>
            <div className={styles.section}>
              <AccountCircleIcon className={styles.icon} />
              <span className={styles.text}>jack Menqu</span>

              <AccessTimeIcon className={styles.icon} />
              <span className={styles.text}>October 3rd, 2018</span>
            </div>
            <Grid container spacing={1} className={styles.grid}>
              <Grid item xs={6} container rowSpacing={1}>
                <Grid item xs={12}>
                  <Image src={img1} className={styles.image} alt="face" />
                </Grid>
                <Grid item xs={12}>
                  <Image src={img2} className={styles.image} alt="face" />
                </Grid>
              </Grid>
              <Grid item xs={6} container rowSpacing={1}>
                <Grid item xs={12}>
                  <Image src={img3} className={styles.image} alt="face" />
                </Grid>
                <Grid item xs={12}>
                  <Image src={img4} className={styles.image} alt="face" />
                </Grid>
              </Grid>
            </Grid>
            <div className={`${styles.section} ${styles.alignStart}`}>
              <Image
                src={face3}
                className={`${styles.avatar} ${styles.rounded}`}
                alt="face"
              />
              <div className={`${styles.info} ${styles.grow}`}>
                <Typography variant="h6" className={styles.title}>
                  School Website - Authentication Module.
                </Typography>
                <Typography variant="body2" className={styles.description}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </Typography>
              </div>
              <div className={styles.auto}>
                <FavoriteBorderIcon className={styles.icon} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RecentUpdates;
