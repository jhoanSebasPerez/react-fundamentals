import Icon from "../Icon";
import "./TodoItem.css";

const TodoItem = ({ id, text, completed, handleCheck, handleDelete }) => {
  return (
    <li className="todo-item">
      <Icon type="check" onClick={() => handleCheck(id)} />
      <p className={`item-text ${completed ? "completed" : ""}`}>{text}</p>
      <Icon type="delete" onClick={() => handleDelete(id)} />
    </li>
  );
};

export default TodoItem;
