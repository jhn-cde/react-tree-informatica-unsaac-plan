// componentes
import Aside from './aside'
import Section from './section'

function Main({initialData}) {
    return (
        <div className='App-main' style={styles}>
          <Section initialData={initialData}/>
        </div>
    );
}
const styles = {
    //backgroundColor: "#060a12",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "calc(4px + 2vmin)",
    color: "#060a12",
    width: "auto",
    minHeight: "85vh",
    marginTop: "10vh"
}
  
export default Main;
  