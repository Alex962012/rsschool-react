import Modal from "../modal/Modal";
import React, { useState } from "react";
import Card from "./Card";
import classes from "./CardContainer.module.css";
import { CardContainerProps, Product } from "../../types";

function CardContainer(props: CardContainerProps) {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const cardElement = props.products.map((el: Product) => (
    <Card
      brand={el.brand}
      category={el.category}
      description={el.description}
      discountPercentage={el.discountPercentage}
      id={el.id}
      key={el.id}
      images={el.images}
      price={el.price}
      rating={el.rating}
      thumbnail={el.thumbnail}
      title={el.title}
      setModalActive={setModalActive}
      setModalContent={setModalContent}
    />
  ));
  return (
    <div>
      <ul className={classes.cardContainer}>{cardElement}</ul>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        modalContent={modalContent}
      ></Modal>
    </div>
  );
}

export default CardContainer;
