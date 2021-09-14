import React, {useState} from "react";
import "./App.css";
import Goallist from "./components/Goallist/Goallist";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [goal, setGoal] = useState([])
  // const courseGoals = [
  //   { id: "cg1", text: "formation" },
  //   { id: "cg2", text: "List out the api" },
  //   { id: "cg3", text: "comment on api" },
  // ];
  function addGoalHandler(newGoal){
    // courseGoals.push(newGoal)
    setGoal([...goal,newGoal])
    // console.log(courseGoals);
  }
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
