import React from "react";
import classes from "./FormCard.module.css";
export  type CardType = {
  title: string;
  description: string;
  deliveryTime: Date;
  price: number; 
  inputFile:string;
  selection:string
};

class FormCard extends React.Component<CardType> {
  render() {
    console.log(this.props)
    return (
      <div className={classes.card}>  
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.price} $</div>
        <div>{this.props.inputFile}</div>
      </div>
    );
  }
}

export default FormCard;
