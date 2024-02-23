import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Box,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { toast } from "react-toastify";
import { useGetTeachers } from "../../services/teacherService";
import {
  useClassCreateMutations,
  useGetSubjects,
} from "../../services/classService";
import { ClassForm } from "../../types/class";
import { AttendanceForm } from "../../types/attendance";

interface Props {
  onCancel: () => void;
}

const MarkAttendanceForm = ({ onCancel }: Props) => {
  //   const createMutation = useClassCreateMutations();
  const teachers = useGetTeachers();
  const subjects = useGetSubjects();

  const [formData, setFormData] = useState<AttendanceForm>({
    class_id: 0,
    student_id: 1,
    isPresent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleTeacherChange = (e: SelectChangeEvent) => {
  //     setFormData({ ...formData, teacher_id: +e.target.value });
  //   };

  //   const handleSubjectChange = (e: SelectChangeEvent) => {
  //     setFormData({ ...formData, subject_id: +e.target.value });
  //   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     createMutation.mutate(formData, {
  //       onSuccess: () => {
  //         toast.success("Class created successfully");
  //         onCancel();
  //       },
  //     });
  //   };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={3}
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Mark Attendance
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Class Name"
                name="class_name"
                value={formData.class_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="teacher-select-label">Teachers</InputLabel>
                <Select
                  labelId="teacher-select-label"
                  id="teacher-select"
                  value={formData.teacher_id.toString()}
                  onChange={handleTeacherChange}
                  name="teacher_id"
                >
                  {teachers.data &&
                    teachers.data.map((item) => (
                      <MenuItem key={item.teacher_id} value={item.teacher_id}>
                        {item.first_name}&nbsp;{item.last_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="subject-select-label">Subjects</InputLabel>
                <Select
                  labelId="subject-select-label"
                  id="subject-select"
                  name="subject_id"
                  value={formData.subject_id.toString()}
                  onChange={handleSubjectChange}
                >
                  {subjects.data &&
                    subjects.data.map((item) => (
                      <MenuItem value={item.subject_id} key={item.subject_id}>
                        {item.subject_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            marginTop={2}
          >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default MarkAttendanceForm;
