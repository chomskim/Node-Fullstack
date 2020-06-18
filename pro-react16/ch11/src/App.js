import React from 'react';
import ReactDOM from "react-dom";
import { Message } from "./Message";
import { Summary } from "./Summary";

let names = ["Bob", "Alice", "Dora"]
function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById('root'));
}

function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App />, document.getElementById('root'));
}

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Hello Adam
      </h1>
      <Message greeting="Hello" name="Bob" />
      <Message greeting="Hola" name={"Alice" + "Smith"} />
      <Message greeting="Hi there" name="Dora" />
      <table className="table table-sm table-striped">
        <thead>
          <tr><th>#</th><th>Name</th><th>Letters</th></tr>
        </thead>
        <tbody>
          {names.map((name, index) =>
            <tr key={name}>
              <Summary index={index} name={name}
                reverseCallback={reverseNames}
                promoteCallback={promoteName} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}