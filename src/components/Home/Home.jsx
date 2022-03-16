import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Home/Home.css";
import whiskey from "../../assets/image/whiskey.webp";
import Button from "@mui/material/Button";
import Conor from "../../assets/image/Conor.webp";
import zvuk1 from "../../assets/image/zvuk1.mov";
import ReactAudioPlayer from "react-audio-player";
import ice from "../../assets/image/ice.webp";
import { Link } from "react-router-dom";
import conorm from "../../assets/image/conorm.webm";

const Home = () => {
  return (
    <>
      <video className="video" autoPlay loop muted>
        <ReactAudioPlayer src={zvuk1} autoPlay controls />
        <source src={conorm} type="video/mp4" />
      </video>

      {/*  */}

      <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
        <Grid container>
          <Grid className="vineandtext" item xs={12} sm={6} lg={6} xl={6}>
            <Typography
              variant="h4"
              fontFamily="-moz-initial"
              marginBottom="20px"
            >
              PROPER NO. TWELVE
            </Typography>
            <Typography
              variant="h6"
              fontFamily="-moz-initial"
              marginBottom="15px"
            >
              Proper No. Twelve’s Triple Distilled Irish Whiskey is an
              ultra-smooth blend of golden grain and single malt with hints of
              vanilla, honey and toasted wood for a rich complexity.
            </Typography>
            <Link to="/contacts">
              <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: "10rem",
                  height: "3rem",
                  margin: "0 auto",
                }}
              >
                Learn More
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box maxWidth="700px">
              <img width="100%" className="whiskey" src={whiskey} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="100%" className="imgConor">
        <div className="heroFlex">
          <div className="heroTitleBox">
            <Typography
              fontFamily="-moz-initial"
              variant="h4"
              color="white"
              marginBottom="15px"
            >
              FROM A PROPER <br />
              IRISHMAN
            </Typography>
            <Typography
              fontFamily="-moz-initial"
              color="white"
              marginBottom="15px"
            >
              Proper No. Twelve pays homage to our founder, Conor McGregor, and
              his neighbourhood of Crumlin, Dublin 12. As Conor says, it is a
              proper Irish Whiskey and 12 is my hometown.
            </Typography>
            <Link to="/aboutus">
              <Button sx={{ backgroundColor: "white", color: "black" }}>
                OUR STORY
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <Container maxWidth="100%" className="ice">
        <div style={{ color: "white" }} className="last">
          <Typography variant="h3" fontFamily="-moz-initial">
            PROPER DRINKS FOR ALL
          </Typography>
          <Typography marginTop="15px" fontFamily="-moz-initial" variant="h6">
            Hard to beat neat or on the rocks. But why not mix it up?
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Home;
