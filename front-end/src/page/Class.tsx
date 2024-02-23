import React, { useState } from "react";
import { Layout } from "../components/Layout";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { Column } from "react-table";
import { DataTable } from "../components/DataTable";
import { TitleBar } from "../components/TitleBar";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { gradeList } from "../state/gradeList";
import ClassRegistrationForm from "../components/forms/ClassRegisterForm";
import { useGetclass } from "../services/classService";
import { StudentClass } from "../types/class";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export const Class = () => {
  const [grade, setGrade] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };
  // const deleteMutation = useDeleteStudentMutation();

  const { data } = useGetclass();
  // const [studentId, setStudentId] = useState<number>(0);

  const columns: Column<StudentClass>[] = [
    { Header: "Class Name", accessor: "class_name", id: "className" },
    { Header: "Teacher Name", accessor: "class_name", id: "className" },
    { Header: "Subject Name", accessor: "class_name", id: "className" },

    {
      Header: "Action",
      id: "action",
      Cell: () => (
        <Stack gap={1} direction={"row"}>
          <EditNoteIcon sx={{ color: "blue" }} />
        </Stack>
      ),
    },
  ];

  return (
    <Layout>
      <TitleBar title={"Classes"} />
      <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={2}>
          <TextField
            id="outlined-basic"
            label="Student Number"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
          />

          <FormControl sx={{ width: "12rem" }} size="small">
            <InputLabel id="demo-simple-select-label">Grade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={grade}
              label="Grade"
              onChange={handleChange}
            >
              {gradeList.map((grade) => (
                <MenuItem value={grade.value} key={grade.value}>
                  {grade.grade}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Add New
        </Button>
      </Stack>
      {data && <DataTable data={data} columns={columns} />}
      <Modal open={isOpen}>
        <Box
          sx={{
            ...style,
            width: "60%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ClassRegistrationForm onCancel={() => setIsOpen(false)} />
        </Box>
      </Modal>
      {/* <Modal open={isEditFormOpen}>
        <Box
          sx={{
            ...style,
            width: "60%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StudentDetailEditForm
            onCancel={() => setIsEditFormOpen(false)}
            studentId={studentId}
          />
        </Box>
      </Modal> */}
    </Layout>
  );
};
