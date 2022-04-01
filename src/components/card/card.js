import { Component } from 'react'

import './card.css'

class Card extends Component{
  render() {
    const { estilos } = this.props
    return (
      <div className="background" style={estilos}>
        <div className="Card">
          <p className="title">Leyenda</p>
          <p>
            <b className="circle EG">&#9679;</b> Categoría EG<br/>
            <b className="circle OE">&#9679;</b> Categoría OE<br/>
            <b className="circle EE">&#9679;</b> Categoría EE<br/>
            <b className="circle EC">&#9679;</b> Categoría EC<br/>
            <b className="circle PP">&#9679;</b> Categoría PP<br/>
            <b className="circle CU">&#9679;</b> Cursado<br/>
            <b className="circle UN">&#9679;</b> Sin categoria
          </p>
        </div>
      </div>
    )
  }
}

export default Card;