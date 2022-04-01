// componentes
import { Component } from 'react'

import Aside from './aside'
import Section from './section'
import Label from './card/Label'
import Card from './card/Card'

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
        <Card position={{position:"fixed", top:"11vh", left:"1vh"}}>
          <Label />
        </Card>
        <Section initialData={initialData}/>
      </div>
    )
  }
}
  
export default Main;
  