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
  
export default Main;
  