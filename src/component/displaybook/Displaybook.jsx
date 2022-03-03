import React from "react";
import "./displaybook.scss";
import bookimage from "../../Assets/book.png";
import { BookServices } from '../../Services/BookServices';
import { CartServices } from "../../Services/CartServices";

function Displaybook(props) {
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
  
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  const addCart = (book) => {
    let data = {
     "userID": localStorage.getItem("UserId"),
      "booksModel": {
      "bookID": book.bookID,
      "bookName": book.bookName,
      "authorName": book.authorName,
      "rating": book.rating,
      "totalRating": book.totalRating,
      "discountPrice": book.discountPrice,
      "originalPrice": book.originalPrice,
      "description": book.description,
      "bookImage": book.bookImage
      },
      "quantity": 1
    };
    console.log(data);
    CartServices.addtocart(data)
      .then((result) => {
       console.log(result);
       console.log("add to bag");
       props.getCart()
       getBooks();
      })
      .catch(() => {});
  };
  // const wishlist = (book) => {
  //   let data = {
  //     _id: book._id,
  //   };
  //   wishlistService
  //     .addwishlist(data)
  //     .then((result) => {
  //      console.log(result);
  //      props.getwishlist()
  //      getBooks();
  //     })
  //     .catch(() => {});
  // };

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
                  <img className="image" src={book.bookImage}></img>
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
                <div className="order">
                  <button
                    className="bag"
                    onClick={() => {
                      addCart(book);
                    }}
                  >
                    ADD TO BAG
                  </button>
                  <button
                    className="wishlist"
                    // onClick={() => {
                    //   wishlist(book);
                    // }}
                  >
                    WISHLIST
                  </button>
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