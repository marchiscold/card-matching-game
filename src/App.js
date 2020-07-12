import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'

class App extends React.Component {
  constructor (props) {
    super(props)
    const CARDS_AMOUNT = 4;
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      cards: cards,
      openCardsIds: [],
      matched: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  generateCards (cardAmount) {
    let cards = [];
    let colors = ['', 'rebeccapurple', 'goldenrod', 'palegreen', 'lightcoral'];
    for (let i = 1; i < cardAmount + 1; i++) {
      let card = {
        isOpen: false,
        isMatched: false,
        color: colors[i],
        id: i,
      };
      cards.push(card);
      cards.push({...card, ...{id: -i}});
    }
    
    return cards;
  }

  shuffle(list) {
    return list;
  } 
  
  handleClick(cardNum) {
    let newCards = [...this.state.cards];
    let openCardsIds = this.state.openCardsIds;

    if (!newCards[cardNum].isOpen) {
      newCards[cardNum].isOpen = true;
      openCardsIds.push(newCards[cardNum].id);
    }

    if (openCardsIds.length > 2) {
      let firstTwoIds = openCardsIds.slice(0, 2);
      newCards = newCards.map(card => {
        if (firstTwoIds.includes(card.id)) {
          card.isOpen = false;
          return card;
        }
        return card;
      });
      openCardsIds = openCardsIds.slice(2);
    }

    this.setState({
      cards: newCards,
      openCardsIds: openCardsIds,
    });
  }

  render() {
    let cardList = this.state.cards.map((card, index) => {
      return <Card key={index} 
                   id={index} 
                   open={card.isOpen} 
                   color={card.color}
                   onClick={this.handleClick}/>;
    });

    return (
      <div className='board'>
        {cardList}
      </div>
    );
  }
}

export default App;
