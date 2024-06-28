import React from "react";
import { Grid, Card, CardContent, Typography, Divider ,Box,Paper} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import styles from "../../styles/basicUi.module.scss";
const TypographyCards: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} className={styles.Columns}>
          <Card className={styles.card} variant="outlined">
            <CardContent className={styles.cardBody}>
              <div className={styles.CardHeading}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Headings
                </Typography>
                <Typography className={styles.secondaryText}>
                  Add tags <code className={styles.code}>&lt;h1&gt;</code> to{" "}
                  <code className={styles.code}>&lt;h6&gt; </code> or class{" "}
                  <code className={styles.code}>.h1</code> to{" "}
                  <code className={styles.code}>.h6</code>
                </Typography>
              </div>
              <Grid container>
                <Grid item xs={12}>
                  <h1>h1. Heading</h1>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <h2>h2. Heading</h2>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h3>h3. Heading</h3>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h4>h4. Heading</h4>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h5>h5. Heading</h5>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h6>h6. Heading</h6>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.Columns}>
          <Card className={styles.card} variant="outlined">
            <CardContent className={styles.cardBody}>
              <div className={styles.CardHeading}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Headings With Secondary Text
                </Typography>
                <Typography className={styles.secondaryText}>
                  Add faded secondary text to headings
                </Typography>
              </div>
              <Grid container>
                <Grid item xs={12}>
                  <h1>
                    h1. Heading &nbsp;
                    <span className={styles.secondaryText}>
                      Secondary text{" "}
                    </span>
                  </h1>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <h2>
                    h2. Heading &nbsp;
                    <span className={styles.secondaryText}>
                      Secondary text{" "}
                    </span>
                  </h2>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h3>
                    h3. Heading &nbsp;
                    <span className={styles.secondaryText}>
                      Secondary text{" "}
                    </span>
                  </h3>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h4>
                    h4. Heading &nbsp;
                    <span className={styles.secondaryText}>
                      Secondary text{" "}
                    </span>
                  </h4>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h5>
                    h5. Heading &nbsp;
                    <span className={styles.secondaryText}>
                      Secondary text{" "}
                    </span>
                  </h5>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <h6>
                    h6. Heading &nbsp;
                    <span className={styles.secondaryText}>
                      Secondary text{" "}
                    </span>
                  </h6>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 2nd Part */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} className={styles.Columns}>
          <Card
            className={styles.card}
            variant="outlined"
            sx={{ height: "100%" }}
          >
            <CardContent className={styles.cardBody}>
              <div className={styles.CardHeading}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Display Headings
                </Typography>
                <Typography className={styles.secondaryText}>
                  Add tags <code className={styles.code}> .display1 </code> to{" "}
                  <code className={styles.code}> .display4 </code>
                </Typography>
              </div>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h1">Display 1</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">Display 2</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3">Display 3</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">Display 4</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.Columns}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <Card
                className={styles.card}
                variant="outlined"
                sx={{ height: "100%" }}
              >
                <CardContent className={styles.cardBody}>
                  <div className={styles.CardHeading}>
                    <Typography variant="h4" className={styles.cardTitle}>
                      Paragraph
                    </Typography>
                    <Typography className={styles.secondaryText}>
                      Write text in
                      <code className={styles.code}> &lt;p&gt; </code> tag
                    </Typography>
                  </div>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley not only five
                        centuries,
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                className={styles.card}
                variant="outlined"
                sx={{ height: "100%" }}
              >
                <CardContent className={styles.cardBody}>
                  <div className={styles.CardHeading}>
                    <Typography variant="h4" className={styles.cardTitle}>
                      Icon Size
                    </Typography>
                    <Typography className={styles.secondaryText}>
                      Add class
                      <code className={styles.code}> .icon-lg </code>,
                      <code className={styles.code}> .icon-md </code>,
                      <code className={styles.code}> .icon-sm </code>
                    </Typography>
                  </div>
                  <Grid container spacing={2}>
                    <Grid item container xs={4} alignItems="center">
                      <ExploreIcon
                        sx={{ fontSize: "3rem" }}
                        className={styles.IconWarning}
                      />
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Icon-lg
                      </Typography>
                    </Grid>
                    <Grid item container xs={4} alignItems="center">
                      <ExploreIcon
                        sx={{ fontSize: "2rem" }}
                        className={styles.IconSuccess}
                      />
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Icon-md
                      </Typography>
                    </Grid>
                    <Grid item container xs={4} alignItems="center">
                      <ExploreIcon
                        sx={{ fontSize: "1.5rem" }}
                        className={styles.IconError}
                      />
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Icon-sm
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* 3rd Part */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} className={styles.Columns}>
          <Card
            className={styles.card}
            variant="outlined"
            sx={{ height: "100%" }}
          >
            <CardContent className={styles.cardBody}>
              <div className={styles.CardHeading}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Blockquotes
                </Typography>
                <Typography className={styles.secondaryText}>
                  Wrap content inside{" "}
                  <code className={styles.code}>
                    {" "}
                    &lt;blockquote class="blockquote" &gt;{" "}
                  </code>
                </Typography>
              </div>
              <Box mt={2}>
                <Paper variant="outlined">
                  <Box p={2}>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </Typography>
                  </Box>
                </Paper>

                <Box mt={10}>
                  <Paper variant="outlined" className={styles.Primary}>
                    <Box p={2}>
                      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </Typography>
                      <Typography className={styles.Primary}>
                        <Box
                          component="span"
                          className={styles.blockquoteSymbol}
                        />
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.Columns}>
          <Card
            className={styles.card}
            variant="outlined"
            sx={{ height: "100%" }}
          >
            <CardContent className={styles.cardBody}>
              <div className={styles.CardHeading}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Address
                </Typography>
                <Typography className={styles.secondaryText}>
                  Use
                  <code className={styles.code}> &lt;address&gt; </code> tag
                </Typography>
              </div>
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <address className={styles.addressStyle}>
                      <Typography variant="body1" className={styles.bold}>
                        Purple imc
                      </Typography>
                      <Typography variant="body1">695 lsom Ave,</Typography>
                      <Typography variant="body1">Suite 00</Typography>
                      <Typography variant="body1">
                        San Francisco, CA 94107
                      </Typography>
                    </address>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <address className={styles.addressStyle}>
                      <Typography
                        variant="body1"
                        className={`${styles.bold} ${styles.Primary}`}
                      >
                        E-mail
                      </Typography>
                      <Typography
                        variant="body1"
                        className={`${styles.mb2} ${styles.Primary}`}
                      >
                        johndoe@examplemeail.com
                      </Typography>
                      <Typography
                        variant="body1"
                        className={`${styles.bold} ${styles.Primary}`}
                      >
                        Web Address
                      </Typography>
                      <Typography
                        variant="body1"
                        className={`${styles.mb2} ${styles.Primary}`}
                      >
                        www.Purple.com
                      </Typography>
                    </address>
                  </Grid>
                </Grid>
                <Box mt={10}>
                  <div className={styles.CardHeading}>
                    <Typography variant="h4" className={styles.cardTitle}>
                      Lead
                    </Typography>
                    <Typography className={styles.secondaryText}>
                      Use class
                      <code className={styles.code}> .lead </code>
                    </Typography>
                  </div>
                  <Typography variant="body1" className={styles.lead}>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* 4th Part */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={12} className={styles.Columns}>
          <Card
            className={styles.card}
            variant="outlined"
            sx={{ height: "100%" }}
          >
            <CardContent className={styles.cardBody}>
              <div className={styles.CardHeading}>
                <Typography variant="h4" className={styles.cardTitle}>
                  Text Colors
                </Typography>
                <Typography className={styles.secondaryText}>
                  Use class &nbsp;
                  <code className={styles.code}>
                    .text-primary, .text-secondary
                  </code>{" "}
                  &nbsp; etc. for text in theme colors
                </Typography>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    className={`${styles.Primary} ${styles.mb2}`}
                  >
                    .text-primary
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Success} ${styles.mb2}`}
                  >
                    .text-success
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Danger} ${styles.mb2}`}
                  >
                    .text-danger
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Warning} ${styles.mb2}`}
                  >
                    .text-warning
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Info} ${styles.mb2}`}
                  >
                    .text-info
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    className={`${styles.Light} ${styles.mb2}`}
                  >
                    .text-light
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Secondary} ${styles.mb2}`}
                  >
                    .text-secondary
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Dark} ${styles.mb2}`}
                  >
                    .text-dark
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.Muted} ${styles.mb2}`}
                  >
                    .text-muted
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`${styles.White} ${styles.mb2}`}
                  >
                    .text-white
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default TypographyCards;
