import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Task, BaseTask } from "../types/task";

type State = {
  tasks: Task[];
};

type Action =
  | { type: "ADD_TASK"; payload: Omit<BaseTask, "id" | "createdAt"> }
  | { type: "DELETE_TASK"; payload: { id: string } };

const TaskContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const taskReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask: Task = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };
      return { tasks: [...state.tasks, newTask] };

    case "DELETE_TASK":
      return { tasks: state.tasks.filter(task => task.id !== action.payload.id) };

    default:
      return state;
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be used within a TaskProvider");
  return context;
};
