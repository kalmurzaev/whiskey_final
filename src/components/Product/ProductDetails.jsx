import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import "./ProductDetails.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Payment from "../Payment/Payment";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import twocup from "../../assets/image/twocup.avif";
import { useAuth } from "../../contexts/AuthContext";

import { TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// import { useTheme } from "@mui/material/styles";

const ProductDetails = () => {
  const [comment, setComment] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const { getProductDetails, productDetails, saveEditedProduct, addComment } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const {
    user: { email },
  } = useAuth();

  const [productComment, setProductComment] = React.useState({
    comments: "",
  });

  ///!

  const [com, setCom] = useState({});

  const handleInput = (e) => {
    let d = new Date(Date.now());
    d.toString();
    setCom({
      email: user.email,
      comment: e.target.value,
      date: new Date().toLocaleString(),
    });
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  useEffect(() => {
    setProductComment(productDetails);
  }, [productDetails]);

  console.log(productDetails, "from Details");

  ///!

  const sendComment = async (e, id, productos) => {
    let newComment = [...productos.comments];
    newComment.push(com);
    let productWithComment = {
      ...productos,

      comments: newComment,
    };
    const data = await saveEditedProduct(productWithComment);
  };

  console.log(productDetails.comments);

  productDetails && productDetails.comments
    ? productDetails.comments.map((com) => {
        console.log(com, "comment@!!");
      })
    : console.log("did not work");

  return (
    <>
      <Container maxWidth="100%" className="twocup"></Container>
      <CssBaseline />
      <Container maxWidth="md">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "100px",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <img
              style={{ width: "25vw" }}
              src={productDetails.picture}
              alt=""
            />
          </div>
          <div className="sprite">
            <div className="border"></div>
            <center>
              <h1
                style={{
                  fontFamily: "-moz-initial",
                  marginBottom: "15px",
                  marginTop: "40px",
                }}
                className="details"
              >
                RECEPS
              </h1>
            </center>
            <p style={{ fontFamily: "-moz-initial", marginBottom: "7px" }}>
              Name: {productDetails.name}
            </p>
            <p style={{ fontFamily: "-moz-initial", marginBottom: "7px" }}>
              Type: {productDetails.type}
            </p>
            <p style={{ fontFamily: "-moz-initial", marginBottom: "7px" }}>
              Price: {productDetails.price} $
            </p>
            <p style={{ fontFamily: "-moz-initial", marginBottom: "7px" }}>
              Ingredients:{productDetails.description}
            </p>
            {/*<Link to="/payment" onClick={Button}>Buy Now</Link>*/}
            <center>
              <Link to="/payment">
                <Button
                  sx={{
                    backgroundColor: "black",
                    align: "center",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Buy Now
                </Button>{" "}
              </Link>
            </center>
            {/*<Button className= "btttn"  sx = {{backgroundColor:"#ccd7db",marginTop:2, color:"white"}}>Buy Now</Button>*/}
            <div className="border-bot"></div>
          </div>
        </div>
      </Container>
      <center>
        <div className="com" style={{ width: "40vw" }}>
          <div
            className="com"
            style={{
              display: "flex",
              flexWrap: "wrap-reverse",
              justifyContent: "space-around",
              padding: "50px",
              justifyContent: "center",
              backgroundColor: "",
              marginTop: "10px",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="comments"
              variant="outlined"
              name="comments"
              onChange={(e) => handleInput(e)}
            />

            <Button
              id="button"
              variant="outlined"
              size="large"
              fullWidth
              onClick={(e) => sendComment(e, productComment.id, productComment)}
            >
              add comment
            </Button>
          </div>

          {productDetails && productDetails.comments ? (
            productDetails.comments.map((com) => (
              <div>
                <AccountCircleOutlinedIcon />
                <p>{com.comment}</p>
                <br />

                <p>{com.email}</p>
                <p>{com.date}</p>
                <br />
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </center>
    </>
  );
};

export default ProductDetails;
