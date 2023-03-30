import React from "react";
import InputComponent from "./formComponent/InputComponent";
import classes from "./MyForm.module.css";
import InputFileComponent from "./formComponent/InputFileComponent";
import SelectComponent from "./formComponent/SelectComponent";
import InputRadioComponent from "./formComponent/InputRadioComponent";
import FormCard, { CardType } from "./FormCard";

type StateType = {
  cards: CardType[];
  title: boolean;
  description: boolean;
  deliveryTime: boolean;
  price: boolean;
  inputFile: boolean;
  selection: boolean;
  checkbox: boolean;
  radio: boolean;
  form: boolean;
  validate: boolean;
};
type PropsType = {
  cards: [];
  title: boolean;
  description: boolean;
  deliveryTime: boolean;
  price: boolean;
  inputFile: boolean;
  selection: boolean;
  checkbox: boolean;
  radio: boolean;
  form: boolean;
  validate: boolean;
};

class MyForm extends React.Component<unknown, StateType> {
  title: React.RefObject<HTMLInputElement> = React.createRef();
  description: React.RefObject<HTMLInputElement> = React.createRef();
  deliveryTime: React.RefObject<HTMLInputElement> = React.createRef();
  price: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  selection: React.RefObject<HTMLSelectElement> = React.createRef();
  form: React.RefObject<HTMLFormElement> = React.createRef();
  checkbox: React.RefObject<HTMLInputElement> = React.createRef();
  radio1: React.RefObject<HTMLInputElement> = React.createRef();
  radio2: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: PropsType) {
    super(props);
    this.state = {
      cards: [],
      title: true,
      description: true,
      deliveryTime: true,
      price: true,
      inputFile: true,
      selection: true,
      checkbox: true,
      radio: true,
      form: false,
      validate: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateTitle() {
    const value = this.title.current?.value;
    const error = value?.length !== 0 ? true : false;
    this.setState({ title: error });
    return error;
  }

  validateDescription() {
    const value = this.description.current?.value;
    const error = value?.length !== 0 ? true : false;
    this.setState({ description: error });
    return error;
  }

  validateDeliveryTime() {
    const value = this.deliveryTime.current?.value;
    const  date=new Date()
    console.log(date.toLocaleDateString())
    console.log(value)
    const error = value?.length !== 0 ? true : false;
    this.setState({ deliveryTime: error });
    return error;
  }
  validatePrive() {
    const value = this.price.current?.value;
    const error = value?.length !== 0&&Number(value)>0 ? true : false;
    this.setState({ price: error });
    return error;
  }

  validateCheck() {
    const value = this.checkbox.current?.checked;
    const error = value ? true : false;
    this.setState({ checkbox: error });
    return error;
  }
  validateRadio() {
    const value1 = this.radio1.current?.checked;
    const value2 = this.radio2.current?.checked;
    let error = false;
    if (value1 || value2) {
      error = true;
    }
    this.setState({ radio: error });
    return error;
  }

  addCard(card: CardType) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
  }

  allValid() {
    const validTitle = this.validateTitle();
    const valideDsecription = this.validateDescription();
    const valideDeliveryTime = this.validateDeliveryTime();
    const validePrice = this.validatePrive();
    const valideCheck = this.validateCheck();
    const valideRadio = this.validateRadio();
    if (
      validTitle &&
      valideDsecription &&
      valideDeliveryTime &&
      validePrice &&
      valideCheck &&
      valideRadio
    ) {
      this.setState({ form: true });
      return true;
    }
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = this.title.current?.value;
    const description = this.description.current?.value;
    const deliveryTime = this.deliveryTime.current?.value;
    const price = this.price.current?.value;
    const inputFile = this.inputFile?.current?.files![0]
      ? URL.createObjectURL(this.inputFile.current?.files[0])
      : "";
    const selection = this.selection.current?.value;
    const checkbox = this.checkbox.current?.value;

    if (this.allValid()) {
      this.setState({ validate: true });
      this.addCard({
        title,
        description,
        deliveryTime,
        price,
        inputFile,
        selection,
        checkbox,
      });
      this.form.current?.reset();
    }
  }

  render() {
    const arr = this.state.cards;
    const newCard = arr.map((el: CardType, index: number) => (
      <FormCard
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
    const res = arr.length > 0 ? newCard : "";

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className={classes.form}
          ref={this.form}
        >
          <InputComponent
            ref={this.title}
            error={this.state.title}
            type="text"
            text="Title"
          />
          <InputComponent
            ref={this.description}
            type="text"
            text="Description"
            error={this.state.description}
          />
          <InputComponent
            ref={this.deliveryTime}
            type="date"
            text="Receipt time"
            error={this.state.deliveryTime}
          />
          <SelectComponent ref={this.selection} />
          <InputComponent
            ref={this.price}
            type="number"
            text="Price"
            error={this.state.price}
          />
          <InputComponent
            ref={this.checkbox}
            type="checkbox"
            text="I consent to my personal data"
            error={this.state.checkbox}
          />
          <InputRadioComponent
            radio1={this.radio1}
            radio2={this.radio2}
            error={this.state.radio}
          />
          <InputFileComponent ref={this.inputFile} />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        <div className={classes.cardContainer}>{res}</div>
      </div>
    );
  }
}
export default MyForm;
