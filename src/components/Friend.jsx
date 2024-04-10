import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Friend({ friend }) {
  const { selectedFriend, handleSelectedFriend } = useContext(AppContext);

  return (
    <li
      className={
        selectedFriend?.id === friend.id ? "friend selected" : "friend"
      }
    >
      <img src={friend.image} alt="profile_pic" />
      <div>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You ows {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} ows you {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance == 0 && <p>You and {friend.name} are even</p>}
      </div>
      <button onClick={() => handleSelectedFriend(friend)}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
