import { style } from "d3";
import { Component } from "react";

const styles = {
  fondo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "1px",
    height: "1px",
  },
  card: {
    margin: "0px",
    marginRight: "auto",
    width: "8em",
    boxShadow: "4px 4px 15px rgba(24, 24, 24, 0.5)",
    height: "auto",
    borderRadius: "5px",
    backdropFilter: "blur(1px)",
    backgroundColor: "rgba(130, 130, 130, 0.8)",
    padding: "1px 15px",
    textAlign: "left",
    fontSize: "1em",
  }
}

class Card extends Component{
  render() {
    const {position} = this.props
    return (
      <div style={{...styles.fondo, ...position}}>
        <div style={styles.card} {...this.props}></div>
      </div>
    )
  }
}

export default Card;