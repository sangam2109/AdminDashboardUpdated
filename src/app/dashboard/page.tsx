"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  LinearProgress,
} from "@mui/material";
import styles from "../../styles/dashboard.module.scss";
import circleImage from "../../assets/images/circle.svg";
import { defaultData } from "@/types/constant";
import Image from "next/image";
import Tstyles from "../../styles/dashboardTable.module.scss";
import Footer from "@/components/Footer/footer";

// Dynamically load components
const DynamicBreadcrumbs = dynamic(() => import("@mui/material/Breadcrumbs"), {
  ssr: false,
});
const DynamicTypography = dynamic(() => import("@mui/material/Typography"), {
  ssr: false,
});
const DynamicIconButton = dynamic(() => import("@mui/material/IconButton"), {
  ssr: false,
});
const DynamicCheckbox = dynamic(() => import("@mui/material/Checkbox"), {
  ssr: false,
});
const DynamicList = dynamic(() => import("@mui/material/List"), { ssr: false });
const DynamicListItem = dynamic(() => import("@mui/material/ListItem"), {
  ssr: false,
});
const DynamicListItemText = dynamic(
  () => import("@mui/material/ListItemText"),
  { ssr: false }
);

const DynamicHomeIcon = dynamic(() => import("@mui/icons-material/Home"), {
  ssr: false,
});
const DynamicErrorOutlineIcon = dynamic(
  () => import("@mui/icons-material/ErrorOutline"),
  { ssr: false }
);
const DynamicTrendingUpIcon = dynamic(
  () => import("@mui/icons-material/TrendingUp"),
  { ssr: false }
);
const DynamicBookmarkBorderIcon = dynamic(
  () => import("@mui/icons-material/BookmarkBorder"),
  { ssr: false }
);
const DynamicDiamondIcon = dynamic(
  () => import("@mui/icons-material/Diamond"),
  { ssr: false }
);
const DynamicCancelOutlinedIcon = dynamic(
  () => import("@mui/icons-material/CancelOutlined"),
  { ssr: false }
);

const DynamicDashboardTable = dynamic(
  () => import("../../components/Dashboard/dashboardTable"),
  { ssr: false }
);
const DynamicDashboardCharts = dynamic(
  () => import("../../components/Dashboard/dashboardCharts"),
  { ssr: false }
);
const DynamicRecentUpdates = dynamic(
  () => import("../../components/Dashboard/dashboardUpdates"),
  { ssr: false }
);

const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState(defaultData.todos);
  const [inputValue, setInputValue] = useState(defaultData.inputValue);

  const statusChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: event.target.checked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputValue,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={styles.pageHeader}>
      <Box className={styles.aligning}>
        <Box display="flex" alignItems="center">
          <DynamicIconButton className={styles.iconButton} edge="start">
            <DynamicHomeIcon fontSize="small" />
          </DynamicIconButton>
          <DynamicTypography variant="h6" className={styles.pageTitle}>
            Dashboard
          </DynamicTypography>
        </Box>
        <nav aria-label="breadcrumb">
          <DynamicBreadcrumbs aria-label="breadcrumb">
            <DynamicTypography
              color="textPrimary"
              className={styles.breadcrumbItem}
            >
              Overview{" "}
              <DynamicErrorOutlineIcon
                fontSize="small"
                className={styles.icon}
              />
            </DynamicTypography>
          </DynamicBreadcrumbs>
        </nav>
      </Box>
      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={`${styles.card} ${styles.bgGradientDanger}`}>
            <CardContent className={styles.cardContent}>
              <Image
                src={circleImage}
                className={styles.cardImgAbsolute}
                alt="circle"
              />
              <DynamicTypography
                variant="h4"
                className={styles.fontWeightNormal}
              >
                Weekly Sales{" "}
                <DynamicTrendingUpIcon
                  fontSize="large"
                  className={styles.floatRight}
                />
              </DynamicTypography>
              <DynamicTypography variant="h4" className={styles.mb5}>
                $ 15,0000
              </DynamicTypography>
              <DynamicTypography variant="h5" className={styles.cardText}>
                Increased by 60%
              </DynamicTypography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={`${styles.card} ${styles.bgGradientInfo}`}>
            <CardContent className={styles.cardContent}>
              <Image
                src={circleImage}
                className={styles.cardImgAbsolute}
                alt="circle"
              />
              <DynamicTypography
                variant="h4"
                className={styles.fontWeightNormal}
              >
                Weekly Orders{" "}
                <DynamicBookmarkBorderIcon
                  fontSize="large"
                  className={styles.floatRight}
                />
              </DynamicTypography>
              <DynamicTypography variant="h4" className={styles.mb5}>
                45,6334
              </DynamicTypography>
              <DynamicTypography variant="h5" className={styles.cardText}>
                Decreased by 10%
              </DynamicTypography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={`${styles.card} ${styles.bgGradientSuccess}`}>
            <CardContent className={styles.cardContent}>
              <Image
                src={circleImage}
                className={styles.cardImgAbsolute}
                alt="circle"
              />
              <DynamicTypography
                variant="h4"
                className={styles.fontWeightNormal}
              >
                Visitors Online{" "}
                <DynamicDiamondIcon
                  fontSize="large"
                  className={styles.floatRight}
                />
              </DynamicTypography>
              <DynamicTypography variant="h4" className={styles.mb5}>
                95,5741
              </DynamicTypography>
              <DynamicTypography variant="h5" className={styles.cardText}>
                Increased by 5%
              </DynamicTypography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={styles.charts}>
        <DynamicDashboardCharts />
      </div>
      <div>
        <DynamicDashboardTable />
      </div>
      <div>
        <DynamicRecentUpdates />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card className={Tstyles.card}>
            <CardContent className={styles.cardBody}>
              <DynamicTypography variant="h5" className={Tstyles.cardTitle}>
                Project Status
              </DynamicTypography>
              <table className={styles.table}>
                <thead className={styles.tableheading}>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Due Date</td>
                    <td>Progress</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Herman Beck</td>
                    <td>May 15, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={25}
                        classes={{
                          root: styles.customLinearProgress,
                          bar: styles.badgeGradientSuccess,
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Messsy Adam</td>
                    <td>Jul 01, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={75}
                        classes={{
                          root: styles.customLinearProgress,
                          bar: styles.badgeGradientDanger,
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>John Richards</td>
                    <td>Apr 12, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={90}
                        classes={{
                          root: styles.customLinearProgress,
                          bar: styles.badgeGradientWarning,
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Peter Meggik</td>
                    <td>May 15, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        classes={{
                          root: styles.customLinearProgress,
                          bar: styles.badgeGradientPrimary,
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Edward</td>
                    <td>May 03, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        classes={{
                          root: styles.customLinearProgress,
                          bar: styles.badgeGradientDanger,
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ronald</td>
                    <td>Jun 05, 2015</td>
                    <td>
                      <LinearProgress
                        variant="determinate"
                        value={65}
                        classes={{
                          root: styles.customLinearProgress,
                          bar: styles.badgeGradientInfo,
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className={Tstyles.card}>
            <CardContent className={styles.cardBody}>
              <form onSubmit={addTodo} className={styles.todoForm}>
                <TextField
                  label="What do you need to"
                  variant="outlined"
                  value={inputValue}
                  onChange={inputChangeHandler}
                  className={styles.todoInput}
                  fullWidth
                 
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.todoButton}
                >
                  Add
                </Button>
              </form>
              <DynamicList>
                {todos.map((todo) => (
                  <DynamicListItem key={todo.id} className={styles.todoItem}>
                    <DynamicCheckbox
                      checked={todo.isCompleted}
                      onChange={(event) => statusChangedHandler(event, todo.id)}
                      className={styles.checkbox}
                    />
                    <DynamicListItemText
                      primary={todo.task}
                      className={
                        todo.isCompleted ? styles.completedTask : undefined
                      }
                    />
                    <DynamicIconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeTodo(todo.id)}
                      className={
                        todo.isCompleted
                          ? styles.completedRemoveIcon
                          : undefined
                      }
                    >
                      <DynamicCancelOutlinedIcon />
                    </DynamicIconButton>
                  </DynamicListItem>
                ))}
              </DynamicList>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Footer/> */}
    </div>
  );
};

export default Dashboard;