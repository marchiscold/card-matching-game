import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import GameStart from './GameStart';
import GameEnd from './GameEnd';

const CARDS_AMOUNT = 4;

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleGridChange = this.handleGridChange.bind(this);

    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      gameState: 'START_SCREEN',
      cards: cards,
      timer: 0,
      isBlocked: false,
      mode: 'bugs',
      grid: [2, 4],
      startScreenFadeOut: false,
      startScreenFadeIn: false,
      gameScreenFadeOut: false,
      endScreenFadeOut: false,
    };
  }

  resetGameState() {
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.setState({
      gameState: 'START_SCREEN',
      cards: cards,
      timer: 0,
      isBlocked: false,
    });
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
    let tempList = [...list];
    //TODO for testing
    return tempList;

    for (let i = tempList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempList[i], tempList[j]] = [tempList[j], tempList[i]];
    }

    // return tempList;
  } 
  
  handleCardClick(cardNum) {
    if (this.state.isBlocked) {
      return;
    }

    let cards = JSON.parse(JSON.stringify(this.state.cards));
    cards[cardNum].isOpen = true;
    let openCards = cards.filter(card => card.isOpen && !card.isMatched);

    if (openCards.length == 2 && openCards[0].color == openCards[1].color) {
      openCards.forEach((card) => {
        card.isMatched = true;
      })
    } else if (openCards.length == 2) {
      setTimeout(() => {
        this.closeOpenCards();
        this.setState({
          isBlocked: false
        });
      }, 550);

      this.setState({
        isBlocked: true,
        cards: cards,
      });
      return;
    } 

    let matchedCardsAmount = cards.reduce((matched, card) => {
      return card.isMatched ? matched + 1 : matched;
    }, 0);
    if (matchedCardsAmount == cards.length) {
      setTimeout(() => {
        this.setState({
          gameScreenFadeOut: true
        });
      }, 800);
      setTimeout(() => {
        this.setState({
          gameState: 'GAME_OVER_SCREEN',
          gameScreenFadeOut: false
        });
      }, 1000);
      this.setState({
        cards: cards
      });
      clearInterval(this.timerId);
      return;
    }

    this.setState({
      cards: cards,
    });
  }

  closeOpenCards() {
    let cards = [...this.state.cards];
    cards = cards.map((card) => {
      card.isOpen = false;
      return card;
    })
  }

  handleGameStart() {
    this.setState({
      startScreenFadeOut: true
    });
    setTimeout(() => {
      this.setState({
        gameState: 'GAME_SCREEN',
        startScreenFadeOut: false
      });
    }, 200)

    this.timerId = setInterval(() => {
      this.setState((state) => ({timer: state.timer + 1}))
    }, 1000);
  }

  handleStartOver() {
    this.setState({
      endScreenFadeOut: true
    });
    setTimeout(() => {
      this.resetGameState();
      this.setState({
        endScreenFadeOut: false,
        startScreenFadeIn: true
      });
    }, 200);
  }

  handleModeChange(mode) {
    this.setState({
      mode: mode
    });
  }

  handleGridChange(gridType) {
    this.setState({
      grid: gridType.split('x')
    });
  }

  render() {
    let screen;
    switch(this.state.gameState) {
      case 'START_SCREEN':
        screen = (
          <GameStart
            onGameStart={this.handleGameStart}
            fadeout={this.state.startScreenFadeOut}
            fadein={this.state.startScreenFadeIn}
            mode={this.state.mode}
            onModeChange={this.handleModeChange}
            grid={this.state.grid}
            onGridChange={this.handleGridChange}
          />
        );
        break;
      case 'GAME_SCREEN':
        screen = (
          <GameBoard
            cards={this.state.cards}
            rows={2}
            timer={this.state.timer}
            onCardClick={this.handleCardClick}
            fadeout={this.state.gameScreenFadeOut}
          />
        );
        break;
      case 'GAME_OVER_SCREEN':
        screen = (
          <GameEnd
            onStartOver={this.handleStartOver}
            fadeout={this.state.endScreenFadeOut}
          />
        );
        break;
      default: 
        screen = <div>error screen</div>
    }

    return (
      <div className="wrapper">
        {screen}
      </div>
    );
  }
}

export default App;
