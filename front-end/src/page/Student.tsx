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
import StudentRegistrationForm from "../components/forms/StudentRegisterForm";
import { TitleBar } from "../components/TitleBar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  useDeleteStudentMutation,
  useGetStudents,
} from "../services/studentService";
import { Student } from "../types/students";
import { gradeList } from "../state/gradeList";
import StudentDetailEditForm from "../components/forms/editForms/StudentDetailEditForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export const StudentPage = () => {
  const [grade, setGrade] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };
  const deleteMutation = useDeleteStudentMutation();

  const { data } = useGetStudents();
  const [studentId, setStudentId] = useState<number>(0);

  const columns: Column<Student>[] = [
    {
      Header: "Student Number",
      accessor: "student_id",
      id: "studentNumber",
    },
    { Header: "First Name", accessor: "first_name", id: "firstNamer" },
    { Header: "Last Name", accessor: "last_name", id: "lastName" },
    { Header: "Address", accessor: "address", id: "sage" },
    { Header: "Phone Number", accessor: "phone_number", id: "phone_number" },
    {
      Header: "Action",
      id: "action",
      Cell: ({ row }) => (
        <Stack gap={1} direction={"row"}>
          <EditNoteIcon
            sx={{ color: "blue" }}
            onClick={() => {
              setIsEditFormOpen(true), setStudentId(row.original.student_id);
            }}
          />
          <DeleteIcon
            sx={{ color: "red" }}
            onClick={() => deleteMutation.mutate(row.original.student_id)}
          />
        </Stack>
      ),
    },
  ];

  return (
    <Layout>
      <TitleBar title={"Students"} />
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
          <StudentRegistrationForm onCancel={() => setIsOpen(false)} />
        </Box>
      </Modal>
      <Modal open={isEditFormOpen}>
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
      </Modal>
    </Layout>
  );
};
