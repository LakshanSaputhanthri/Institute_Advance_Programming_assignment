import { useState } from "react";
import { Layout } from "../components/Layout";
import { Box, Button, Modal, Stack } from "@mui/material";
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
import StudentDetailEditForm from "../components/forms/editForms/StudentDetailEditForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export const StudentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

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
      <Stack direction={"row"} gap={2} justifyContent={"end"}>
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
