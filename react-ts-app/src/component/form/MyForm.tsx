import React from "react";

type PropsType = {
    addCard:(card:any)=>void
  };

class MyForm extends React.Component<PropsType> {
  [x: string]: any;
  constructor(props: PropsType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.input2 = React.createRef();
    
  }

  handleSubmit(event: React.FormEvent) {

    this.props.addCard({name:this.input.current.value,surname:this.input2.current.value})
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
        </label>
        <input type="text" ref={this.input} />
        <label>
          Subname
          <input type="text" ref={this.input2} />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default MyForm