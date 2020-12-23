// import logo from "./logo.svg";
import { ReactComponent as Logo } from "./logo.svg";
import Button from "./components/Button/Button";
import "./App.scss";

function App() {
  //fetching module on click
  const fetchChunkedModule = () => {
    import("./modules/moduleA")
      .then(({ moduleA }) => {
        console.log(moduleA);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button handleClick={fetchChunkedModule} text="fetch module" />
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
      <div>
        <p>You running the app in {process.env.NODE_ENV} mode</p>
        <form>
          <input
            type="text"
            defaultValue={process.env.REACT_APP_NOT_SECRET_CODE}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
