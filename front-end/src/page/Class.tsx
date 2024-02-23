import { useState } from "react";
import { Layout } from "../components/Layout";
import { Box, Button, Modal, Stack } from "@mui/material";
import { Column } from "react-table";
import { DataTable } from "../components/DataTable";
import { TitleBar } from "../components/TitleBar";
import ClassRegistrationForm from "../components/forms/ClassRegisterForm";
import { StudentClass } from "../types/class";
import { useGetClass } from "../services/classService";
import AddNewSubjectForm from "../components/forms/AddNewSubjectForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export const Class = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubjectForm, setIsOpenSubjectForm] = useState(false);

  const { data } = useGetClass();

  const columns: Column<StudentClass>[] = [
    { Header: "Class Name", accessor: "class_name", id: "className" },
    {
      Header: "Teacher Name",
      id: "teacherId",
      Cell: ({ row }) => (
        <Stack gap={1} direction={"row"}>
          {row.original.teacher.first_name}&nbsp;
          {row.original.teacher.last_name}
        </Stack>
      ),
    },
    {
      Header: "Subject Name",
      id: "subjectId",
      Cell: ({ row }) => (
        <Stack gap={1} direction={"row"}>
          {row.original.subject.subject_name}&nbsp;
        </Stack>
      ),
    },
  ];

  return (
    <Layout>
      <TitleBar title={"Classes"} />
      <Stack direction={"row"} gap={2} justifyContent={"end"}>
        <Button variant="contained" onClick={() => setIsOpenSubjectForm(true)}>
          Add New Subject
        </Button>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Add New Class
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
      <Modal open={isOpenSubjectForm}>
        <Box
          sx={{
            ...style,
            width: "60%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AddNewSubjectForm onCancel={() => setIsOpenSubjectForm(false)} />
        </Box>
      </Modal>
    </Layout>
  );
};
