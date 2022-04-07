import { useContext } from "react";
import { todoContext } from "../../contexts/TodoContext";
import Count from "../Count";
import Search from "../Search";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import ButtonCreate from "../ButtonCreate";
import Modal from "../Modal";
import ModalForm from "../ModalForm";
import TodosLoading from "../TodosLoading";
import TodoError from "../TodoError";
import TodosEmpty from "../TodosEmpty";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    handleCheck,
    handleDelete,
    viewModal,
  } = useContext(todoContext);

  return (
    <>
      <Count />
      <Search />
      <TodoList>
        {error && <TodoError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </TodoList>
      <ButtonCreate />

      {viewModal && (
        <Modal>
          <ModalForm />
        </Modal>
      )}
    </>
  );
};

export default AppUI;
