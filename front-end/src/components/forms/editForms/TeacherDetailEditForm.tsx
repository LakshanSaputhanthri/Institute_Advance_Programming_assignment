import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import { toast } from "react-toastify";
import {
  useGetTeacher,
  useStudentUpdateMutations,
} from "../../../services/teacherService";
import { TeacherEditForm } from "../../../types/teacher";

interface Props {
  onCancel: () => void;
  teacherId: number;
}

const TeacherDetailsEditForm = ({ onCancel, teacherId }: Props) => {
  const { data: teacherData } = useGetTeacher(teacherId);
  const teacherUpdateMutation = useStudentUpdateMutations(teacherId);

  const [formData, setFormData] = useState<TeacherEditForm>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: 0,
    address: "",
    nic_number: "",
  });

  useEffect(() => {
    if (teacherData) {
      setFormData({
        first_name: teacherData.first_name,
        last_name: teacherData.last_name,
        email: teacherData.email,
        phone_number: teacherData.phone_number,
        address: teacherData.address,
        nic_number: teacherData.nic_number,
      });
    }
  }, [teacherData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    teacherUpdateMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Updated Teacher Successfully");
        onCancel();
      },
    });
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
          Teacher Registration
        </Typography>
        {teacherData && (
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", marginTop: 16 }}
          >
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
              {/* Add other form fields here */}
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
        )}
      </Paper>
    </Box>
  );
};

export default TeacherDetailsEditForm;
