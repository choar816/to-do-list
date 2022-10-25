import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { ListAlt } from "@mui/icons-material";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, width: "100%", zIndex: 10 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button
            color="inherit"
            startIcon={<ListAlt />}
            onClick={() => navigate("/")}
            sx={{ userSelect: "none", fontSize: 16 }}
          >
            TO DO LIST
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
