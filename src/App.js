import React from "react";

import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormBill from "./components/FormBill";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const App = () => {
  const { selectedFriend, setSelectedFriend, showAddFriend, setShowAddFriend } =
    useContext(AppContext);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div>
        <FriendList />
      </div>
      <div>{selectedFriend && <FormBill />}</div>
      <div>
        {showAddFriend && <FormAddFriend />}
        <div className="addfriend-button">
          <button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
