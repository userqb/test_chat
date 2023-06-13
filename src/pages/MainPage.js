import React from "react";
import ChatItem from "./../components/ChatItem";
import Header from "./../components/Header";
import Input from "./../components/Input";
import Message from "../components/Message";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div>
        <ChatItem />
      </div>
      <div>
        <div className="my_input">
          <Message />
          <Input />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
