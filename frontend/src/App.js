import { Button } from "@chakra-ui/react";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="App"> */}
      {/* <Router> */}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/chats" exact element={<ChatPage />} />
      </Routes>
      {/* </Router> */}
      {/* </div> */}
    </>
  );
}

export default App;
