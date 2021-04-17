import React, {Component} from 'react';

export default class EditCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.card.id,
            title: this.props.card.title,
            employer: this.props.card.employer,
            favoriteMovies: [this.props.card.favoriteMovies[0], this.props.card.favoriteMovies[1], this.props.card.favoriteMovies[2]],
        }
        this.updateCard = this.updateCard.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
      


    }
    closeEdit(){
        let x = document.getElementById('edit');
        x.classList.remove('startEdit');
        x.classList.add('edit')
       
    }
    updateCard(e){
        this.setState({
            
                id: this.props.card.id,
                title: this.props.card.title,
                employer: this.props.card.employer,
                favoriteMovies: [this.props.card.favoriteMovies[0], this.props.card.favoriteMovies[1], this.props.card.favoriteMovies[2]],
            

        })
        console.log(this.state)
        let update = {};
        if(e.target.dataset.id === '1' || e.target.dataset.id === '2' || e.target.dataset.id === '3'){
            let movies = this.props.card.favoriteMovies;
            movies[parseInt(e.target.dataset.id) - 1] = e.target.value;
            this.setState({
                favoriteMovies: movies
            })
        }
        update[e.target.dataset.id] = e.target.value;
        this.setState(update)
        
    }
    
    render(){
        let fullName = `${this.props.card.name.first} ${this.props.card.name.last}`;
        let from = `${this.props.card.city}, ${this.props.card.country}`;
        let jobTitle = `${this.props.card.title}`;
        let employer = `${this.props.card.employer}`;
        let favoriteMovies1  =`${this.props.card.favoriteMovies[0]}`;
        let favoriteMovies2  =`${this.props.card.favoriteMovies[1]}`;
        let favoriteMovies3  =`${this.props.card.favoriteMovies[2]}`;
        console.log(this.props.card)
        console.log(this.state)
        return (<div id="edit" className='edit'>
            <button onClick={this.closeEdit} id="closeEdit">X</button>
            <div id="editTitle">Edit Card</div>
            <div id="name">{fullName}</div>
            
            
            <div className="info">From:<span>{from}</span></div>
            <div className="info">Job Title:<input onChange={this.updateCard} data-id="title" placeholder={jobTitle}/></div>
            <div className="info">Employer:<input data-id="employer" onChange={this.updateCard} placeholder={employer}/></div>
            <div id="movies">Favorite Movies:<ol>
                <li><input onChange={this.updateCard} data-id="1" placeholder={favoriteMovies1}/></li>
                <li><input onChange={this.updateCard} data-id="2" placeholder={favoriteMovies2}/></li>
                <li><input onChange={this.updateCard} data-id="3" placeholder={favoriteMovies3}/></li>
                </ol></div>
                <button onClick={()=>this.props.updateCard(this.state)} id="submitForm">Submit</button>
                
        </div>)
    }
}