import React from "react";
import "./diplaycart.scss";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { CartServices } from "../../Services/CartServices";
import { CompressOutlined } from "@mui/icons-material";
import { BookServices } from "../../Services/BookServices";


export default function Displaycart(props) {
  const [book, setBooks] = React.useState([]);
  const [carts, setCarts] = React.useState(props.cart);
  React.useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    CartServices.getcart()
      .then((result) => {
        console.log(result);
        setBooks(result.data.data);
        console.log("getting all cat books",result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="maincontainer">
        <h3 className="headpart"> </h3>
        <div className="cartcontainer">
          <h3 className="mycart"> My Cart({book.length})</h3>
          {book.map((cart,index) => {
            return (
              <div>
                <div className="content-container">
                  <div className="image-cart">
                    <img
                      src={cart.booksModel.bookImage}
                      alt="image"
                      style={({ height: "105px" }, { width: "100 px" })}
                    />
                  </div>
                  <div className="cart-description">
                    <div className="book-nam">{cart.booksModel.bookName}</div>
                    <div className="author-nam">{cart.booksModel.authorName}</div>
                    <div className="pricetage">Rs:-{cart.booksModel.originalPrice}</div>
                  </div> 
                </div>
                <div className="update-cart">
                  <RemoveCircleOutlineOutlinedIcon
                    htmlColor="grey"
                    onClick={() => {}}
                  />
                  <div className="cart-quantity">{cart.quantity}</div>
                  <AddCircleOutlineOutlinedIcon
                    htmlColor="grey"
                    onClick={() => {}}
                  />
                  <div className="remove">Remove</div>
                </div>
              </div>
            );
          })} 
        </div>
      </div>
    </>
  );
}