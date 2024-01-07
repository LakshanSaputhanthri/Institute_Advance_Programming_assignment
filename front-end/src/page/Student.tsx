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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export const Student = () => {
  const [grade, setGrade] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };
  type Person = {
    studentNumber: string;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  };

  const users: Person[] = [
    {
      studentNumber: "1",
      firstName: "Tanner",
      lastName: "Linsley",
      age: 33,
      visits: 100,
      progress: 50,
      status: "Married",
    },
    {
      studentNumber: "2",
      firstName: "Kevin",
      lastName: "Vandy",
      age: 27,
      visits: 200,
      progress: 100,
      status: "Single",
    },
  ];

  const columns: Column[] = [
    { Header: "Student Number", accessor: "studentNumber" },
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Age", accessor: "age" },
    { Header: "Visits", accessor: "visits" },
    { Header: "Progress", accessor: "progress" },
    { Header: "Status", accessor: "status" },
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
                <MenuItem value={grade.value}>{grade.grade}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Add New
        </Button>
      </Stack>
      <DataTable data={users} columns={columns} />
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

      {/* Display the table */}
    </Layout>
  );
};

const gradeList = [
  { grade: "Grade 1", value: 1 },
  { grade: "Grade 2", value: 2 },
  { grade: "Grade 3", value: 3 },
  { grade: "Grade 4", value: 4 },
  { grade: "Grade 5", value: 5 },
  { grade: "Grade 6", value: 6 },
  { grade: "Grade 7", value: 7 },
  { grade: "Grade 8", value: 8 },
  { grade: "Grade 9", value: 9 },
  { grade: "Grade 10", value: 10 },
  { grade: "Grade 11", value: 11 },
  { grade: "Grade 12", value: 12 },
  { grade: "Grade 13", value: 13 },
];
