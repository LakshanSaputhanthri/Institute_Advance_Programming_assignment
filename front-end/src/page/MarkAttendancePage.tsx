import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useGetenrollmentByClassId } from "../services/enrollmentService";
import { Button, Stack, Typography } from "@mui/material";
import { useGetClassById } from "../services/classService";
import { useAttendanceCreateMutations } from "../services/attendance";

export const MarkAttendancePage = () => {
  const { classId } = useParams();
  const getClassDetails = useGetClassById(parseInt(classId || ""));
  const enrollments = useGetenrollmentByClassId(parseInt(classId || ""));
  const attendance = useAttendanceCreateMutations();
  return (
    <Layout>
      {enrollments.data && <></>}
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
        </Stack>
        {enrollments.data?.map((item) => (
          <Stack
            direction={"row"}
            display={"flex"}
            key={item.student.student_id}
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
            {getClassDetails.data && (
              <>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "green" }}
                  onClick={() =>
                    attendance.mutate({
                      class_id: getClassDetails.data.class_id,
                      student_id: item.student.student_id,
                      isPresent: true,
                    })
                  }
                >
                  Present
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "red" }}
                  onClick={() =>
                    attendance.mutate({
                      class_id: getClassDetails.data.class_id,
                      student_id: item.student.student_id,
                      isPresent: false,
                    })
                  }
                >
                  Absent
                </Button>
              </>
            )}
          </Stack>
        ))}
      </Stack>
    </Layout>
  );
};
