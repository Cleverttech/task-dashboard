import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../types/task";
import { useTaskContext } from "../context/TaskContext";

type TaskItemProps = {
  task: Task;
};

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { dispatch } = useTaskContext();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: { id: task.id } });
  };

  return (
    <Card variant="outlined" sx={{ mb: 2, position: "relative" }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        {task.description && (
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>
        )}
        <Typography variant="caption">
          Status: {task.status} | Created: {new Date(task.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
      <IconButton
        onClick={handleDelete}
        sx={{ position: "absolute", top: 8, right: 8 }}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

