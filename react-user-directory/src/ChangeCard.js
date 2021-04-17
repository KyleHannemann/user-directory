import React, {Component} from 'react'
import EditCard from './EditCard';

export default class ChangeCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            card:this.props.card
        }
        this.editCard = this.editCard.bind(this);
    }
    editCard(){
        let x = document.getElementById('edit');
        x.classList.remove('edit');
        x.classList.add('startEdit')
        this.setState({card:this.props.card})
      }
    render(){
        console.log(this.props.card)
        return(<div className="buttonsContainer">
            <EditCard updateCard={this.props.updateCard} card={this.state.card}/>
            <button onClick={this.props.changeCard}  value="prev"className="arrow">&#8647;Prev</button>
        <span className="otherButtonsContainer">
        <button onClick={this.editCard} >Edit</button>
        <button onClick={this.props.deleteCard}>Delete</button>
        <button onClick={this.props.newCard}>New</button>
        </span>
        <button onClick={this.props.changeCard} value="next"className="arrow"id="rightArr">Next&#8649;</button>
        </div>)
    }

}