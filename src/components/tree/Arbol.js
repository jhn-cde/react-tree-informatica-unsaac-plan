import { Component } from "react";
import TreeChart from 'react-d3-tree'

import './Arbol.css'

class Arbol extends Component{
  state = {};
  Offset = 80;

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: this.Offset
      },
      nroCreditos: 0
    });
  }

  componentDidUpdate(){
    // colorear nodos
    const nodos = document.getElementsByClassName('nodo')
    
    var TotalCreditos = 0
    for(let nodo of nodos){
      const text = nodo.children[1].children[1].innerHTML.toString()

      // creditos
      if(text.indexOf('creditos: ') != -1 && nodo.classList.contains('blue')){
        const indexCreditos = text.indexOf('creditos: ') + ('creditos: ').length
        const finCreditos = text.indexOf('<', indexCreditos)
        const creditos = parseInt(text.substring(indexCreditos, finCreditos))
        TotalCreditos += creditos
      }

      // categoria
      if(text.indexOf('categoria: ') != -1){
        const indexCategoria = text.indexOf('categoria: ') + ('categoria: ').length
        const finCategoria = text.indexOf('<', indexCategoria)
        const categoria = text.substring(indexCategoria, finCategoria)
        
        if(nodo.classList.contains('blue')){
          nodo.classList.remove(categoria)
        } else{
          nodo.classList.add(categoria)
        }
      }
    }
    console.log(TotalCreditos)
  }

  onNodeClick = (node, evt) => {
    var rd3t_id = node.data.__rd3t.id
    var creditos = node.data.attributes.creditos
    creditos = creditos ? creditos : 0

    const g_rd3t = document.getElementById(rd3t_id)
    if (g_rd3t.classList.contains('blue')) {
      g_rd3t.classList.remove('blue')
    } else {
      g_rd3t.classList.add('blue')
    }

    this.setState({
      nroCreditos: creditos
    })
  }

  onNodeMouseOver = (node, event) => {
    //console.log(node)
  }

  render(){
    return(
      <div id="treeWrapper" style={{width:'100%', height:'100%'}} ref={(tc) => (this.treeContainer = tc)}>
        <TreeChart
          data={this.props.data}
          translate={this.state.translate}
          onNodeClick={this.onNodeClick}
          onNodeMouseOver={this.onNodeMouseOver}
          leafNodeClassName={"nodo nodoHoja"}
          rootNodeClassName={"nodo nodoPadre"}
          branchNodeClassName={"nodo nodoRama"}
          initialDepth={0}
          orientation="vertical"
        />
      </div>
    )
  }
}

export default Arbol