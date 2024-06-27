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
import styles from "../../styles/basicUi.module.scss";

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
                    sx={{ width: "40px" }}
                    className={`${styles.gradientPrimary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHomeCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={`${styles.gradientDark} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMicrosoftInternetExplorer}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={`${styles.gradientDanger} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiEmailOpen}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={`${styles.gradientInfo} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
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
                    sx={{ width: "40px" }}
                    className={`${styles.inversePrimary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHomeCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={`${styles.inverseDark} `}
                  >
                    <Icon
                      path={mdiMicrosoftInternetExplorer}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={`${styles.inverseDanger}`}
                  >
                    <Icon
                      path={mdiEmailOpen}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={`${styles.inverseInfo}`}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.inverseSuccess}`}
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
                    sx={{ width: "40px" }}
                    className={`${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiHeartOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiMusicNoteOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} ${styles.rounded}`}
                  >
                    <Icon path={mdiSignal} size={1} className={styles.icon} />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} ${styles.rounded}`}
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
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} `}
                  >
                    <Icon
                      path={mdiHeartOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} `}
                  >
                    <Icon
                      path={mdiMusicNoteOutline}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} `}
                  >
                    <Icon
                      path={mdiStarCircle}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} `}
                  >
                    <Icon path={mdiSignal} size={1} className={styles.icon} />
                  </Button>
                  <Button
                    sx={{ width: "40px" }}
                    className={` ${styles.outlineSecondary} `}
                  >
                    <Icon
                      path={mdiTrendingUp}
                      size={1}
                      className={styles.icon}
                    />
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Button Size
                </Typography>
                <Typography variant="body1" className={styles.cardDescription}>
                  Use class{" "}
                  <code className={styles.code}>.btn-&#123;size&#125;</code>
                </Typography>
                <div className={`${styles.IconButtonsPart} ${styles.flexRow}`}>
                  <Button
                    className={`${styles["btn-gradient-secondary"]} ${styles.outline} ${styles.lg} ${styles.hoverEffect}`}
                    size="large"
                  >
                    btn-lg
                  </Button>
                  <Button
                    size="medium"
                    className={`${styles["btn-gradient-secondary"]} ${styles.outline} ${styles.md} ${styles.hoverEffect}`}
                  >
                    btn-md
                  </Button>
                  <Button
                    className={`${styles["btn-gradient-secondary"]} ${styles.outline} ${styles.sm} ${styles.hoverEffect}`}
                    size="small"
                  >
                    btn-sm
                  </Button>
                </div>
                <div className={`${styles.IconButtonsPart} ${styles.flexRow}`}>
                  <Button
                    className={`${styles["btn-gradient-danger"]}  ${styles.lg}`}
                    size="large"
                  >
                    btn-lg
                  </Button>
                  <Button
                    size="medium"
                    className={`${styles["btn-gradient-success"]}  ${styles.md}`}
                  >
                    btn-md
                  </Button>
                  <Button
                    size="small"
                    
                    className={`${styles["btn-gradient-primary"]} ${styles.sm}`}
                  >
                    btn-sm
                  </Button>
                </div>
              </Grid>
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
