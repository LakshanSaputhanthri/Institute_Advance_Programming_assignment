import { useState } from "react";
import { Layout } from "../components/Layout";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { Column } from "react-table";
import { DataTable } from "../components/DataTable";
import { TitleBar } from "../components/TitleBar";
import { Teacher } from "../types/teacher";
import {
  useDeleteTeacherMutation,
  useGetTeachers,
} from "../services/teacherService";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};
import DeleteIcon from "@mui/icons-material/Delete";
import TeacherRegistrationForm from "../components/forms/TeacherRegisterForm";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TeacherDetailsEditForm from "../components/forms/editForms/TeacherDetailEditForm";

export const TeacherPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetTeachers();
  const deleteMutation = useDeleteTeacherMutation();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [teacherId, setTeacherId] = useState<number>(0);

  const columns: Column<Teacher>[] = [
    { Header: "Teacher Id", accessor: "teacher_id" },
    { Header: "First Name", accessor: "first_name", id: "firstNamer" },
    { Header: "Last Name", accessor: "last_name", id: "lastName" },
    { Header: "NIC Number", accessor: "nic_number", id: "nic_number" },
    { Header: "Address", accessor: "address", id: "sage" },
    { Header: "Email", accessor: "email", id: "visits" },
    { Header: "Phone Number", accessor: "phone_number", id: "phone_number" },
    {
      Header: "Action",
      id: "action",
      Cell: ({ row }) => (
        <>
          <DeleteIcon
            sx={{ color: "red" }}
            onClick={() => deleteMutation.mutate(row.original.teacher_id)}
          />
          <EditNoteIcon
            sx={{ color: "blue" }}
            onClick={() => {
              setIsEditFormOpen(true), setTeacherId(row.original.teacher_id);
            }}
          />
        </>
      ),
    },
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
          <TeacherRegistrationForm onCancel={() => setIsOpen(false)} />
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
          <TeacherDetailsEditForm
            onCancel={() => setIsEditFormOpen(false)}
            teacherId={teacherId}
          />
        </Box>
      </Modal>

      {/* Display the table */}
    </Layout>
  );
};
