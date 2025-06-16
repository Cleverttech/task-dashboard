import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { TaskForm } from "../components/TaskForm";
import { Task, BaseTask } from "../types/task";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskData: Omit<BaseTask, "id" | "createdAt">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(), 
      createdAt: new Date(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Task Dashboard</Typography>
      
      <TaskForm onAdd={handleAddTask} />

      <Box mt={4}>
        <Typography variant="h6">Current Tasks:</Typography>
        <pre>{JSON.stringify(tasks, null, 2)}</pre> {/* For previewing tasks */}
      </Box>
    </Container>
  );
};

export default App;
