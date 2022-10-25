import { Box, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useRef } from "react";

export const Item = ({
  content,
  isChecked,
  onClickDelete,
  onClickCheckbox,
}: {
  content: string;
  isChecked: boolean;
  onClickDelete: () => void;
  onClickCheckbox: () => void;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onClick={onClickCheckbox} />}
        label={content}
        sx={{ ml: 0 }}
      />
      <IconButton onClick={onClickDelete}>
        <Delete />
      </IconButton>
    </Box>
  );
};
