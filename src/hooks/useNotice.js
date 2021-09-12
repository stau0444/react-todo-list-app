import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useActions() {
  const {
    notifications,
    setNotifications,
    removeNotice,
    addNotice,
    noticeInputRef,
  } = useContext(TodoStateContext);
  return {
    notifications,
    setNotifications,
    removeNotice,
    addNotice,
    noticeInputRef,
  };
}
