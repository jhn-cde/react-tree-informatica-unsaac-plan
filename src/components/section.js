import { Component } from 'react'

// componentes
import Arbol from './tree/Arbol'
import '../styles/general.css'

const styles = {
  section: {
    width: "100%",
    height: "80vh",
    padding: "0 20px"
  }
}

class Section extends Component{
  render() {
    const { initialData } = this.props
    return (
      <section className='App-section' style={styles.section}>
        <Arbol data = { initialData }/>
      </section>
    )
  }
}
export default Section;
  