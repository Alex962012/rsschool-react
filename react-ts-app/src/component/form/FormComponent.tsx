import React from "react";
import MyForm from "./MyForm";
import Cards from "./Cards";
import { CardType } from "./FormCard";
class FormComponent extends React.Component {

      constructor(props:{}){
        super(props)
        this.state = { cards: [] };
    }

      addCard(card:CardType) {
    
        this.setState((prevState:any) => ({
          cards: [...prevState.cards, card]
          
        }));
      }


    render() {
        return (
          <>
          <MyForm addCard={(card: CardType) => this.addCard(card)}></MyForm>
          <Cards {...this.state}></Cards>
          </>
          );
    }
  }
  
  export default FormComponent;