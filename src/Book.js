import React from "react";

const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props.book; // destructuring props
  // attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);

    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4
        style={{
          color: "#617d98",
          fontSize: "0.75rem",
          marginTop: "0.25rem",
        }}
      >
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        Refrence example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
