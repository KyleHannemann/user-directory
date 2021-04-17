import React, {Component} from 'react';

export default class DisplayCard extends Component{
    render(){
        let size = this.props.length;
        let fullName = `${this.props.card.name.first} ${this.props.card.name.last}`;
        let from = `${this.props.card.city}, ${this.props.card.country}`;
        let jobTitle = `${this.props.card.title}`;
        let employer = `${this.props.card.employer}`;
        let favoriteMovies1  =`${this.props.card.favoriteMovies[0]}`;
        let favoriteMovies2  =`${this.props.card.favoriteMovies[1]}`;
        let favoriteMovies3  =`${this.props.card.favoriteMovies[2]}`;
        let cardId = `${this.props.card.id}/${size}`;
        
        return (<div id="cardContainer">
            <div id="name">{fullName}</div>
            <aside id="id">{cardId}</aside>
            <div className="info">From:<span>{from}</span></div>
            <div className="info">Job Title:<span>{jobTitle}</span></div>
            <div className="info">Employer:<span>{employer}</span></div>
            <div id="movies">Favorite Movies:<ol>
                <li>{favoriteMovies1}</li>
                <li>{favoriteMovies2}</li>
                <li>{favoriteMovies3}</li>
                </ol></div>
        </div>)
    }

}