import React from "react";
import UsersList from "../components/UsersList";

const users = [
  {
    id: "u1",
    name: "Piyush Jain",
    image:
      "https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.1605559903.fit_scale.size_760x427.png",
    places: 9,
  },
];

const Users = () => {
  return <UsersList items={users} />;
};

export default Users;
