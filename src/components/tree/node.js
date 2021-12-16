import React from "react"

import './node.css'

function Nodo ({ nodeDatum, toggleNode}) {
  const aria_label = (atributos) =>{
    var s = "";
    s += atributos.title? atributos.title:"";
    s += atributos.creditos? "\nCreditos: "+atributos.creditos:"";
    s += atributos.requisitos? "\nRequisito: "+(atributos.requisitos!=""?atributos.requisitos:"_"):"";
    return s;
  }
  return (
    <g>
      <circle className={"node_"+nodeDatum.attributes.categoria + (nodeDatum.children?" father":" leaf")} cx="0" cy="10" r="10" aria-labelledby="mobileSupport" onClick={toggleNode} />
      <text fill="#fff" strokeWidth="0" x="10" y="0" onClick={toggleNode} >
        {nodeDatum.name}
      </text>
      <title id="mobileSupport">
        {aria_label(nodeDatum.attributes)}
      </title>
    </g>
  )
}

export default Nodo;