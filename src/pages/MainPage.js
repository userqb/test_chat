import React from "react";
import ChatItem from "./../components/ChatItem";
import Header from "./../components/Header";
import Input from "./../components/Input";
import Time from "./../components/Time";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div>
        <ChatItem />
      </div>
      <div>
        <div className="my_input">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
