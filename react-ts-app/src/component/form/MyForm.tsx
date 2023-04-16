import React from "react";
import InputComponent from "./formComponent/InputComponent";
import classes from "./MyForm.module.css";
import InputFileComponent from "./formComponent/InputFileComponent";
import SelectComponent from "./formComponent/SelectComponent";
import InputRadioComponent from "./formComponent/InputRadioComponent";
import FormCard, { CardType } from "./FormCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { updateForm } from "../../store/formSlice";

export interface IFormValues {
  Title: string;
  Description: string;
  DeliveryTime: string;
  Category: string;
  Price: string;
  "I consent to my personal data": string;
  For: string;
  File: string;
}

const MyForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>();

  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.form);
  const onSubmit: SubmitHandler<CardType> = (data) => {
    const file = data.File?.[0];
    const res = file ? URL.createObjectURL(file as unknown as Blob) : undefined;
    data.File = res;
    dispatch(updateForm(data));
    reset();
  };
  const newCard = cards.map((el: CardType, index: number) => (
    <FormCard
      key={index}
      Title={el.Title}
      Description={el.Description}
      Price={el.Price}
      DeliveryTime={el.DeliveryTime}
      File={el.File}
      Category={el.Category}
      For={el.For}
    />
  ));
  const res = cards.length > 0 ? newCard : "";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <InputComponent
          text="Title"
          register={register}
          required
          type="text"
          errors={errors.Title}
        />
        <InputComponent
          text="Description"
          register={register}
          required
          type="text"
          errors={errors.Description}
        />
        <InputComponent
          text="DeliveryTime"
          register={register}
          required
          type="date"
          errors={errors.DeliveryTime}
        />
        <SelectComponent text="Category" {...register("Category")} />
        <InputComponent
          text="Price"
          register={register}
          required
          type="number"
          errors={errors.Price}
        />
        <InputComponent
          text="I consent to my personal data"
          register={register}
          required
          type="checkbox"
          errors={errors["I consent to my personal data"]}
        />
        <InputRadioComponent
          text="For"
          register={register}
          required
          errors={errors.For}
        />
        <InputFileComponent
          text="File"
          register={register}
          required
          errors={errors.File}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div className={classes.cardContainer}>{res}</div>
    </div>
  );
};

export default MyForm;
