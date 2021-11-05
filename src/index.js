import React from "react";
import ReactDom from "react-dom";
// importing CSS
import "./index.css";

//setup var
const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/814jC%2BrODgL._AC_UL200_SR200,200_.jpg",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81lZ-9E4F-S._AC_UL200_SR200,200_.jpg",
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
];

// Simple example
// const names = ["ashish", "abhi", "didi"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props.book; // destructuring props
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4
        style={{
          color: "#617d98",
          fontSize: "0.75rem",
          marginTop: "0.25rem",
        }}
      >
        {author}
      </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
