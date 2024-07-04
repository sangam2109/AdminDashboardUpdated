import React, { useRef, useEffect, useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import styles from "../../styles/dashboardCharts.module.scss"; // Adjust path as necessary
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const DashboardCharts: React.FC = () => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const [gradientBar1, setGradientBar1] = useState<
    string | CanvasGradient | undefined
  >();
  const [gradientBar2, setGradientBar2] = useState<
    string | CanvasGradient | undefined
  >();
  const [gradientBar3, setGradientBar3] = useState<
    string | CanvasGradient | undefined
  >();
  const [gradientdonut1, setGradientDonut1] = useState<
    string | CanvasGradient | undefined
  >();
  const [gradientdonut2, setGradientDonut2] = useState<
    string | CanvasGradient | undefined
  >();
  const [gradientdonut3, setGradientDonut3] = useState<
    string | CanvasGradient | undefined
  >();

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        const gradBar1 = ctx.createLinearGradient(0, 0, 0, 181);
        gradBar1.addColorStop(0, "rgba(218, 140, 255, 1)");
        gradBar1.addColorStop(1, "rgba(154, 85, 255, 1)");
        setGradientBar1(gradBar1);

        const gradBar2 = ctx.createLinearGradient(0, 0, 0, 360);
        gradBar2.addColorStop(0, "rgba(54, 215, 232, 1)");
        gradBar2.addColorStop(1, "rgba(177, 148, 250, 1)");
        setGradientBar2(gradBar2);

        const gradBar3 = ctx.createLinearGradient(0, 0, 0, 300);
        gradBar3.addColorStop(0, "rgba(255, 191, 150, 1)");
        gradBar3.addColorStop(1, "rgba(254, 112, 150, 1)");
        setGradientBar3(gradBar3);

        var graddonut1 = ctx.createLinearGradient(0, 0, 0, 181);
        graddonut1.addColorStop(0, "rgba(54, 215, 232, 1)");
        graddonut1.addColorStop(1, "rgba(177, 148, 250, 1)");
        setGradientDonut1(graddonut1);

        var graddonut2 = ctx.createLinearGradient(0, 0, 0, 50);
        graddonut2.addColorStop(0, "rgba(6, 185, 157, 1)");
        graddonut2.addColorStop(1, "rgba(132, 217, 210, 1)");
        setGradientDonut2(graddonut2);

        var graddonut3 = ctx.createLinearGradient(0, 0, 0, 300);
        graddonut3.addColorStop(0, "rgba(254, 124, 150, 1)");
        graddonut3.addColorStop(1, "rgba(255, 205, 150, 1)");

        setGradientDonut3(graddonut3);
      }
    }
  }, []);

  // Example visitSaleData and trafficData
  const visitSaleData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
    datasets: [
      {
        label: "CHN",
        borderColor: gradientBar1,
        backgroundColor: gradientBar1,
        hoverBackgroundColor: gradientBar1,
        legendColor:gradientBar1,
        pointRadius: 0,
        fill: false,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        borderWidth: 1,
        data: [20, 40, 15, 35, 25, 50, 30, 20],
      },
      {
        label: "USA",
        borderColor: gradientBar3,
        backgroundColor: gradientBar3,
        hoverBackgroundColor: gradientBar3,
        legendColor:gradientBar3,
        pointRadius: 0,
        fill: false,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        borderWidth: 1,
        data: [40, 30, 20, 10, 50, 15, 35, 40],
      },
      {
        label: "UK",
        borderColor: gradientBar2,
        backgroundColor: gradientBar2,
        hoverBackgroundColor: gradientBar2,
        legendColor:gradientBar2,
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
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
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
            <canvas ref={chartContainer} id="visitSaleChart" height={0} />
            <Bar data={visitSaleData} options={visitSaleOptions} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={5} sx={{ paddingBottom: "32px" }}>
        <Card
          className={styles.card}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <CardContent className={styles.cardBody}>
            <Typography variant="h5" className={`${styles.cardTitle} `}>
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
