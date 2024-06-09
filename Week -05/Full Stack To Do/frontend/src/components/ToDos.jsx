export function ToDos(props) {
    const todos = props.todos
  return (
    <div>
      {todos.map(function (todo, idx) {
        return (
          <div key={idx}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
