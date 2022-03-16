import { Container, Typography } from "@mui/material";
import React from "react";
import "../AboutUs/AboutUs.css";
import story from "../../assets/image/story.webp";
import twoBoys from "../../assets/image/twoBoys.webp";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box } from "@mui/system";

const AboutUs = () => {
  return (
    <div>
      <Container maxWidth="xl" className="aboutUs">
        <div className="ourStory">
          <Typography variant="h3" color="white" fontFamily="-moz-initial">
            OUR STORY
          </Typography>
        </div>
      </Container>

      <div className="arrow">
        <Typography
          width="40vw"
          fontFamily="-moz-initial"
          variant="h6"
          marginTop="60px"
          marginBottom="60px"
        >
          Our Founder, Conor McGregor, and his team searched for a place and
          people that shared the same passion for Ireland and its whiskey. He
          found this at the oldest whiskey distillery on the Isle of Ireland and
          with his master distiller created a unique and special blend.
        </Typography>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <center>
          <ArrowDownwardIcon />
        </center>
      </div>

      <Container maxWidth="70vw" className="twoBoys">
        <div className="Boys">
          <div className="Boyses">
            <Typography
              fontFamily="-moz-initial"
              variant="h5"
              color="white"
              marginBottom="15px"
              fontWeight="bold"
            >
              OUR FOUNDER & MASTER DISTILLER
            </Typography>
            <Typography
              fontFamily="-moz-initial"
              color="white"
              marginBottom="15px"
            >
              Through much trial and error, they worked together <br />
              to create a blend of sweet Irish grain and single malt <br />
              Irish whiskey. The result, a smooth balanced whiskey with hints of
              vanilla, honey-like sweetness and toasted wood.
            </Typography>
          </div>
        </div>
      </Container>
      <Container sx={{ maxWidth: "1200px" }}>
        <iframe
          maxWidth="1200vw"
          width="100%"
          height="550vh"
          src="https://www.youtube.com/embed/DGIu8Z-ksSI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Container>
    </div>
  );
};

export default AboutUs;
