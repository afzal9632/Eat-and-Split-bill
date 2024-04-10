import React, { useContext, useState } from "react";

import { AppContext } from "../contexts/AppContext";

function FormBill() {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendsExpense = Number(bill) - Number(myExpense);

  const { friends, setFriends, selectedFriend } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill) return;

    let friendsBalance;

    if (whoIsPaying === "friend") friendsBalance = -Number(myExpense);
    else friendsBalance = friendsExpense;

    const updatedFriendList = friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + friendsBalance }
        : friend
    );

    setFriends(updatedFriendList);
    setBill("");
    setMyExpense("");
    setWhoIsPaying("user");
  }

  function handleMyExpense(e) {
    setMyExpense(
      Number(e.target.value) > bill ? myExpense : Number(e.target.value)
    );
  }

  return (
    <div className="form-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bill value</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Your expense</label>
          <input type="number" value={myExpense} onChange={handleMyExpense} />
        </div>
        <div>
          <label>{selectedFriend.name} expense</label>
          <input disabled type="number" value={friendsExpense} />
        </div>
        <div>
          <label>Who is paying the bill</label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
        <div>
          <button className="split-button" type="submit">
            Split bill
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormBill;
