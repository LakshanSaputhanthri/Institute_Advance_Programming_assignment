import { Box } from "@mui/material";
import { theme } from "../theme";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.dark,
        padding: "0.5rem",
        width: "100%",
        color: "#fffaaa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        height: "2rem",
      }}
    >
      Advanced Programming Group Project 2024
    </Box>
  );
};
