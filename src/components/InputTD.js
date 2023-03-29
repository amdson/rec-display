let InputTodo = () => {
    return <div>input field here...</div>;
  };
export default InputTodo;

export let TodosList = (props) => {
    return (
      <ul>
        {props.todosProps.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  };
