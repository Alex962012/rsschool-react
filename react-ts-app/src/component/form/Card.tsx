import React from "react";

type MyProps = {
  key: number;
  title: string;
  price: number;
  img: string;
};

class Card extends React.Component {
  render() {
    return (
      <div>
        <div></div>
        <div>description</div>
        <div> $</div>
        <div></div>
      </div>
    );
  }
}

export default Card;
