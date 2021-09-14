import React, {useState} from "react";
import "./App.css";
import Goallist from "./components/Goallist/Goallist";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [goal, setGoal] = useState([])

  function addGoalHandler(newGoal){
    setGoal((preGoal)=>{
     return [...preGoal,newGoal];
    }
    )}
  return (
    <div className="app-div">
      <h2>Course Goals</h2>
      {/* onAddGoals working as props however we define like event listener */}
      <NewGoal onAddGoals={addGoalHandler}/>
      <Goallist list={goal}/>
    </div>
  );
}

export default App;
