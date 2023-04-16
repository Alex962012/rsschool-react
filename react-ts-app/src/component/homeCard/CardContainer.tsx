import Modal from "../modal/Modal";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import classes from "./CardContainer.module.css";
import { fetchProducts } from "../../store/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Product } from "types";
function CardContainer() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.string.string);
  useEffect(() => {
    dispatch(fetchProducts(search));
  }, [dispatch, search]);

  const products = useAppSelector((state) => state.products.products);
  const makeCard = () => {
    const cardItem = products.map((el: Product) => (
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
    return cardItem;
  };

  const items = products.length === 0 ? "NotFound" : makeCard();
  return (
    <div>
      <ul className={classes.cardContainer}>{items}</ul>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        modalContent={modalContent}
      ></Modal>
    </div>
  );
}

export default CardContainer;
