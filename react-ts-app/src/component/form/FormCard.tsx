import React from "react";
import classes from "./FormCard.module.css";
export type CardType = {
  Title: string | undefined;
  Description: string | undefined;
  DeliveryTime: string | undefined;
  Price: string | undefined;
  File: string | undefined;
  Category: string | undefined;
  Checkbox: string | undefined;
};

class FormCard extends React.Component<CardType> {

  render() {
    return (
      <div className={classes.card}>
        <div>{this.props.Title}</div>
        <div>{this.props.Description}</div>
        <div>{this.props.Price} $</div>
        <div>{this.props.DeliveryTime}</div>
        <div>{this.props.Category}</div>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${this.props.File})` }}
        ></div>
      </div>
    );
  }
}

export default FormCard;
