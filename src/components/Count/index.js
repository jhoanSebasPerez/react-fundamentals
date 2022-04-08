import "./Count.css";

const Count = ({ completedTodos, totalTodos }) => {
  return (
    <h2 className="count-title">
      You have completed {completedTodos} tasks out of {totalTodos}
    </h2>
  );
};

export default Count;
