import { Box } from "@mui/material";
import { SidebarLink } from "./SidebarLink";
import { useLocation } from "react-router-dom";
import { theme } from "../theme";

const sideBarLinks = [
  {
    title: "Student",
    link: "/student",
    icon: "",
  },
  {
    title: "Teacher",
    link: "/teacher",
    icon: "",
  },
  {
    title: "Class",
    link: "/class",
    icon: "",
  },
  {
    title: "Payments",
    link: "/payment",
    icon: "",
  },
  {
    title: "Attendance",
    link: "/attendance",
    icon: "",
  },
];
export const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      sx={{ bgcolor: theme.palette.primary.dark, paddingY: 4, paddingX: 2 }}
    >
      {sideBarLinks.map((item) => (
        <SidebarLink
          title={item.title}
          link={item.link}
          icon={item.icon}
          selected={pathname.includes(item.link)}
          key={item.title}
        />
      ))}
    </Box>
  );
};
