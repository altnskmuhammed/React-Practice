import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} className={classes.input}>
        <label>UserName</label>
        <input id="username" type="text" />
        <label>Age(Years)</label>
        <input id="age" type="number" />

        <button type="submit"> Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
