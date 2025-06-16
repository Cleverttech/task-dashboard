import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useTaskContext } from "./context/TaskContext";
import { BaseTask } from "./types/task";

const App: React.FC = () => {
  const { state, dispatch } = useTaskContext();

  const handleAddTask = (taskData : Omit<BaseTask, "id" | "createdAt">) => {
    dispatch({ type: "ADD_TASK", payload: taskData });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Task Dashboard</Typography>

      <TaskForm onAdd={handleAddTask} />

      <Box mt={4}>
        <Typography variant="h6">Your Tasks</Typography>
        <TaskList tasks={state.tasks} />
      </Box>
    </Container>
  );
};

export default App;
