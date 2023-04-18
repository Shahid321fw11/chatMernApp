import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  console.log("checking chat1");
  const [chat, setChat] = useState([]);
  console.log("checking chat2");
  const fetchData = async () => {
    console.log("checking chat3");

    const { data } = await axios.get("/api/chat/");
    console.log("checking chat4");

    // console.log(data);
    setChat(data);
    console.log("checking chat5");
  };
  useEffect(() => {
    fetchData();
    console.log("checking chat7");
  }, []);

  console.log("checking chat6");

  return (
    <div>
      {console.log("checking chat88")}
      {console.log(chat.length, chat, "checking chat")}
      {chat.map((item) => (
        <div>{item.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
