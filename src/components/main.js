// componentes
import { Component } from 'react'

import Aside from './aside'
import Section from './section'
import Card from './card/card'

const styles = {
  main: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "calc(4px + 2vmin)",
    color: "#fff",
    width: "auto",
    height: "85vh",
  }
}

class Main extends Component{
  render() {
      const { initialData } = this.props
    return (
      <div className='App-main' style={styles.main}>
        <Card estilos={{position:"fixed", top:"11vh", left:"1vh"}}/>
        <Section initialData={initialData}/>
      </div>
    )
  }
}
  
export default Main;
  