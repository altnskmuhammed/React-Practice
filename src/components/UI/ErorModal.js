import React from "react";
import Button from "./Button";
import classes from "./ErorModal.module.css";
import Card from "./Card";

const ErorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <main className={classes.content}>{props.content}</main>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErorModal;
