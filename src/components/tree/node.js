import React from "react"

const Nodo = ({ nodeDatum, toggleNode}) => (
  <g>
    <circle cx="0" cy="10" r="10" aria-labelledby="mobileSupport" onClick={toggleNode} />
    <text fill="black" strokeWidth="1" x="10" y="0" onClick={toggleNode} >
      {nodeDatum.name}
    </text>
    <title id="mobileSupport">
      {nodeDatum.attributes.title + "\n" + nodeDatum.attributes.creditos + " creditos\n" + nodeDatum.attributes.categoria}
    </title>
  </g>
);

export default Nodo;