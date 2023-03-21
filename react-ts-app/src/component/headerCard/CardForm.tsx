import React from "react";
import classes from "./Card.module.css";

class CardForm extends React.Component {
  render() {
    return (
      <div className={classes.card}>
        <div></div>
        <div>description</div>
        <div> $</div>
        <div></div>
      </div>
    );
  }
}
export default CardForm;
