import "./Icon.css";

const Icon = ({ type, onClick }) => {
  const iconClass = {
    check: "fa-check",
    delete: "fa-xmark",
  };

  return <i onClick={onClick} className={`fa-solid ${iconClass[type]}`}></i>;
};

export default Icon;
