import { style } from 'd3';
import { Component } from 'react'

const styles = {
    header: {
      backgroundColor: "#060C2D",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(4px + 2vmin)",
      color: "white",
      width: "100%",
      height: "10vh",
    },
    title: {
      fontSize: "1.1em"
    }
}

class Header extends Component{
  render() {
    return (
      <header className="App-header" style={styles.header}>
        <h1 style={styles.title}>
          Ingeniería Informática y de Sistemas -
          Plan de Estudio
        </h1>
      </header>
    )
  }
}

/*
function Header() {
    return (
        <header className="App-header" style={styles}>
          <h1 style={h1st}>
            Ingeniería Informática y de Sistemas -
            Plan de Estudio
          </h1>
        </header>
    );
  }
const h1st = {
  fontSize: "1.1em"
}
const styles = {
    backgroundColor: "#060C2D",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(4px + 2vmin)",
    color: "white",
    width: "100%",
    height: "10vh",
}
  */
export default Header;
  