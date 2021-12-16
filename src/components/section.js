import React, {useState} from 'react';
import '../styles/general.css'

// componentes
import TreeChart from './tree/treechart'

function Section({initialData}) {
    const [data, setData] = useState(initialData);

    return (
        <section className='App-section' style={styles}>
            <TreeChart data = {data}/>
        </section>
    );
}
const styles = {
    width: "100%",
    padding: "0 20px"
}
  
export default Section;
  