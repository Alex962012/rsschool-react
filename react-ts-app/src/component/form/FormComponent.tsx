import React from "react";
import CardForm from "../headerCard/CardForm";
import MyForm from "./MyForm";
import Cards from "./Cards";
class FormComponent extends React.Component {

      constructor(props:any){
        super(props)
        this.state = { cards: [] };
    }

      addCard(card:any) {
        this.setState((prevState:any) => ({
          cards: [...prevState.cards, card]
        }));
      }


    render() {
        return (
          <>
          <MyForm addCard={(card: any) => this.addCard(card)}></MyForm>
          <Cards {...this.state}></Cards>
          </>
          );
    }
  }
  
  export default FormComponent;