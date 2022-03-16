import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import "../../components/SlideBar/Slide.css";
// import "./SideBar.css";
const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Box sx={{ marginTop: "90px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Paper className="slide" sx={{ boxShadow: "none" }}>
          <FormControl>
            <FormLabel
              sx={{ display: "flex", justifyContent: "center", color: "black" }}
            >
              DRINKS:
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel
                value="Whiskey"
                control={<Radio />}
                label="Whiskey"
              />
              <FormControlLabel
                value="Lemonade"
                control={<Radio />}
                label="Lemonade"
              />
              <FormControlLabel value="all" control={<Radio />} label="all" />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
    </Box>
  );
};

export default SideBar;
