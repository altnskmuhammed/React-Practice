import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredAge, enteredUserName);
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} className={classes.input}>
        <label>UserName</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label>Age(Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />

        <Button type="submit"> Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
