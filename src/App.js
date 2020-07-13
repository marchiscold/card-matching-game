import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import MatchedCards from './MatchedCards';
import Timer from './Timer';

class App extends React.Component {
  constructor (props) {
    super(props)
    const CARDS_AMOUNT = 4;
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      cards: cards,
      openCards: [],
      matched: 0,
      timer: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({timer: state.timer + 1}))
    }, 1000);
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
    let openCards = this.state.openCards;
    let matchedCards = this.state.matched;

    if (!newCards[cardNum].isOpen) {
      newCards[cardNum].isOpen = true;
      openCards.push(newCards[cardNum]);
    }

    if (openCards.length == 2 && openCards[0].color == openCards[1].color) {
      newCards.map(card => {
        if (card.color == openCards[0].color) {
          card.isMatched = true;
        }
      });
      matchedCards += 2;
    }

    if (openCards.length > 2) {
      let firstTwoIds = openCards.slice(0, 2).map(card => card.id);
      newCards = newCards.map(card => {
        if (firstTwoIds.includes(card.id) && !card.isMatched) {
          card.isOpen = false;
          return card;
        }
        return card;
      });
      openCards = openCards.slice(2);
    }

    this.setState({
      cards: newCards,
      openCards: openCards,
      matched: matchedCards,
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
      <React.Fragment>
        <div className="wrapper">
          <div className="game-wrapper">
            <div className="info">
              <MatchedCards
                matched={this.state.matched}
                total={this.state.cards.length}
              />
              <Timer seconds={this.state.timer} />
            </div>
            <div className="board">{cardList}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
