export type TaskStatus = "pending" | "in-progress" | "done" ;

export interface BaseTask {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    dueDate?: Date;
    createdAt: Date;  
}

export type Task<T extends Record<string, any> = {}> = BaseTask & T;
