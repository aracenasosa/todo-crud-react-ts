export interface ITodo {
  id: string;
  title: string;
  status: boolean;
}

export type TodoId = Pick<ITodo, "id">;
export type TodoCompleted = Pick<ITodo, "id" | "status">;

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
