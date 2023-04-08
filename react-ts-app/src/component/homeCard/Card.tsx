import Modal from "../modal/Modal";
import React from "react";
import classes from "./Card.module.css";

function Card(props: any) {
  function openModal() {
    props.setModalActive(true);
    props.setModalContent({
      brand: props.brand,
      category: props.category,
      description: props.description,
      discountPercentage: props.discountPercentage,
      images: props.images,
      price: props.price,
      ratimg: props.ratimg,
      title: props.title,
    });
  }

  return (
    <div className={classes.card} onClick={openModal}>
      <div>{props.title}</div>
      <div>description</div>
      <div>{props.price} $</div>
      <div
        className={classes.img}
        style={{ backgroundImage: `url(${props.images[0]})` }}
      ></div>
    </div>
  );
}

export default Card;
