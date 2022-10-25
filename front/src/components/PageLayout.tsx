import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Box } from "@mui/material";

export const PageLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
};
