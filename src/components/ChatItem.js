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
    <div>
      {items.map((item) => {
        return <div>{item.username}</div>;
      })}
    </div>
  );
};

export default ChatItem;
