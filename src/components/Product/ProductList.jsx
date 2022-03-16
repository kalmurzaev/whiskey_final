import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "../Product/ProductCard";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProductCard from "../Product/ProductCard";
import SideBar from "../SlideBar/SlideBar";
// import "./ProductList.css";
// import SideBar from "../SideBar/SideBar";

const ProductList = ({ products }) => {
  const { getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1 className="title"></h1>
        <h3 className="title-paragraph"></h3>
        <Grid>
          <SideBar />
        </Grid>
        <TextField
          label="Search Drinks"
          variant="standard"
          sx={{ marginBottom: "2vw", marginLeft: "50vw", width: "26vw" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Grid container spacing={7}>
          {products ? (
            products.map((item) => (
              <Grid item>
                <MediaCard item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <>
              <h2>..Loading</h2>
            </>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductList;
