import React from "react";
import classes from "./SearchBar.module.css";
type Props = {
  value?: string;
};

type State = {
  value?: string;
};

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem("value") || "",
    };
    this.changeInput = this.changeInput.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem("value", `${this.state.value}`);
  }
  changeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div className={classes.searchContainer}>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={this.state.value}
            onChange={this.changeInput}
            className={classes.input}
          />
          <button className={classes.button} type="submit">
            ss
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
