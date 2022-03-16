import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import taw from "../../assets/image/taw.jpg";
import "../../components/Product/AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
    comments: [],
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <>
      <Container maxWidth="100%" className="phone"></Container>
      <Box>
        <center gutterBottom>
          <Box marginTop="40px">
            <Typography variant="h5" fontFamily="-moz-initial">
              ADMIN PANEl
            </Typography>
          </Box>
        </center>

        <Grid item xs={12} md={6} sx={{ margin: "10vh auto" }}>
          <form>
            <TextField
              fullWidth
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              name="name"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="description"
              onChange={handleInp}
            />{" "}
            <TextField
              fullWidth
              id="outlined-basic"
              label="PRICE"
              variant="outlined"
              name="price"
              onChange={handleInp}
            />{" "}
            <TextField
              fullWidth
              id="outlined-basic"
              label="PICTURE"
              variant="outlined"
              name="picture"
              onChange={handleInp}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="TYPE"
              variant="outlined"
              name="type"
              onChange={handleInp}
            />
            <Button
              variant="outlined"
              color="error"
              size="large"
              fullWidth
              onClick={() => {
                addProduct(product);
                navigate("/products");
              }}
            >
              CREATE PRODUCT
            </Button>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default AddProduct;
