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
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useStudentCreateMutations } from "../../services/studentService";
import { StudentForm } from "../../types/students";
import { toast } from "react-toastify";
import { gradeList } from "../../state/gradeList";

interface Props {
  onCancel: () => void;
}
const StudentRegistrationForm = ({ onCancel }: Props) => {
  const createMutation = useStudentCreateMutations();

  const [formData, setFormData] = useState<StudentForm>({
    first_name: "",
    last_name: "",
    phone_number: 0,
    address: "",
    grade: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Create Student Successfully"), onCancel();
      },
    });
  };
  const handleGradeChange = (event: SelectChangeEvent) => {
    setFormData({ ...formData, grade: +event.target.value });
  };

  return (
    <Box sx={{ display: "100rem" }}>
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
          Student Registration
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone Number"
                name="phone_number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="grade"
                  value={formData.grade.toString()}
                  label="Grade"
                  onChange={handleGradeChange}
                >
                  {gradeList.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.grade}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            justifyContent={"end"}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 16 }}
            >
              Register
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              style={{ marginTop: 16 }}
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default StudentRegistrationForm;
