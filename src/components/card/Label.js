import { Component } from 'react'

const styles = {
  title : {
    textAlign: "center",
    marginTop: "8px",
    textDecorationLine: "none",
  },
  eg: { color: "darkviolet" },
  oe: { color: "green" },
  ee: { color: "maroon" },
  ec: { color: "olive" },
  pp: { color: "lightseagreen"},
  cu: { color: "#555555" },
  un: { color: "blue" },
}

class Label extends Component{
  render() {
    return (
        <div>
          <p style={styles.title}>Leyenda</p>
          <p>
            <b style={styles.eg}>&#9679;</b> Categoría EG<br/>
            <b style={styles.oe}>&#9679;</b> Categoría OE<br/>
            <b style={styles.ee}>&#9679;</b> Categoría EE<br/>
            <b style={styles.ec}>&#9679;</b> Categoría EC<br/>
            <b style={styles.pp}>&#9679;</b> Categoría PP<br/>
            <b style={styles.cu}>&#9679;</b> Cursado<br/>
            <b style={styles.un}>&#9679;</b> Sin categoria
          </p>
        </div>
    )
  }
}

export default Label;