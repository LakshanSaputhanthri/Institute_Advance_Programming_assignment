import { Box } from "@mui/material";
import { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { theme } from "../theme";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          top: "3.6rem",
          overflow: "auto",
          bottom: "3rem",
          width: "100%",
          bgcolor: theme.palette.primary.dark,
        }}
      >
        <SideBar />
        <Box
          sx={{
            bgcolor: theme.palette.secondary.light,
            width: "100vw",
            padding: 2,
            borderRadius: 2,
            margin: 1,
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};
