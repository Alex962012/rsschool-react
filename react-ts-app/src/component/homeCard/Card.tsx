import React from "react";
import classes from "./Card.module.css";

type MyProps = {
  key: number;
  title: string;
  price: number;
  image: string;
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
          style={{ backgroundImage: `url(${this.props.image})` }}
        ></div>
      </div>
    );
  }
}

export default Card;
