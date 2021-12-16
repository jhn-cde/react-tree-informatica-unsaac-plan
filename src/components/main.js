// componentes
import Aside from './aside'
import Section from './section'
import Card from './card/card'

function Main({initialData}) {
    return (
        <div className='App-main' style={styles}>
          <Card estilos={{position:"fixed", top:"11vh", left:"1vh"}}/>
          <Section initialData={initialData}/>
        </div>
    );
}
const styles = {
    backgroundColor: "#060a12",
    //backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "calc(4px + 2vmin)",
    //color: "#060a12",
    color: "#fff",
    width: "auto",
    maxHeight: "85vh",
    marginTop: "10vh"
}
  
export default Main;
  