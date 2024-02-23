import { Layout } from "../components/Layout";
import { Stack } from "@mui/material";
import { useGetClass } from "../services/classService";
import { ClassTile } from "../components/ClassTile";

export const Attendance = () => {
  const { data } = useGetClass();

  return (
    <Layout>
      <Stack
        gap={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          padding: 4,
        }}
      >
        {data &&
          data.map((item) => (
            <ClassTile
              key={item.class_id}
              classId={item.class_id}
              className={item.class_name}
              teacher={item.teacher}
            />
          ))}
      </Stack>
    </Layout>
  );
};
