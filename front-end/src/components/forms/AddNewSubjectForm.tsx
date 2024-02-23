import React, { useState } from "react";
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
import { SubjectForm } from "../../types/subject";
import { useSubjectCreateMutations } from "../../services/classService";

interface Props {
  onCancel: () => void;
}
const AddNewSubjectForm = ({ onCancel }: Props) => {
  const createMutation = useSubjectCreateMutations();

  const [formData, setFormData] = useState<SubjectForm>({
    subject_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Create Subject Successfully"), onCancel();
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
          Add New Subject
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Class Name"
                name="subject_name"
                value={formData.subject_name}
                onChange={handleChange}
              />
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
              Add
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

export default AddNewSubjectForm;
