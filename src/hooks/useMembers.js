import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useActions() {
  const { members, updateState, memberCount, nameInput } =
    useContext(TodoStateContext);
  return { members, updateState, memberCount, nameInput };
}
