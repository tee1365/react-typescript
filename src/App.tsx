import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RouterPage from "./routerPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App m-auto">
      <RouterPage />
      <Navbar />
    </div>
  );
};

export default App;
