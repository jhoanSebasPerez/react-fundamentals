import { useContext } from "react";
import { todoContext } from "../../contexts/TodoContext";
import "./Count.css";

const Count = () => {
  const { completedTodos, totalTodos } = useContext(todoContext);

  return (
    <h2 className="count-title">
      You have completed {completedTodos} tasks out of {totalTodos}
    </h2>
  );
};

export default Count;
