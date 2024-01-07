import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  icon: string;
  selected: boolean;
}

export const SidebarLink = ({ title, link, icon, selected }: Props) => {
  return (
    <Link to={link} style={{ width: "100%" }}>
      {selected && (
        <Button
          variant="contained"
          startIcon={icon}
          sx={{ bgcolor: "#003083", minWidth: "14rem" }}
        >
          {title}
        </Button>
      )}
      {!selected && (
        <Button variant="contained" startIcon={icon} fullWidth>
          {title}
        </Button>
      )}
    </Link>
  );
};
