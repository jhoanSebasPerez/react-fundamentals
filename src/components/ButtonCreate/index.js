import { useContext } from "react";
import { todoContext } from "../../contexts/TodoContext";
import "./ButtonCreate.css";

const ButtonCreate = () => {
  const { setViewModal } = useContext(todoContext);

  const handleCreate = () => {
    setViewModal((prevValue) => !prevValue);
  };

  return (
    <button onClick={handleCreate} className="button-create">
      +
    </button>
  );
};

export default ButtonCreate;
