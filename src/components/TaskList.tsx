import React from "react";
import { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
};

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one!</p>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
