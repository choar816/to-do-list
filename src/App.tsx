import { Box } from "@mui/material";
import { List } from "./components/List";
import { Header } from "./components/Header";
import "./App.css";

function App() {
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
      <div style={{ flexGrow: 1, padding: 20 }}>
        <List />
      </div>
    </Box>
  );
}

export default App;
