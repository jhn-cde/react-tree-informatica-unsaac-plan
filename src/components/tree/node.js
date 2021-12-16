import React from "react"

import './node.css'

function Nodo ({ nodeDatum, toggleNode}) {
  // circle radio
  const radio = ".8em";

  // node attributes
  const attributes = (att) => {
    var s = "";
    s += att.title? att.title:"";
    s += att.creditos? "\nCreditos: "+ att.creditos:"";
    s += att.requisitos? "\nRequisito: "+(att.requisitos!=""?att.requisitos:"_"):"";
    return s;
  }
  // circle classname
  const classCircle = (nodo) => {
    var s = "circle node_" + nodo.attributes.categoria;
    s += (nodo.children?" father":" leaf");
    return s;
  }

  return (
    <g>
      <circle className={classCircle(nodeDatum)} cx="0" cy={radio} r={radio} aria-labelledby="mobileSupport" onClick={toggleNode} />
      <text fill="#fff" strokeWidth="0" x={radio} y="0" onClick={toggleNode} >
        {nodeDatum.name}
      </text>
      <title id="mobileSupport">
        {attributes(nodeDatum.attributes)}
      </title>
    </g>
  )
}

export default Nodo;