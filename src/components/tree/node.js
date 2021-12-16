import React from "react"

import './node.css'

function Nodo ({ nodeDatum, toggleNode}) {
  return (
    <g>
      <circle className={"node_"+nodeDatum.attributes.categoria} cx="0" cy="10" r="10" aria-labelledby="mobileSupport" onClick={toggleNode} />
      <text fill="black" strokeWidth="1" x="10" y="0" onClick={toggleNode} >
        {nodeDatum.name}
      </text>
      <title id="mobileSupport">
        {nodeDatum.attributes.title + "\n" + nodeDatum.attributes.creditos + " creditos\n" + nodeDatum.attributes.categoria}
      </title>
    </g>
  )
}

export default Nodo;