import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label>UserName</label>
      <input id="username" type="text" />
      <label>Age(Years)</label>
      <input id="age" type="number" />

      <button type="submit"> Add User</button>
    </form>
  );
};

export default AddUser;
