import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useActions() {
  const { onModify, onRemove, changeForm, onSubmit } =
    useContext(TodoStateContext);
  return { onModify, onRemove, changeForm, onSubmit };
}
