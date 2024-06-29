import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import styles from "../../styles/dashboardCharts.module.scss"; // Adjust path as necessary
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const DashboardCharts: React.FC = () => {
  const gradientBar1 = "rgba(218, 140, 255, 1)";
  const gradientBar2 = "rgba(54, 215, 232, 1)";
  const gradientBar3 = "rgba(255, 191, 150, 1)";

  const gradientdonut1 = "rgba(54, 215, 232, 1)";
  const gradientdonut2 = "rgba(6, 185, 157, 1)";
  const gradientdonut3 = "rgba(254, 124, 150, 1)";

  const visitSaleData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
    datasets: [
      {
        label: "CHN",
        borderColor: gradientBar1,
        backgroundColor: gradientBar1,
        hoverBackgroundColor: gradientBar1,
        legendColor: gradientBar1,
        pointRadius: 0,
        fill: false,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        borderWidth: 1,
        data: [20, 40, 15, 35, 25, 50, 30, 20],
      },
      {
        label: "USA",
        borderColor: gradientBar2,
        backgroundColor: gradientBar2,
        hoverBackgroundColor: gradientBar2,
        legendColor: gradientBar2,
        pointRadius: 0,
        fill: false,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        borderWidth: 1,
        data: [40, 30, 20, 10, 50, 15, 35, 40],
      },
      {
        label: "UK",
        borderColor: gradientBar3,
        backgroundColor: gradientBar3,
        hoverBackgroundColor: gradientBar3,
        legendColor: gradientBar3,
        pointRadius: 0,
        fill: false,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        borderWidth: 1,
        data: [70, 10, 30, 40, 25, 50, 15, 30],
      },
    ],
  };

  const trafficData = {
    datasets: [
      {
        data: [30, 30, 40],
        backgroundColor: [gradientdonut1, gradientdonut2, gradientdonut3],
        hoverBackgroundColor: [gradientdonut1, gradientdonut2, gradientdonut3],
        borderColor: [gradientdonut1, gradientdonut2, gradientdonut3],
        legendColor: [gradientdonut1, gradientdonut2, gradientdonut3],
        
      },
    ],
    labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
  };

  const visitSaleOptions = {
 
    scales: {
      y: {
        border: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
          min: 0,
          stepSize: 20,
          max: 80,
        },
        grid: {
          drawBorder: false,
          display: true, // Remove y-axis grid lines
        },
      },
      x: {
       
        border: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false, // Remove x-axis grid lines
        },
        ticks: {
          padding: 20,
          color: "#9c9fa6",
          autoSkip: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Remove legend
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const trafficOptions = {
    responsive: true,
    aspectRatio: 2,
    animation: {
      animateRotate: true,
    },
    plugins: {
      legend: {
        display: false, // Remove legend
      },
    },
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7} sx={{ paddingBottom: "32px" }}>
        <Card
          className={styles.card}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <CardContent className={styles.cardBody}>
            <div className={styles.clearfix}>
              <Typography
                variant="h5"
                className={`${styles.cardTitle} ${styles.floatLeft} `}
              >
                Visit And Sales Statistics
              </Typography>
              <div
                id="visit-sale-chart-legend"
                className={`${styles.roundedLegend} ${styles.legendHorizontal} ${styles.legendTopRight} ${styles.floatRight}`}
              >
                <ul className={styles.align}>
                  {visitSaleData.datasets.map((dataset: any, index: number) => (
                    <li key={index} className={styles.listItems}>
                      <span className={styles.dot}></span>
                      <span>{dataset.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Bar
              className="chartLegendContainer"
              data={visitSaleData}
              options={visitSaleOptions}
              id="visitSaleChart"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={5} sx={{ paddingBottom: "32px" }}>
        <Card
          className={styles.card}
          style={{ display: "flex", flexDirection: "column" , height:'100%'
           }}
        >
          <CardContent className={styles.cardBody}>
            <Typography
              variant="h5"
              className={`${styles.cardTitle} `}
            >
              Traffic Sources
            </Typography>
            <div className={styles.chartAligning}>
              <Doughnut
                data={trafficData}
                options={trafficOptions}
                width={208}
                height={416}
              />
            </div>
            <div>
              <ul className={styles.legendDots}>
                {trafficData.labels.map((label: string, index: number) => (
                  <li key={index} className={styles.listItems}>
                    <span className={styles.dot}></span>
                    <div className={styles.textAlign}>
                      <span>{label}</span>
                      <span className={styles.floatRight}>
                        {trafficData.datasets[0].data[index]}%
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardCharts;