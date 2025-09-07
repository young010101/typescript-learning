// 待办事项类型定义

export enum TodoStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress", 
    COMPLETED = "completed"
}

export enum Priority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}

export interface Todo {
    id: string;
    title: string;
    description?: string;
    status: TodoStatus;
    priority: Priority;
    createdAt: Date;
    updatedAt: Date;
    dueDate?: Date;
    tags: string[];
}

export type TodoInput = Omit<Todo, "id" | "createdAt" | "updatedAt"> & {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TodoFilter = {
    status?: TodoStatus;
    priority?: Priority;
    tags?: string[];
    searchText?: string;
};

export type TodoStats = {
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
    overdue: number;
};