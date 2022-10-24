import './styles.css';

export const CreateTodoButton = ({ setOpenModal }) => {
  const onClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div class="create-button" onClick={onClick}>
        +
      </div>
    </div>
  );
};
