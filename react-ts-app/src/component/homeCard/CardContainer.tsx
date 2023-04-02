import React from "react";
import Card from "./Card";
import cards from "../../Cards.json";
import classes from "./CardContainer.module.css";
const cardElement = cards.map((el) => (
  <Card title={el.title} price={el.price} image={el.image} key={el.id} />
));
class CardContainer extends React.Component {
  render() {
    return <ul className={classes.cardContainer}>{cardElement}</ul>;
  }
}

export default CardContainer;
