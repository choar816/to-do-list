import { Box, Checkbox, IconButton, Input } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const Item = ({
  content,
  isChecked,
  onChangeInput,
  onClickCheckbox,
  onClickDelete,
}: {
  content: string;
  isChecked: boolean;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCheckbox: () => void;
  onClickDelete: () => void;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox checked={isChecked} onClick={onClickCheckbox} />
        <Input value={content} onChange={onChangeInput} />
      </div>
      <IconButton onClick={onClickDelete}>
        <Delete />
      </IconButton>
    </Box>
  );
};
