import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TO DO LIST
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
