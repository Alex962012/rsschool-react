import React, { useState } from "react";
import InputComponent from "./formComponent/InputComponent";
import classes from "./MyForm.module.css";
import InputFileComponent from "./formComponent/InputFileComponent";
import SelectComponent from "./formComponent/SelectComponent";
import InputRadioComponent from "./formComponent/InputRadioComponent";
import FormCard, { CardType } from "./FormCard";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

export interface IFormValues {
  Title: string;
  Description: string;
  "Receipt time": string;
  Category: string;
  Price: string;
  "I consent to my personal data": string;
  For: string;
  File: string;
}

const MyForm = () => {
  const cardtype: CardType[] = [];
  const [cards, setCards] = useState(cardtype);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>();

  const addCard = (card: CardType) => {
    console.log(card);
    setCards((cards) => [...cards, card]);
  };

  const onSubmit = (data: any) => {
    // data.File=data.File?.[0] ?URL.createObjectURL((data.File)):undefined
    const aaa = data.File?.[0] ? URL.createObjectURL(data.File[0]) : undefined;
    data.File = aaa;
    console.log(aaa);
    addCard(data);
    reset()
  };

  // render() {
  //   const arr = this.state.cards;
  const newCard = cards.map((el: CardType, index: number) => (
    <FormCard
      key={index}
      Title={el.Title}
      Description={el.Description}
      Price={el.Price}
      DeliveryTime={el.DeliveryTime}
      File={el.File}
      Category={el.Category}
      Checkbox={el.Checkbox}
    />
  ));
  const res = cards.length > 0 ? newCard : "";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <InputComponent text="Title" register={register} required type="text" />
        <InputComponent
          text="Description"
          register={register}
          required
          type="text"
        />
        <InputComponent
          text="Receipt time"
          register={register}
          required
          type="date"
        />
        <SelectComponent text="Category" {...register("Category")} />
        <InputComponent
          text="Price"
          register={register}
          required
          type="number"
        />
        <InputComponent
          text="I consent to my personal data"
          register={register}
          required
          type="checkbox"
        />
        <InputRadioComponent text="For" register={register} required />
        <InputFileComponent text="File" register={register} required />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div className={classes.cardContainer}>{res}</div>
    </div>
  );
};

export default MyForm;
