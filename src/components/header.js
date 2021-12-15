function Header() {
    return (
        <header className="App-header" style={styles}>
          <p>
            Ingeniería Informática y de Sistemas -
            Plan de Estudio
          </p>
        </header>
    );
  }

const styles = {
    backgroundColor: "#282c34",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(4px + 2vmin)",
    color: "white",
    width: "100%",
    position: "fixed",
    top: "0",
    height: "10vh",
}
  
export default Header;
  