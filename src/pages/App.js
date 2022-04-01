import { Component } from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

import * as myData from '../utils/tree_plan_de_estudios.json'

import '../styles/App.css';

class App extends Component{
  state = {
    data: myData.default
  }
  render() {
    const { data } = this.state
    return (
      <div className="App">
        <Header/>
        <Main initialData={data}/>
        <Footer/>
      </div>
    )
  }
}
/*
import React, {useState} from 'react'
// componentes
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

import * as myData from '../utils/tree_plan_de_estudios.json'

import '../styles/App.css';

/*
function App() {
  const [data, setData] = useState(myData.default);
  return (
    <div className="App">
      <Header/>
      <Main initialData={data}/>
      <Footer/>
    </div>
  );
}*/

export default App;
