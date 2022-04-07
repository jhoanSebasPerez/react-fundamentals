import { useContext } from "react";
import { todoContext } from "../../contexts/TodoContext";
import "./Search.css";

const Search = () => {
  const { searchText, setSearchText } = useContext(todoContext);

  const handleChangeText = (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  return (
    <input
      value={searchText}
      onChange={handleChangeText}
      className="search-box"
      type="text"
      placeholder="Type for filter"
    />
  );
};

export default Search;
