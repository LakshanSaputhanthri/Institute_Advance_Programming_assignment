import React, { useState } from "react";
import {
  Button,
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
import { useGetClass } from "../../services/classService";
import { StudentEnrollmentForm } from "../../types/enrollment";
import { useEnrollmentCreateMutations } from "../../services/enrollmentService";
import { useGetStudents } from "../../services/studentService";

interface Props {
  onCancel: () => void;
}

const EnrollmentForm = ({ onCancel }: Props) => {
  const createMutation = useEnrollmentCreateMutations();
  const students = useGetStudents();
  const classes = useGetClass();

  const [formData, setFormData] = useState<StudentEnrollmentForm>({
    student_id: 1,
    class_id: 1,
  });

  const handleTeacherChange = (e: SelectChangeEvent) => {
    setFormData({ ...formData, student_id: +e.target.value });
  };

  const handleSubjectChange = (e: SelectChangeEvent) => {
    setFormData({ ...formData, class_id: +e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Class created successfully");
        onCancel();
      },
    });
  };

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
          Student Enrollment
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="teacher-select-label">Student Name</InputLabel>
                <Select
                  labelId="teacher-select-label"
                  id="teacher-select"
                  value={formData.student_id.toString()}
                  onChange={handleTeacherChange}
                  name="student_id"
                >
                  {students.data &&
                    students.data.map((item) => (
                      <MenuItem key={item.student_id} value={item.student_id}>
                        {item.first_name}&nbsp;{item.last_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="subject-select-label">Class Name</InputLabel>
                <Select
                  labelId="subject-select-label"
                  id="subject-select"
                  name="class_id"
                  value={formData.class_id.toString()}
                  onChange={handleSubjectChange}
                >
                  {classes.data &&
                    classes.data.map((item) => (
                      <MenuItem value={item.class_id} key={item.class_id}>
                        {item.class_name}
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

export default EnrollmentForm;
