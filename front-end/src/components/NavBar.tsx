import { Box, Typography, Button } from "@mui/material";
import { theme } from "../theme";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.dark,
        height: "3.6rem",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ marginLeft: 2 }}>
        Registration And Attendance Management System
      </Typography>
      <Link to={"/"}>
        <Button variant="contained" sx={{ marginRight: 2 }}>
          Logout
        </Button>
      </Link>
    </Box>
  );
};
