import React from "react";
import './Goallist.css'

function Goallist(props) {

    
    return (
    <ul className="goal-list">
     {props.list.map(ele=>{
       return  <li key={ele.id}>{ele.text}</li>
     })}
    </ul>
  );
}

export default Goallist;
