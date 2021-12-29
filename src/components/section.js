import React, {useState} from 'react';
import '../styles/general.css'

// componentes
import Arbol from './tree/Arbol'

function Section({initialData}) {
    const [data, setData] = useState(initialData);

    return (
        <section className='App-section' style={styles}>
            <Arbol data = {data}/>
        </section>
    );
}
const styles = {
    width: "100%",
    height: "80vh",
    padding: "0 20px"
}
  
export default Section;
  