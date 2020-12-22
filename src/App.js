// import logo from "./logo.svg";
import { ReactComponent as Logo } from "./logo.svg";
import Button from "./components/Button/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo className="App-logo" title={"logo"} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Image form public folder</p>
        <img
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="logo from public"
        />
      </header>
    </div>
  );
}

export default App;
