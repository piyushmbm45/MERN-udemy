import React, { useState } from "react";

function NewGoal(props) {
    const [inputText,setInputText] = useState('')
    function submitHandler(event){
        event.preventDefault();

        const newGoal = {
            id : (Math.random()*10).toString(),
            text : inputText
        }
        setInputText('')
        props.onAddGoals(newGoal)
    }

    function inputHandler(event){
        setInputText(event.target.value)
    }

  return (
    <form className="newGoal" onSubmit={submitHandler}>
      <input type="text" value={inputText} onChange={inputHandler}/>
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;
