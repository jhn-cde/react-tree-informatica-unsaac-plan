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
/*
import React, {useState} from 'react';

function Section({initialData}) {
    const [data, setData] = useState(initialData);

    return (
        <section className='App-section' style={styles}>
            <Arbol data = {data}/>
        </section>
    );
}
*/
export default Section;
  