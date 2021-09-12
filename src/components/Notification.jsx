import React from "react";
import useNotice from '../hooks/useNotice';
import { useState } from "react";
import { motion } from "framer-motion";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/Add';

export default function Notification({notification}) {
  const [isOpen, setIsOpen] = useState(false);
  const {removeNotice} = useNotice();
  console.log(isOpen);
  return (
    <motion.div
      layout
      data-isopen={isOpen}
      initial={{ borderRadius: 20 }}
      className="notice-parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout
        className="notice-child"
        children={<div className=" button-label "><AddIcon/></div>}
      />
      <p 
        data-isopen={isOpen}
        className="notice-content"
      >
        {notification.content}
      </p>
      <button className="notice-removeBtn" onClick={()=>{removeNotice(notification.id,setIsOpen);}}>
      <RemoveCircleOutlineIcon/>
      </button>
      <p className="notice-createdAt">{notification.createdAt}</p>
    </motion.div>
  );
}