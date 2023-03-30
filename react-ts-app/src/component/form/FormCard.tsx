import React from "react";
import classes from "./FormCard.module.css";
export type CardType = {
  title: string | undefined;
  description: string | undefined;
  deliveryTime: string | undefined;
  price: string | undefined;
  inputFile: string | undefined;
  selection: string | undefined;
  checkbox: string | undefined;
};

class FormCard extends React.Component<CardType> {
  render() {
    return (
      <div className={classes.card}>
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.price} $</div>
        <div>{this.props.deliveryTime}</div>
        <div>{this.props.selection}</div>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${this.props.inputFile})` }}
        ></div>
      </div>
    );
  }
}

export default FormCard;
