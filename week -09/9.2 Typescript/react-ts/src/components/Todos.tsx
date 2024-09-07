import { TODOS } from "../constants";
import { Todo } from "../interface/Todo";
import { TodoComponent } from "./Todo";

export const Todos = () => {
  const todos = TODOS;

  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoComponent todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
