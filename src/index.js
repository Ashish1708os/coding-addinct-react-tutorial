import React from "react";
import ReactDom from "react-dom";
// importing CSS
import "./index.css";

//setup var
const author = "Mark Manson";
const title = "The Subtle Art of Not Giving a F*ck";
const image =
  "https://images-eu.ssl-images-amazon.com/images/I/814jC%2BrODgL._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={image} alt="book" />
      <h1>{title}</h1>
      <h4
        style={{
          color: "#617d98",
          fontSize: "0.75rem",
          marginTop: "0.25rem",
        }}
      >
        {author.toUpperCase()}
      </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
