// import { useState } from "react";
import * as ReactDOM from 'react-dom';
import './styles.css';

export const AddTodoModal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="bg-modal">{children}</div>,
    document.getElementById('modal')
  );
};
