import { Stack, Typography } from "@mui/material";
import { theme } from "../theme";

interface Props {
  title: string;
}

export const TitleBar = ({ title }: Props) => {
  return (
    <Stack
      sx={{
        borderRadius: 2,
        marginY: 2,
        color: theme.palette.primary.light,
      }}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        {title}{" "}
      </Typography>
    </Stack>
  );
};
