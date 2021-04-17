import './App.css';
import React, {Component} from 'react';
import Data from './data';
import DisplayCard from './DisplayCard';
import ChangeCard from './ChangeCard';
//What I learned from this project: 
//Keep data neat and organized in a central location,
//transfer data to other components only when needed,
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: Data,
      displayedCardIndex: 0,
      }
    this.changeCard = this.changeCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.newCard = this.newCard.bind(this);
    this.showNewCard = this.showNewCard.bind(this);
    this.hideNewCard = this.hideNewCard.bind(this);
  }
  showNewCard(){
    let x = document.getElementById('newCard');
    x.style.display = "block";
  }
  hideNewCard(){
    let x = document.getElementById('newCard');
    x.style.display = "none";
  }
  newCard(e){
    e.preventDefault();
    let x = document.querySelectorAll("#newCard > input")
    let missingInput = false;
    for (var i = 0; i < x.length; i++){
        if (!x[i].value){
          
          x[i].style.border = '2px solid red';
          missingInput = true;
        }
        else{
          x[i].style.border = '2px solid black';
        }
    }
    if(missingInput === true){
      alert('please fill in all inputs');
      return;
    }
    let newCard = {
      id:this.state.data.length + 1,
      name:{first:x[0].value, last:x[1].value},
      city:x[2].value,
      country: x[3].value,
      employer:x[5].value,
      favoriteMovies:[x[6].value, x[7].value, x[8].value],
      title:x[4].value
    }
   //
    console.log(newCard)
    let cards = this.state.data;
    cards.push(newCard);
    this.setState({data:cards})
    console.log(this.state.data)
    let yy = document.getElementById('newCard');
    yy.style.display = "none";

  }
  updateCard(object){
    let cardToUpdate = this.state.data[this.state.displayedCardIndex];
    let updatedCard = Object.assign(cardToUpdate, object);
    let data = this.state.data;
    data.splice(this.state.displayedCardIndex, 1, updatedCard);
    this.setState({
      data: data
    })

    let x = document.getElementById('edit');
    x.classList.remove('startEdit');
    x.classList.add('edit')

  }
  
  deleteCard(){
      let allCards = this.state.data;
      let cardToDelete = this.state.displayedCardIndex;
      let newCards = allCards.filter(function(el, index){
        return index !== cardToDelete;
      })
      if (newCards.length === 0){
        alert('you must have at least 1 card')
        return;
      }
      let needNewId = newCards.slice(cardToDelete);
      let sameCardsIndex = newCards.slice(0, cardToDelete);
      let updatedCardIds = needNewId.map(function(el){
        el.id -= 1;
        return el;
      });
      let newUpdatedMaster = [...sameCardsIndex,...updatedCardIds];
      console.log(newUpdatedMaster)
      if (this.state.displayedCardIndex > 0){
      this.setState({displayedCardIndex: this.state.displayedCardIndex -1 })
      }
      this.setState({data:newUpdatedMaster})
  }
  changeCard(e){
    let currentCard = this.state.displayedCardIndex;
    let dir = e.target.value;
    if (dir === "next" && currentCard !== this.state.data.length -1){
      this.setState({displayedCardIndex: currentCard + 1})
    }
    if(dir === "prev" && currentCard !== 0){
      this.setState({displayedCardIndex: currentCard - 1})
    }
  }
  render(){
    console.log(this.state.data)
    return(<div>
      <DisplayCard card={this.state.data[this.state.displayedCardIndex]} length={this.state.data.length}/>
      <ChangeCard newCard={this.showNewCard} updateCard={this.updateCard} card={this.state.data[this.state.displayedCardIndex]} changeCard={this.changeCard} deleteCard={this.deleteCard}/>
      <form id="newCard">
        <button id="closeNewCard" onClick={this.hideNewCard}>X</button>
        <input placeholder="first name"data-id="firstName"/>
        <input placeholder="last name"data-id="lastName"/>
        <input placeholder="city" data-id="city"/>
        <input placeholder="country"data-id="country"/>
        <input placeholder="title"data-id="title"/>
        <input placeholder="employer" data-id="employer"/>
        <input placeholder="favorite movie 1" data-id="favMovie1"/>
        <input placeholder="favorite movie 2" data-id="favMovie2"/>
        <input placeholder="favorite movie 3" data-id="favMovie3"/>
        <button id="addNewCard"onClick={this.newCard}>Add</button>

      </form>
    </div>)
  }
}

export default App;
