import { Typography } from "@mui/material";

export const Error = () => {
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
        userSelect: "none",
      }}
    >
      <Typography variant="h2">🫥</Typography>
      <Typography variant="h5">This page doesn't exist!</Typography>
    </div>
  );
};
