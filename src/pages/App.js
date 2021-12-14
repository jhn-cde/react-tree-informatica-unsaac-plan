import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ingeniería Informática y de Sistemas -
          Plan de Estudio
        </p>
      </header>
      <div className='App-main'>
        <aside className='App-aside'>
          <p>info here</p>
        </aside>
        <section className='App-section'>
          <p>section</p>
        </section>
      </div>
      <footer className='App-footer'>
        <p>jhn-cde |&nbsp;
          <a
            className="App-link"
            href="https://github.com/jhn-cde"
            target="_blank"
            rel="noopener noreferrer"
          >
          github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
