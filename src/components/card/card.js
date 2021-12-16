import React from "react";

import './card.css'

function Card({estilos}) {
    return (
        <div className="background" style={estilos}>
            <div className="Card">
                <p className="title">Leyenda</p>
                <p>
                    <b className="EG">&#9899;</b> Categoría EG<br/>
                    <b className="OE">&#9899;</b> Categoría OE<br/>
                    <b className="EE">&#9899;</b> Categoría EE<br/>
                    <b className="EC">&#9899;</b> Categoría EC<br/>
                    <b className="PP">&#9899;</b> Categoría PP<br/>
                    <b className="CU">&#9899;</b> Cursado<br/>
                    <b className="UN">&#9899;</b> Sin categoria
                </p>
            </div>
        </div>
    )
}
export default Card;