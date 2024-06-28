import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/conversations" element={"Hello"} />
        <Route path="/conversations/:id" element={"Conversations with Id"} />
      </Routes>
    </>
  );
};

export default App;
