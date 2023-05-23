import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

let array =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".split(
    " "
  );

let vocales = {
  A: true,
  a: true,
  e: true,
  E: true,
  I: true,
  i: true,
  O: true,
  o: true,
  U: true,
  u: true,
};

function App() {
  let counter = 0;

  const [words, setWords] = useState([]);

  useEffect(() => {
    array.forEach((element) => {
      element.split("").forEach((item) => {
        if (vocales[`${item}`]) {
          counter = counter + 1;
        }
      });

      if (counter > 1) {
        console.log(words.concat(element));
        setWords((prevState) => [...prevState, element]);
      }

      counter = 0;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {words.map((word) => <p>{word}</p>)}
        </a>
      </header>
    </div>
  );
}

export default App;
