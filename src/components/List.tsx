import { useDispatch, useSelector } from "react-redux";
import { Item } from "./Item";
import { addTodoItem, removeTodoItem, toggleIsChecked } from "../redux/slice";
import { Paper, FormGroup, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

export const List = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.todoItems);

  const onClickAdd = () => {
    dispatch(addTodoItem());
  };

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
          py: { xs: 2, sm: 5 },
          px: { xs: 1, sm: 4 },
        }}
      >
        <FormGroup
          sx={{ height: "100%", overflowY: "scroll", flexWrap: "nowrap" }}
        >
          {items.map((item, index) => (
            <Item
              key={`todo_item_${item.id}`}
              content={item.content}
              isChecked={item.isChecked}
              onClickCheckbox={() => dispatch(toggleIsChecked({ index }))}
              onClickDelete={() => dispatch(removeTodoItem({ index }))}
            />
          ))}
          <IconButton onClick={() => dispatch(addTodoItem())}>
            <AddCircle />
          </IconButton>
        </FormGroup>
      </Paper>
    </div>
  );
};
