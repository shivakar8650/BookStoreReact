import React from "react";
import "./displaybook.scss";
import bookimage from "../../Assets/book.png";
import { BookServices } from '../../Services/BookServices';

function Displaybook() {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    BookServices.getAllproducts()
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        setBooks(res.data.data);
        
       
        console.log("getting all books");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(books);

  return (
    <>
      <div className="top-containers">
        <p className="books">Books </p>
        <p className="item"> (128 items)</p>
        <select name="sort by relevance" className="sort">
          <option value="">Sort by relevance</option>
          <option value="">Price:Low to high</option>
          <option value="">Price:High to low</option>
          <option value="">Newest arrivals</option>
        </select>
      </div>
      <div className="show-container">
        {books.map((book, index) => {
          return (
            <div className="books-display">
              <div className="image-display">
                <div>
                  <img className="image" src={bookimage}></img>
                </div>
              </div>
              <div className="content">
                <span className="book-name">{book.bookName}</span>
                <span className="author">By {book.authorName}</span>
                <div className="rate">
                  <span className="rating">4.5* </span>
                  <span className="text"> (20)</span>
                </div>
                <div className="bookprice">
                  <span className="">Rs:- {book.originalPrice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Displaybook;