import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    if (this.props.open) {
      return (
        <div className="card"
             onClick={() => this.props.onClick()}>
        open card
        </div>
      )
    }
  
    return (
      <div className="card"
           onClick={() => this.props.onClick()}>
        closed card
      </div>
    )
  }
}

export default Card;
