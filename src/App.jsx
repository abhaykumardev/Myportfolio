import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  const [introDone, setIntroDone] = useState(false);
  const location = useLocation();

  return (
    <div>
      {introDone && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <Home introDone={introDone} setIntroDone={setIntroDone} />
          }
        />
      </Routes>

      {introDone && <Footer />}
    </div>
  );
};

export default App;
