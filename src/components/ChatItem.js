import React from "react";
import { fetchData } from "../api/ItemsData";
import { useSelector } from "react-redux";

const ChatItem = () => {
  const { message } = useSelector(({ message }) => message);
  // const [value, setValue] = React.useState("")
  const [items, getItems] = React.useState([]);

  console.log(getItems);

  React.useEffect(() => {
    fetchData(getItems);
  }, []);

  const changeChat = () => {};

  return (
    <div className="chat">
      {items.map((item) => {
        return (
          <div onClick={changeChat} className="chat_item">
            <img style={{ width: "50px" }} src={item.img} />
            <div>
              <div>{item.username}</div>
              <div>{message}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatItem;
