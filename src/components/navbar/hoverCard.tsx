import React from "react";
import { Box, Typography } from "@mui/material";

interface HoverCardProps {
  item: {
    title: string;
    subMenu?: { title: string }[];
  };
  position: {
    right: number;
    top: number;
  };
}
const HoverCard: React.FC<HoverCardProps> = ({ item, position }) => (
  <Box
    sx={{
      position: "absolute",
      top: "100px",
      right: "500px", // Adjust this value to position the card correctly
      zIndex: 1,
      backgroundColor: "white",
      color:'black',
      border: "1px solid #ccc",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "10px",
    }}
  >
    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
      {item.title}
    </Typography>
    <Typography variant="body2">
      {item.subMenu &&
        item.subMenu.map((subItem) => (
          <div key={subItem.title}>{subItem.title}</div>
        ))}
    </Typography>
  </Box>
);

export default HoverCard;
