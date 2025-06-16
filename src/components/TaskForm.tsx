import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { TaskStatus, BaseTask } from "../types/task";

type TaskFormProps = {
  onAdd: (task: Omit<BaseTask, "id" | "createdAt">) => void;
};

export const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title,
      description,
      status,
    });

    // Reset form
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
      />
      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
        SelectProps={{ native: true }}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </TextField>
      <Button variant="contained" type="submit">Add Task</Button>
    </Box>
  );
};
