import React from "react"
import Card from "../form/Card"

type MyProps={
    card:Array<any>
}
type MyState = { value: string };
class Cards extends React.Component<any,any>{
    constructor(props:MyProps){
        super(props)

  
    }

  

    render(){
        const arr=this.props.cards
        console.log(arr)
        const newCard=arr.map((el:any)=><Card/>)
        if(arr.length>0){
            return(
            
                <div>{newCard}</div>
            )
        }
       
    }
}
 export default Cards