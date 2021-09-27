import React from "react";
import UsersList from "../components/UsersList";

const users = [
  {
    id: "u1",
    name: "John Doe",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
    places: 9,
  },
  {
    id: "u2",
    name: "Alen Hry",
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
    places: 2,
  },
  {
    id: "u3",
    name: "Jeevan",
    image:
      "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_960_720.jpg",
    places: 2,
  },
  {
    id: "u4",
    name: "Elena Ray",
    image:
      "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg",
    places: 2,
  }
];

const Users = () => {
  return <UsersList items={users} />;
};

export default Users;
