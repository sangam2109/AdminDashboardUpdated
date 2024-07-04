"use client";
import { createTheme } from "@mui/material/styles";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#FCBA28",
    },
    success: {
      main: "#00ff0d",
    },
    error: {
      main: "#ee2400",
    },
    background: {
      default: "#F2EDF3",
    },
  },
  typography: {
    fontFamily: [
      "Ubuntu", // Restricted to Ubuntu font family
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
          textTransform: "none",
          "&:hover": {
            boxShadow: "none", // Remove hover effect
          },
          // Set the default button text color to black
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent", // Remove hover effect
          },
          "&:active": {
            backgroundColor: "transparent", // Remove active effect
            touchAction: "none", // Prevent weird effect on click
          },
          "&:focus": {
            outline: "none",
            backgroundColor: "transparent", // Remove focus outline
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#9c9fa6",
          fontSize: "1.25rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: "#b66dff", // Customize the color for the checkbox icon
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          verticalAlign: "baseline",
        },
      },
    },
    MuiCard:{
      styleOverrides: {
        root:{
            boxShadow:'none',
        },
      },
    }
  },
});

export default theme;
