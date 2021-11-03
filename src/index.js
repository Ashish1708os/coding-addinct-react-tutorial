import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
    </div>
  );
}

const Person = () => <h2>Ashish Salve</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
