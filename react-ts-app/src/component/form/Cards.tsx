import React from "react";
import Card from "./FormCard";
import { CardType } from "./FormCard";
import classes from "./Cards.module.css";
type MyProps = {
  card: Array<CardType>;
};
type MyState = { value: string };
class Cards extends React.Component<any, any> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const arr = this.props.cards;
    console.log(arr);
    const newCard = arr.map((el: CardType, index: number) => (
      <Card
        key={index}
        title={el.title}
        description={el.description}
        price={el.price}
        deliveryTime={el.deliveryTime}
        inputFile={el.inputFile}
        selection={el.selection}
        checkbox={el.checkbox}
      />
    ));
    if (arr.length > 0) {
      return <div className={classes.cards}>{newCard}</div>;
    }
  }
}
export default Cards;
