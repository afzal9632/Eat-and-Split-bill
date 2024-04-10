import React, { useContext, useState } from "react";

import { AppContext } from "../contexts/AppContext";

function FormAddFriend() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  const { handleAddFriends } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imageUrl) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);

    handleAddFriends(newFriend);
    setName("");
    setImageUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-addfriend" onSubmit={handleSubmit}>
      <div>
        <label>Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Image Url</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default FormAddFriend;
