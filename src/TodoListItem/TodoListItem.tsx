import { FC } from "react";
import "./TodoListItem.css";

interface Props {
  checked: boolean;
  label: string;
}

export const TodoListItem: FC<Props> = (props) => {
  return (
    <div className="todoListItem">
      <div className="content">
        <div className={`todoCheck ${props.checked ? "checked" : ""}`}></div>
        <div className={`todoLabel ${props.checked ? "checked" : ""}`}>
          {props.label}
        </div>
      </div>
      <div className="removeButton">Remove</div>
    </div>
  );
};
