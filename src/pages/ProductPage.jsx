import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import ProductList from "../components/Product/ProductList";
import { useProducts } from "../contexts/ProductContext";
// import "./ProductPage.css";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import "../pages/style/ProductPage.css";
import { Container, Typography } from "@mui/material";
import drink from "../assets/image/drink.jpg";

const ProductPage = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(0);

  const productPerPage = 6;
  const location = useLocation();

  const pageCount = Math.ceil(products.length / productPerPage);
  const pageVisited = page * productPerPage;

  const paginateProducts = products.slice(
    pageVisited,
    pageVisited + productPerPage
  );

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  useEffect(() => {
    getProducts();
  }, [location.search]);

  return (
    <div>
      <Container maxWidth="100%" className="product">
        <div>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              fontFamily: "-moz-initial",
            }}
          >
            {" "}
            PROPER DRINKS
          </Typography>
        </div>
      </Container>
      <ProductList products={paginateProducts} />
      <ReactPaginate
        previousLabel={<ArrowCircleLeftSharpIcon />}
        nextLabel={<ArrowCircleRightSharpIcon />}
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        activeClassName="activeBtn"
        disableClassName="disabled"
      />
    </div>
  );
};

export default ProductPage;
