import React from "react";
import classes from "./MyForm.module.css";
type PropsType = {
  addCard: (card: any) => void;
};

class MyForm extends React.Component<PropsType> {
  [x: string]: any;
  constructor(props: PropsType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef();
    this.description = React.createRef();
    this.deliveryTime = React.createRef();
    this.price = React.createRef();
  }

  handleSubmit(event: React.FormEvent) {
    this.props.addCard({
      title: this.title.current.value,
      description: this.description.current.value,
      deliveryTime:this.deliveryTime.current.value,
      price:this.price.current.value,
    });
    event.preventDefault();
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
          Delivery time
          <input type="date" ref={this.deliveryTime} />
        </label>
        <label>
          Category
          <select id="category-select">
            <option value="cloth">cloth</option>
            <option value="electronics">electronics</option>
            <option value="decorations">decorations</option>
          </select>
        </label>
        <label>
          Price
          <input type="number" ref={this.price} />
        </label>
        <label>Image:</label>
        <input
          type="file"
          accept="image/jpeg,image/png,image/gif"
          id="image-input"
        ></input>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default MyForm;
