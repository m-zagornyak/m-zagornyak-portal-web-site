import HomePage  from "./pages/HomePage/HomePage"
import React from "react";
import { Routes, Route } from "react-router-dom" ;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;