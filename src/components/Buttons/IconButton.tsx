import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Icon from "@mdi/react";
import {
  mdiHomeCircle,
  mdiMicrosoftInternetExplorer,
  mdiEmailOpen,
  mdiStarCircle,
  mdiMapMarker,
  mdiHeartOutline,
  mdiMusicNoteOutline,
  mdiSignal,
  mdiTrendingUp,
} from "@mdi/js";
import styles from "../../styles/buttons.module.scss";

const IconButtons: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8} className={styles.Columns}>
        <Card className={styles.card}>
          <CardContent className={styles.cardBody}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Icon Buttons
                </Typography>
                <Typography variant="body1" className={styles.cardDescription}>
                  Add class <code>.btn-icon</code> for buttons with only icons
                </Typography>

                {/* Icon buttons with gradient background */}
                <div className={styles.IconButtonsPart}>
                  <Button
                    className={`${styles.gradientPrimary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHomeCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.gradientDark} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMicrosoftInternetExplorer}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.gradientDanger} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiEmailOpen}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.gradientInfo} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.gradientSuccess} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMapMarker}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                </div>

                {/* Inverse icon buttons */}
                <div className={styles.IconButtonsPart}>
                  <Button
                    className={`${styles.inversePrimary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHomeCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button className={`${styles.inverseDark} ${styles.rounded}`}>
                    <Icon
                      path={mdiMicrosoftInternetExplorer}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.inverseDanger} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiEmailOpen}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button className={`${styles.inverseInfo} ${styles.rounded}`}>
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.inverseSuccess} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMapMarker}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                </div>

                {/* Outline icon buttons */}
                <div className={styles.IconButtonsPart}>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHeartOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMusicNoteOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon path={mdiSignal} size={1} className={styles.icon} />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiTrendingUp}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                </div>
                <div className={styles.IconButtonsPart}>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHeartOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMusicNoteOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon path={mdiSignal} size={1} className={styles.icon} />
                  </Button>
                  <Button
                    className={`${styles.btn} ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiTrendingUp}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={5}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={styles.card}>
          <CardContent className={styles.cardBody}>
            <Typography variant="h4" className={styles.cardTitle}>
              Hello
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IconButtons;
