import React from "react";
import classes from "./MyForm.module.css";
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
  constructor(props: PropsType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.title = React.createRef<HTMLInputElement>();
    // this.description = React.createRef<HTMLInputElement>();
    // this.deliveryTime = React.createRef<HTMLInputElement>();
    // this.price = React.createRef<HTMLInputElement>();
    // this.inputFile = React.createRef<HTMLInputElement>();
    // this.selection=React.createRef<HTMLInputElement>()
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = this.title.current?.value;
    const description = this.description.current?.value;
    const deliveryTime = this.deliveryTime.current?.value;
    const price = this.price.current?.value;
    const inputFile = this.inputFile?.current?.files
    ? URL.createObjectURL(this.inputFile.current.files[0])
    : ''
    const selection = this.selection.current?.value;

    this.props.addCard({title,description,deliveryTime,price,inputFile,selection});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <label>Title</label>
        <input type="text" ref={this.title} />
        <label>
          Description
          <input type="text" ref={this.description} />
        </label>
        <label>
          Receipt time
          <input type="date" ref={this.deliveryTime} />
        </label>
        <label>
          Category
          <select id="category-select" ref={this.selection}>
            <option value="cloth">cloth</option>
            <option value="electronics">electronics</option>
            <option value="decorations">decorations</option>
          </select>
        </label>
        <label>
          Price
          <input type="number" ref={this.price} />
        </label>
        <label>
          Image:
          <input
            type="file"
            accept="image/jpeg,image/png,image/gif"
            ref={this.inputFile}
          />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default MyForm;
