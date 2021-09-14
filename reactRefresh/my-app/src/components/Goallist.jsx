import React from "react";
import './Goallist.css'

function Goallist(props) {

    
    return (
    <ul className="goal-list">
     {props.list.map(ele=>{
       return  <li key={ele.id}>{ele.text}</li>
     })}
      {/* <li>{props.list[0].text}</li>
      <li>{props.list[1].text}</li>
      <li>{props.list[2].text}</li> */}
    </ul>
  );
}

export default Goallist;
