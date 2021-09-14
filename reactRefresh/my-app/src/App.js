import React from "react";
import "./App.css";
import Goallist from "./components/Goallist";

function App() {
  const courseGoals = [
    { id: "cg1", text: "formation" },
    { id: "cg2", text: "List out the api" },
    { id: "cg3", text: "comment on api" },
  ];
  return (
    <div className="app-div">
      <h2>Course Goals</h2>
      <Goallist list={courseGoals}/>
    </div>
  );
}

export default App;
