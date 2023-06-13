import React from "react";
import { useSelector } from "react-redux";

const Message = () => {
  const { message } = useSelector(({ message }) => message);

  return <div className="my_message">{message}</div>;
};

export default Message;
