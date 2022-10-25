import { Paper, FormGroup, Typography } from "@mui/material";
import { Item } from "./Item";

export const List = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#e6e6e6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "90vw",
          maxWidth: 500,
          height: "70vh",
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
    </div>
  );
};
