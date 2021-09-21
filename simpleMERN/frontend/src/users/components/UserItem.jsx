import React from "react";

const UserItem = (props) => {
  return (
    <div>
      <li>
      <p>{props.name}</p>
      <img src={props.image} alt="profile pic" />
      <h3>{props.placeCount}</h3>
      </li>
    </div>
  );
};

export default UserItem;
