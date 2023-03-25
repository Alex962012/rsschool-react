import React from "react";
import InputComponent from "./formComponent/InputComponent";
import classes from "./MyForm.module.css";
import InputFileComponent from "./formComponent/InputFileComponent";
import SelectComponent from "./formComponent/SelectComponent";
type PropsType = {
  addCard: (card: any) => void;
};

class MyForm extends React.Component<PropsType> {
  title: React.RefObject<HTMLInputElement> = React.createRef();
  description: React.RefObject<HTMLInputElement> = React.createRef();
  deliveryTime: React.RefObject<HTMLInputElement> = React.createRef();
  price: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  selection: React.RefObject<HTMLSelectElement> = React.createRef();
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  constructor(props: PropsType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = this.title.current?.value;
    const description = this.description.current?.value;
    const deliveryTime = this.deliveryTime.current?.value;
    const price = this.price.current?.value;
    const inputFile = this.inputFile?.current?.files
      ? URL.createObjectURL(this.inputFile.current?.files[0])
      : "";
    const selection = this.selection.current?.value;

    this.props.addCard({
      title,
      description,
      deliveryTime,
      price,
      inputFile,
      selection,
    });
    this.formRef.current?.reset();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={classes.form}
        ref={this.formRef}
      >
        <InputComponent ref={this.title} type="text" text="Title" />
        <InputComponent ref={this.description} type="text" text="Description" />
        <InputComponent
          ref={this.deliveryTime}
          type="date"
          text="Receipt time"
        />
       <SelectComponent ref={this.selection} />
        <InputComponent ref={this.price} type="number" text="Price" />
        <InputFileComponent ref={this.inputFile} />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default MyForm;
