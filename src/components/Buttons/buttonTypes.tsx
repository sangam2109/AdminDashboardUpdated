import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Checkbox,
  Button,
  Box,
  Breadcrumbs,
} from "@mui/material";
import {
  garadientbuttonTypes,
  inversebuttonTypes,
  simplebuttonTypes,
  normalbuttonTypes,
} from "@/types/constant";
import styles from "../../styles/buttons.module.scss"
const ButtonsTypes: React.FC = () => {
  return (
    <>
      <Card className={styles.card}>
        <CardContent className={styles.cardBody}>
          <div className={styles.CardHeading}>
            <Typography
              component="h4"
              gutterBottom
              className={styles.cardTitle}
            >
              Gradient buttons
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.secondaryText}
            >
              Add class{" "}
              <code className={styles.code}>
                .btn-gradient-&#123;color&#125;
              </code>{" "}
              for gradient buttons
            </Typography>
          </div>
          <Grid container spacing={2}>
            {garadientbuttonTypes.map((btn) => (
              <Grid item key={btn.type}>
                <Button variant="contained" className={`${styles[btn.class]}`}>
                  {btn.type}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
              <Button className={styles.btnLink}>Link</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.cardBody}>
          <div className={styles.CardHeading}>
            <Typography
              component="h4"
              gutterBottom
              className={styles.cardTitle}
            >
              Rounded Buttons
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.secondaryText}
            >
              Add class <code className={styles.code}>.btn-rounded</code>{" "}
            </Typography>
          </div>
          <Grid container spacing={2}>
            {garadientbuttonTypes.map((btn) => (
              <Grid item key={btn.type}>
                <Button
                  variant="contained"
                  className={`${styles[btn.class]} ${styles.btnRounded}`}
                  style={{ borderRadius: "50px" }}
                >
                  {btn.type}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
              <Button className={styles.btnLink}>Link</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.cardBody}>
          <div className={styles.CardHeading}>
            <Typography
              component="h4"
              gutterBottom
              className={styles.cardTitle}
            >
              Outlined Buttons
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.secondaryText}
            >
              Add class{" "}
              <code className={styles.code}>
                .btn-outline-&#123;color&#125;
              </code>{" "}
              for outline buttons
            </Typography>
          </div>
          <Grid container spacing={2}>
            {garadientbuttonTypes.map((btn) => (
              <Grid item key={btn.type}>
                <Button
                  variant="contained"
                  className={`${styles[btn.class]}  ${styles.outline}`}
                >
                  {btn.type}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
              <Button className={styles.btnLink}>Link</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.cardBody}>
          <div className={styles.CardHeading}>
            <Typography
              component="h4"
              gutterBottom
              className={styles.cardTitle}
            >
              Single Color Buttons
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.secondaryText}
            >
              Add class{" "}
              <code className={styles.code}>.btn-&#123;color&#125;</code> for
              buttons in theme colors
            </Typography>
          </div>
          <Grid container spacing={2}>
            {simplebuttonTypes.map((btn) => (
              <Grid item key={btn.type}>
                <Button variant="contained" className={`${styles[btn.class]}`}>
                  {btn.type}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
              <Button className={styles.btnLink}>Link</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.cardBody}>
          <div className={styles.CardHeading}>
            <Typography
              component="h4"
              gutterBottom
              className={styles.cardTitle}
            >
              Inverse Buttons
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.secondaryText}
            >
              Add class{" "}
              <code className={styles.code}>
                .btn-inverse-&#123;color&#125; for inverse buttons
              </code>{" "}
            </Typography>
          </div>
          <Grid container spacing={2}>
            {inversebuttonTypes.map((btn) => (
              <Grid item key={btn.type}>
                <Button variant="contained" className={`${styles[btn.class]}`}>
                  {btn.type}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
              <Button className={styles.btnLink}>Link</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.cardBody}>
          <div className={styles.CardHeading}>
            <Typography
              component="h4"
              gutterBottom
              className={styles.cardTitle}
            >
              Normal Buttons
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.secondaryText}
            >
              Use any of the available button classes to quickly create a styled
              button.
            </Typography>
          </div>
          <Grid container spacing={2}>
            {normalbuttonTypes.map((btn) => (
              <Grid item key={btn.type}>
                <Button variant="contained" className={`${styles[btn.class]}`}>
                  {btn.type}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6} sm={4} lg={3} className={styles.iconsItem}>
              <Button className={styles.btnLink}>Link</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ButtonsTypes;