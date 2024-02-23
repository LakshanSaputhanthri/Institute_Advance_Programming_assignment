import { Avatar, Button, Paper, Stack, Typography } from "@mui/material";
import { Teacher } from "../types/teacher";
import { blue } from "@mui/material/colors";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";

interface Props {
  classId: number;
  className: string;
  teacher: Teacher;
}

export const ClassTile = ({ classId, className, teacher }: Props) => {
  return (
    <Paper
      sx={{
        borderRadius: "10px",
        display: "flex",
        padding: 2,
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        sx={{
          bgcolor: blue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {className[0]}
      </Avatar>
      <Stack>
        <Stack direction={"row"}>
          <Typography sx={{ fontWeight: "bold", width: "10rem" }}>
            Class Name
          </Typography>
          <Typography> {className}</Typography>
        </Stack>
        <Stack direction={"row"}>
          <Typography sx={{ fontWeight: "bold", width: "10rem" }}>
            Teacher Name
          </Typography>
          <Typography sx={{ width: "15rem" }}>
            {teacher.first_name} &nbsp; {teacher.last_name}
          </Typography>
        </Stack>
      </Stack>
      <Stack display={"flex"} justifyContent={"flex-end"}>
        <Link to={`/attendance/${classId}`}>
          <Button sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ fontSize: "12px", alignItems: "center" }}>
              Mark Attendance
            </Typography>
            <BorderColorIcon sx={{ color: "blue" }} />
          </Button>
        </Link>
        <Link to={`/attendance/${classId}`}>
          <Button sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ fontSize: "12px", alignItems: "center" }}>
              View Attendance
            </Typography>
            <RemoveRedEyeIcon sx={{ color: "green" }} />
          </Button>
        </Link>
      </Stack>
    </Paper>
  );
};
