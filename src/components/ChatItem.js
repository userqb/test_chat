import axios from "axios";
import React from "react";

const ChatItem = () => {
  const [items, getItems] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://63ddeb47df83d549cea79db1.mockapi.io/chat_name"
      );
      getItems(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="chat_item">
      {items.map((item) => {
        return (
          <div className="chat">
            <img style={{ width: "50px" }} src={item.img} />
            <div>
              <div>{item.username}</div>
              <div>{item.massage}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatItem;
