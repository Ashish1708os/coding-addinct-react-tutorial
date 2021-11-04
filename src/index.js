import React from "react";
import ReactDom from "react-dom";
// importing CSS
import "./index.css";

//setup var
const firstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/814jC%2BrODgL._AC_UL200_SR200,200_.jpg",
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
};

const secondBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/81lZ-9E4F-S._AC_UL200_SR200,200_.jpg",
  title: "The Diary of a Young Girl",
  author: "Anne Frank",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio nemo minus molestias, rem a veniam eius adipisci. Ab, odit
          veritatis?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // console.log(props);
  // const { img, title, author } = props; // destructuring props
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
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
