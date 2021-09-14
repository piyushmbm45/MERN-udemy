import React from "react";

function NewGoal(props) {

    function submitHandler(event){
        event.preventDefault();
        const inputText = event.target[0].value;
        const newGoal = {
            id : (Math.random()*10).toString(),
            text : inputText
        }
        props.onAddGoals(newGoal)
        // console.log(newGoal);
    }
  return (
    <form className="newGoal" onSubmit={submitHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;
