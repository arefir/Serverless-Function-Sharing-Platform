import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import MainPage from "./MainPage/MainPage";
import ExampleFunc from "./FunctionPage/ExampleFunc";
import SearchResult from "./SearchPage/SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/example" element={<ExampleFunc />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;
