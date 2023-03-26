import React from "react";
import classes from "./Card.module.css";

type MyProps = {
  key: number;
  title: string;
  description: string;
  price: number;
  deliveryTime: Date;
  inputFile: string;
  selection: string;
  checkbox: string;
};

class Card extends React.Component<MyProps> {
  render() {
    return (
      <div className={classes.card}>
        <div>{this.props.title}</div>
        <div>description</div>
        <div>{this.props.price} $</div>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${this.props.inputFile})` }}
        ></div>
      </div>
    );
  }
}

export default Card;
