import { useState } from "react";
import { Layout } from "../components/Layout";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
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

export const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false);

  type Person = {
    teacherId: string;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  };

  const users: Person[] = [
    {
      teacherId: "1",
      firstName: "Tanner",
      lastName: "Linsley",
      age: 33,
      visits: 100,
      progress: 50,
      status: "Married",
    },
    {
      teacherId: "2",
      firstName: "Kevin",
      lastName: "Vandy",
      age: 27,
      visits: 200,
      progress: 100,
      status: "Single",
    },
  ];

  const columns: Column[] = [
    { Header: "Teacher Id", accessor: "teacherId" },
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Age", accessor: "age" },
    { Header: "Visits", accessor: "visits" },
    { Header: "Progress", accessor: "progress" },
    { Header: "Status", accessor: "status" },
  ];

  return (
    <Layout>
      <TitleBar title={"Teacher"} />
      <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={2}>
          <TextField
            id="outlined-basic"
            label="Teacher Id"
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
