import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexGrow: 1,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Typography variant="h5">Join</Typography>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TextField id="id" label="id" variant="outlined" />
        <TextField id="password" label="password" variant="outlined" />
        <TextField
          id="password check"
          label="password check"
          variant="outlined"
        />
      </section>
      <Button variant="contained">Sign up</Button>
    </div>
  );
};
