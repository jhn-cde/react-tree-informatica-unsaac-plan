import React from "react"

import './node.css'

function Nodo ({ nodeDatum, toggleNode, onclick}) {
  // circle radio
  const radio = 0.8;

  // node attributes
  const attributes = (att) => {
    var s = "";
    s += att.title? att.title:"";
    s += att.creditos? "\nCreditos: "+ att.creditos:"";
    s += att.requisitos? "\nRequisito: "+(att.requisitos>""?att.requisitos:"_"):"";
    return s;
  }
  // circle classname
  const classCircle = (nodo) => {
    var s = "circle node_" + nodo.attributes.categoria;
    s += (nodo.children?" father":" leaf");
    return s;
  }
  // 
  const nodoTitle = () => {
    var s = "";
    if(nodeDatum.attributes.title){
      var title = nodeDatum.attributes.title;
      if(title === "Ingeniería Informática y de Sistemas"){
        s = title
      }
      else{
        s += title.substring(0,11);
        s += title.substring(11)?"...":""
      }
    }
    return s
  }

  return (
    <g>
      <circle className={classCircle(nodeDatum)} cx="0" cy={radio.toString()+"em"} r={radio.toString()+"em"} aria-labelledby="mobileSupport" onClick={toggleNode} />
      <text fill="black" fontSize={"smaller"} stroke="black" strokeWidth={"1"} x={(radio+0.5).toString()+"em"} y="0" onClick={onclick} >
        {nodeDatum.name}
      </text>
      <text fill="black" fontSize={"smaller"} stroke="#777" strokeWidth={"1"} x={(radio+0.5).toString()+"em"} y={(radio+0.2).toString()+"em"} onClick={toggleNode} >
        <tspan>{nodoTitle(nodeDatum)}</tspan>
      </text>
      <title id="mobileSupport">
        {attributes(nodeDatum.attributes)}
      </title>
    </g>
  )
}

export default Nodo;