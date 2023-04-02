import React from "react";
import classes from "./FormCard.module.css";
export type CardType = {
  Title: string | undefined;
  Description: string | undefined;
  DeliveryTime: string | undefined;
  Price: string | undefined;
  File: any;
  Category: string | undefined;
  For: string | undefined;
};

function FormCard(props: CardType) {
  return (
    <div className={classes.card}>
      <div>{props.Title}</div>
      <div>{props.Description}</div>
      <div>{props.Price} $</div>
      <div>{props.DeliveryTime}</div>
      <div>{props.Category}</div>
      <div>{props.For}</div>
      <img
        className="Card-image"
        src={URL.createObjectURL(props.File)}
        alt="card image"
      />
    </div>
  );
}

export default FormCard;
