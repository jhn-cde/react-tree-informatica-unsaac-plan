import React, {useState} from 'react'
// componentes
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

import * as myData from '../utils/tree_plan_de_estudios.json'

import '../styles/App.css';

function App() {
  const [data, setData] = useState(myData.default);
  return (
    <div className="App">
      <Header/>
      <Main initialData={data}/>
      <Footer/>
    </div>
  );
}

export default App;
