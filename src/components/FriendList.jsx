import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import Friend from "./Friend";

function FriendList() {
  const { friends } = useContext(AppContext);

  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendList;
