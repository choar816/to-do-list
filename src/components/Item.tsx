import { Box, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const Item = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <FormControlLabel control={<Checkbox />} label="item" />
      <IconButton>
        <Delete />
      </IconButton>
    </Box>
  );
};
