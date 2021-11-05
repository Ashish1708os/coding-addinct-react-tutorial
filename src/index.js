import React from "react";
import ReactDom from "react-dom";
// importing CSS
import "./index.css";

import { data } from "./Books";
import Book from "./Book";
import { greeting } from "./testing/testing";

// Simple list example
// const names = ["ashish", "abhi", "didi"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);
function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
