import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import UsersList from "./UsersList";
import ErorModal from "../UI/ErorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [eror, setEror] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge === 0) {
      setEror({
        title: "İnvalid input",
        content: "please write something",
      });
      return;
    }
    if (+enteredAge < 1) {
      setEror({
        title: "İnvalid age",
        content: "please write valid age",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const erorHandler = () => {
    setEror(null);
  };
  return (
    <div>
      {eror && (
        <ErorModal
          title={eror.title}
          content={eror.content}
          onConfirm={erorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} className={classes.input}>
          <label>UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label>Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
