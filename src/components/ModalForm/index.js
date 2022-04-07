import { useContext, useState } from "react";
import { todoContext } from "../../contexts/TodoContext";
import "./ModalForm.css";

const ModalForm = () => {
  const { addTodo, setViewModal } = useContext(todoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setViewModal(false);
  };

  return (
    <form className="modal-form">
      <label htmlFor="text">Write your new TODO</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text"
        cols="30"
        rows="10"
        placeholder="Read chapter 1"
        required
      ></textarea>
      <div className="buttons-container">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setViewModal(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
