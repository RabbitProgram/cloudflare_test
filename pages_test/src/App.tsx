import "./App.css";
import jobProgrammer from "./job_programmer.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={jobProgrammer}
          alt="jobProgrammer"
          style={{ width: "20vw" }}
        />
        <p>
          Cloudflare Pages のテストページです
          <br />
          リポジトリは
          <a
            className="App-link"
            href="https://github.com/RabbitProgram/cloudflare_test/tree/main/pages_test"
          >
            こちら
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
