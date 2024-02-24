import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useGetAttendanceByClassId } from "../services/attendance";
import { useGetClassById } from "../services/classService";
import { Stack, TextField, Typography } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
export const ViewAttendancePage = () => {
  const { classId } = useParams();
  const getClassDetails = useGetClassById(parseInt(classId || ""));
  const attendance = useGetAttendanceByClassId(parseInt(classId || ""));
  const [searchText, setSearchText] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");

  const filteredAttendance = attendance.data?.filter((record) => {
    const dateMatch = record.created_at.includes(searchText);
    const nameMatch = record.student.first_name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const lastNameMatch = record.student.last_name
      .toLowerCase()
      .includes(searchLastName.toLowerCase());
    return dateMatch && nameMatch && lastNameMatch;
  });
  return (
    <Layout>
      <Typography variant="h5">{getClassDetails.data?.class_name}</Typography>
      <Stack marginTop={2} direction={"row"} alignItems={"center"} gap={2}>
        <TextField
          placeholder="Search by Date"
          value={searchText}
          type="date"
          size="small"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TextField
          placeholder="Search by First Name"
          value={searchName}
          size="small"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <TextField
          placeholder="Search by Last Name"
          value={searchLastName}
          size="small"
          onChange={(e) => setSearchLastName(e.target.value)}
        />
        <FilterListIcon
          onClick={() => {
            setSearchText(""), setSearchName(""), setSearchLastName("");
          }}
        />
      </Stack>
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
        {filteredAttendance?.map((item) => (
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
