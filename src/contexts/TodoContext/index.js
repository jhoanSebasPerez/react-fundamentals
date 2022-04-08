import React, { createContext, useEffect, useState } from "react";

const todoContext = createContext();

const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      console.log("Entro useEffect");
      try {
        const itemLocal = localStorage.getItem(itemName);

        let itemParsed;
        if (!itemLocal) {
          localStorage.setItem(itemName, JSON.stringify(item));
          itemParsed = item;
        } else {
          itemParsed = JSON.parse(itemLocal);
        }

        setItem(itemParsed);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const itemSave = JSON.stringify(newItem);
      localStorage.setItem(itemName, itemSave);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, loading, error, saveItem };
};

const TodoProvider = (props) => {
  const [searchText, setSearchText] = useState("");
  const [viewModal, setViewModal] = useState(false);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchText.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const searchValue = searchText.toLowerCase();
      const text = todo.text.toLowerCase();
      return text.includes(searchValue);
    });
  }

  const handleCheck = (id) => {
    saveTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    saveTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    const copyTodos = [...todos];
    copyTodos.push({ id: copyTodos.length + 1, text, completed: false });
    saveTodos(copyTodos);
  };

  return (
    <todoContext.Provider
      value={{
        searchText,
        todos,
        saveTodos,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        handleCheck,
        handleDelete,
        setSearchText,
        viewModal,
        setViewModal,
        addTodo,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export { todoContext, TodoProvider };
