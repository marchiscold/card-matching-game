import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: this.props.open
    }
  }
  
  handleClick () {
    console.log('clicked');
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    if (this.state.open) {
      return (
        <div className="card"
             onClick={() => this.handleClick()}>
        open card
        </div>
      )
    }
  
    return (
      <div className="card"
           onClick={() => this.handleClick()}>
        closed card
      </div>
    )
  }
}

export default Card;
