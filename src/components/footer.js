import { Component } from 'react'

const styles = {
  footer: {
    backgroundColor: "#060C2D",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(4px + 2vmin)",
    color: "white",
    width: "100%",
    height: "5vh",
  }
}

class Footer extends Component{
  render() {
    return(
      <footer className='App-footer' style={styles}>
        <p>
          <a
            className="App-link"
            href="https://github.com/jhn-cde"
            target="_blank"
            rel="noopener noreferrer"
          >
          jhn-cde
          </a>&nbsp;|&nbsp;
          <a
            className="App-link"
            href="https://github.com/jhn-cde/react-tree-informatica-unsaac-plan"
            target="_blank"
            rel="noopener noreferrer"
          >
          github
          </a>&nbsp;|&nbsp;
          <a
            className="App-link"
            href="http://www.unsaac.edu.pe/"
            target="_blank"
            rel="noopener noreferrer"
          >
          unsaac
          </a>
        </p>
      </footer>
    )
  }
}

/*
import React from 'react';

function Footer() {
    return (
        <footer className='App-footer' style={styles}>
            <p>
                <a
                    className="App-link"
                    href="https://github.com/jhn-cde"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                jhn-cde
                </a>&nbsp;|&nbsp;
                <a
                    className="App-link"
                    href="https://github.com/jhn-cde/react-tree-informatica-unsaac-plan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                github
                </a>&nbsp;|&nbsp;
                <a
                    className="App-link"
                    href="http://www.unsaac.edu.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                unsaac
                </a>
            </p>
        </footer>
    );
}

*/
export default Footer;
  