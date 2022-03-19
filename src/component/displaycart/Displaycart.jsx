import React from "react";
import "./diplaycart.scss";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { CartServices } from "../../Services/CartServices";
import { CompressOutlined } from "@mui/icons-material";
import { BookServices } from "../../Services/BookServices";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";
import { CustomerDetails } from "../../Services/CustomerDetails";


export default function Displaycart() {
  const [book, setBooks] = React.useState([]);
  React.useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();

  const [orderbutton, setOrderbutton] = React.useState(true);
  const [checkout, setCheckout] = React.useState(true);
  const [fields, setFields] = React.useState({
    city: "",
    fullname: "",
    mobilenumber: "",
    pincode: "",
    locality: "",
    landmark: "",
    address: "",
  });

  const [continuebutton, setcontinuebutton] = React.useState(true);

  const getCart = () => {
    CartServices.getcart()
      .then((result) => {
        console.log(result);
        setBooks(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changebutton = () => {
    setOrderbutton(false);
  };
  const orderSummary = () => {
    setcontinuebutton(false);
    setCheckout(false);
  };

  const changefield = (e) => {
    setFields((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const addDetails = () => {
    let data = {
      "userID": localStorage.getItem("UserId"),
      "fullname": fields.fullname,
      "mobile":fields.mobilenumber,
      "pinCode":fields.pincode,
      "locality":  fields.locality,
      "address": fields.address,
      "city": fields.city,
      "landmark": fields.landmark,
      "type": "string"
    };

    CustomerDetails.addcustomerdetails(data)
      .then((res) => { 
        console.log(res)
      })
      .catch(() => { });
  };
  const callfunctions = () => {
    addDetails();
    orderSummary();
  };

  const checkoutorder = () => {
    navigate("/dashbord");
  };


  return (
    <>
      <div className="maincontainer">
        <h3 className="headpart"> .</h3>
        <div className="cartcontainer">
          <h3 className="mycart"> My Cart({book.length})</h3>
          {
            book ? book.map((cart, index) => {
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
                      onClick={() => { }}
                    />
                    <div className="cart-quantity">{cart.quantity}</div>
                    <AddCircleOutlineOutlinedIcon
                      htmlColor="grey"
                      onClick={() => { }}
                    />
                    <div className="remove">Remove</div>
                  </div>
                  <hr></hr>
                </div>
              );
            })
              : ""}
          {orderbutton ? (
            <button
              className="button-order"
              onClick={() => {
                changebutton();
              }}
            >
              Place order
            </button>
          ) : (
            ""
          )}
        </div>
        {orderbutton ? (
          <div className="customer-details">
            <div className="inside-details">Customer Details</div>
          </div>
        ) : (
          <div className="customer-detail">
            <div className="inside-customerdetails">
            <div className="heading">
               <h3 >Customer Details</h3> 
               </div>  

              <div className="text-fields">
                <div className="name-field">
                  <TextField
                    size="medium"
                    name="fullname"
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    style={{ width: "250px" }}
                    onChange={(e) => changefield(e)}
                  />
                </div>
                <div className="mobile-num">
                  <TextField
                    name="mobilenumber"
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                    style={{ width: "250px" }}
                    onChange={(e) => changefield(e)}
                  />
                </div>
              </div>
              <div className="text-fields">
                <div className="name-field">
                  <TextField
                    name="pincode"
                    size="medium"
                    id="outlined-basic"
                    label="Pin code"
                    variant="outlined"
                    style={{ width: "250px" }}
                    onChange={(e) => {
                      changefield(e);
                    }}
                  />
                </div>
                <div className="mobile-num">
                  <TextField
                    name="locality"
                    id="outlined-basic"
                    label="Locality"
                    variant="outlined"
                    style={{ width: "250px" }}
                    onChange={(e) => changefield(e)}
                  />
                </div>
              </div>
              <div className="Address">
                <TextField
                  name="address"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  style={{ width: "532px" }}
                  multiline="true"
                  rows="4"
                  onChange={(e) => {
                    changefield(e);
                  }}
                />
              </div>
              <div className="text-fields">
                <div className="name-field">
                  <TextField
                    name="city"
                    size="medium"
                    id="outlined-basic"
                    label="City/town"
                    variant="outlined"
                    style={{ width: "250px" }}
                    onChange={(e) => {
                      changefield(e);
                    }}
                  />
                </div>
                <div className="mobile-num">
                  <TextField
                    name="landmark"
                    id="outlined-basic"
                    label="Landmark"
                    variant="outlined"
                    style={{ width: "250px" }}
                    onChange={(e) => {
                      changefield(e);
                    }}
                  />
                </div>
              </div>

              <div className="radio">
                <div  className="radio-inner">
                 <div className="radio-inner-top">
                 Type
                 </div>

                 <div className="radio_button">
                   <div className="radio_button_position">
                   <FormControlLabel
                      name="addressType"
                      value="Home"
                      control={<Radio />}
                      label="Home"
                      onClick={(e) => {
                        changefield(e);
                      }}
                    />
                   </div>
                
                       <div className="radio_button_position">
                       <FormControlLabel
                      name="addressType"
                      value="Work"
                      control={<Radio />}
                      label="Work"
                      onClick={(e) => {
                        changefield(e);
                      }}
                    />
                       </div>
                  
                       <div className="radio_button_position">
                       <FormControlLabel
                      name="addressType"
                      value="other"
                      control={<Radio />}
                      label="Other"
                      onClick={(e) => {
                        changefield(e);
                      }}
                    />
                       </div>
                   
                 </div>
                {/* <FormControl>

                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    style={{ marginTop: "2%" }}
                  >
                    Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                  >
                    <FormControlLabel
                      name="addressType"
                      value="Home"
                      control={<Radio />}
                      label="Home"
                      onClick={(e) => {
                        changefield(e);
                      }}
                    />
                    <FormControlLabel
                      name="addressType"
                      value="Work"
                      control={<Radio />}
                      label="Work"
                      onClick={(e) => {
                        changefield(e);
                      }}
                    />
                    <FormControlLabel
                      name="addressType"
                      value="other"
                      control={<Radio />}
                      label="Other"
                      onClick={(e) => {
                        changefield(e);
                      }}
                    />
                  </RadioGroup>
                </FormControl> */}
                </div>
              </div>
              {continuebutton ? (
                <button
                  className="continue-button"
                  onClick={() => callfunctions()}
                >
                  Continue
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {checkout ? (
          <div className="customer-details">
            <div className="inside-details">Order Summary</div>
          </div>
        ) : (
          <div className="order-details">
            <div className="inside-orderdetails">Order Summary</div>
            {book.map((cart) => {
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
                </div>
              );
            })}
            <button className="checkout-button" onClick={() => checkoutorder()}>
              checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}