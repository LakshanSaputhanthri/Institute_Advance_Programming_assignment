import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useGetAttendanceByClassId } from "../services/attendance";
import { useGetClassById } from "../services/classService";
import { Stack, Typography } from "@mui/material";
import moment from "moment";

export const ViewAttendancePage = () => {
  const { classId } = useParams();
  const getClassDetails = useGetClassById(parseInt(classId || ""));
  const attendance = useGetAttendanceByClassId(parseInt(classId || ""));
  return (
    <Layout>
      <Typography variant="h5">{getClassDetails.data?.class_name}</Typography>
      <Stack gap={2} marginTop={2}>
        <Stack
          direction={"row"}
          display={"flex"}
          sx={{
            width: "100%",
            bgcolor: "white",
            padding: 1,
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              minWidth: "4rem",
              width: "8rem",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            First Name
          </Typography>
          <Typography
            sx={{
              minWidth: "4rem",
              width: "8rem",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Last Name
          </Typography>
          <Typography
            sx={{
              minWidth: "4rem",
              width: "8rem",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Grade
          </Typography>
          <Typography
            sx={{
              minWidth: "4rem",
              width: "8rem",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Date
          </Typography>
          <Typography
            sx={{
              minWidth: "4rem",
              width: "8rem",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            IsPresent
          </Typography>
        </Stack>
        {attendance.data?.map((item) => (
          <Stack
            direction={"row"}
            display={"flex"}
            key={item.attendance_id}
            sx={{
              width: "100%",
              bgcolor: "white",
              padding: 1,
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ minWidth: "4rem", width: "8rem" }}
            >
              {item.student.first_name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ minWidth: "4rem", width: "8rem" }}
            >
              {item.student.last_name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ minWidth: "4rem", width: "8rem" }}
            >
              {item.student.grade}
            </Typography>
            <Typography
              variant="body2"
              sx={{ minWidth: "4rem", width: "8rem" }}
            >
              {moment(item.created_at).format("YYYY-MM-DD")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ minWidth: "4rem", width: "8rem" }}
            >
              {item.isPresent ? "Present" : "Absent"}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Layout>
  );
};
