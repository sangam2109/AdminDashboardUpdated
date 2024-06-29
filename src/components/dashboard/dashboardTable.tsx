import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "../../styles/dashboardTable.module.scss";
import face1 from "../../assets/images/faces/face1.jpg";
import face2 from "../../assets/images/faces/face2.jpg";
import face3 from "../../assets/images/faces/face3.jpg";
import face4 from "../../assets/images/faces/face4.jpg";
import Image from "next/image";

const DashboardTable: React.FC = () => {
  const tableData = [
    {
      img: face1,
      name: "David Grey",
      subject: "Fund is not received",
      status: "DONE",
      statusClass: styles.badgeGradientSuccess,
      lastUpdate: "Dec 5, 2017",
      trackingId: "WD-12345",
    },
    {
      img: face2,
      name: "Stella Johnson",
      subject: "High loading time",
      status: "PROGRESS",
      statusClass: styles.badgeGradientWarning,
      lastUpdate: "Dec 12, 2017",
      trackingId: "WD-12346",
    },
    {
      img: face3,
      name: "Marina Michel",
      subject: "Website down for one week",
      status: "ON HOLD",
      statusClass: styles.badgeGradientInfo,
      lastUpdate: "Dec 16, 2017",
      trackingId: "WD-12347",
    },
    {
      img: face4,
      name: "John Doe",
      subject: "Losing control on server",
      status: "REJECTED",
      statusClass: styles.badgeGradientDanger,
      lastUpdate: "Dec 3, 2017",
      trackingId: "WD-12348",
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{paddingBottom:'32px'}}>
        <Card className={styles.card}>
          <CardContent className={styles.cardBody}>
            <Typography variant="h5" className={styles.cardTitle}>
              Recent Tickets
            </Typography>
         
              <Table aria-label="recent tickets table" className={styles.table}>
                <TableHead className={styles.heading}>
                  <TableRow>
                    <TableCell>Assignee</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Update</TableCell>
                    <TableCell>Tracking ID</TableCell>
                  </TableRow>
                </TableHead>
               
                <TableBody>
                  {tableData.map((row, index) => (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell className={styles.Imagealign}>
                          <Image
                            src={row.img}
                            className={styles.img}
                            alt="face"
                          />
                          {row.name}
                        </TableCell>
                        <TableCell>{row.subject}</TableCell>
                        <TableCell>
                          <label
                            className={`${styles.badge} ${row.statusClass}`}
                          >
                            {row.status}
                          </label>
                        </TableCell>
                        <TableCell>{row.lastUpdate}</TableCell>
                        <TableCell>{row.trackingId}</TableCell>
                      </TableRow>
                      
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardTable;
