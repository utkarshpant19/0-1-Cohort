import { TodoInput } from "../interface/TodoInput";

export function TodoComponent({ todo }: TodoInput) {
  return (
    <>
      <div>
        <h1>{todo.title}</h1>
        <h1>{todo.description}</h1>
      </div>
    </>
  );
}
