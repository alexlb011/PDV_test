import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Kitchen from "./pages/kitchen";
import Requests from "./pages/requests";
import Withdrawal from "./pages/withdrawal";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
