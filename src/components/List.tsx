import { Paper, FormGroup, Typography } from "@mui/material";
import { Item } from "./Item";

export const List = () => {
  return (
    <Paper
      elevation={12}
      sx={{
        width: "90vw",
        maxWidth: 500,
        height: "80vh",
        maxHeight: 700,
        padding: { xs: 2, sm: 5 },
      }}
    >
      <FormGroup
        sx={{ height: "100%", overflowY: "scroll", flexWrap: "nowrap" }}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </FormGroup>
    </Paper>
  );
};
