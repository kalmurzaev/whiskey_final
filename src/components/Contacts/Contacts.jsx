import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../Contacts/Contacts.css";
import cup from "../../assets/image/cup.jpg";
import { Box } from "@mui/system";
import proper22 from "../../assets/image/proper22.webp";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";
import Looks5OutlinedIcon from "@mui/icons-material/Looks5Outlined";

const Contacts = () => {
  return (
    <>
      <Container maxWidth="100%" className="receps">
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={6} sm={6} lg={6} xl={6}>
              <Box maxWidth="170px" className="proper22" marginTop="40px">
                <img width="100%" src={proper22} alt="" />
              </Box>
            </Grid>
            <Grid className="grid1" item xs={6} sm={6} lg={6} xl={6}>
              <Typography
                color="white"
                variant="h4"
                marginBottom="16px"
                fontFamily="-moz-initial"
              >
                IRISH WHISKEY
              </Typography>
              <Typography color="white" fontFamily="-moz-initial">
                Proper No. Twelve's Triple Distilled Irish Whiskey is an
                ultra-smoothblend of fine grain and single malt with hints of
                vanilla, honey and toasted wood.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <center>
        <div>
          <Typography
            fontFamily="-moz-initial"
            variant="h3"
            marginBottom="60px"
            marginTop="60px"
          >
            OUR CRAFT
          </Typography>
        </div>
      </center>
      <Container sx={{ maxWidth: "1200px" }}>
        <center>
          <iframe
            maxWidth="1200vw"
            width="100%"
            height="550vh"
            src="https://www.youtube.com/embed/AE5m8RSj394"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </center>
      </Container>
      {/* ppppppphhhhhoooottttoooo */}
      <Container maxWidth="md">
        <Grid container marginTop="70px">
          <Grid className="vineandtext" item xs={12} sm={6} lg={6} xl={6}>
            <center>
              <LooksOneOutlinedIcon sx={{ fontSize: "3rem" }} />
            </center>
            <Typography
              variant="h4"
              fontFamily="-moz-initial"
              marginBottom="20px"
            >
              MILLING & MASHING
            </Typography>
            <Typography
              variant="h6"
              fontFamily="-moz-initial"
              marginBottom="15px"
            >
              The finest barley is steeped, germinated and gently air dried.
              Using a traditional roller mill, the malt barley is then turned
              into a fine grist.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box maxWidth="500px">
              <img
                width="100%"
                height="350vh"
                className="whiskey"
                src="https://cdn.shopify.com/s/files/1/0025/8555/9110/files/MM_2160x.jpg?v=1536250826"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* 2 */}
      <Container maxWidth="md">
        <Grid container marginTop="70px">
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box maxWidth="500px">
              <img
                width="100%"
                height="350vh"
                className="whiskey"
                src="https://cdn.shopify.com/s/files/1/0025/8555/9110/files/Ferm_2160x.jpg?v=1536251501"
                alt=""
              />
            </Box>
          </Grid>
          <Grid className="vineandtext" item xs={12} sm={6} lg={6} xl={6}>
            <center>
              <LooksTwoOutlinedIcon sx={{ fontSize: "3rem" }} />
            </center>
            <Typography
              variant="h4"
              fontFamily="-moz-initial"
              marginBottom="20px"
            >
              FERMENTATION
            </Typography>
            <Typography
              variant="h6"
              fontFamily="-moz-initial"
              marginBottom="15px"
            >
              After mashing, the natural fermentation process produces the wash
              (essentially beer) with over 8% alcohol.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/*  3*/}
      <Container maxWidth="md">
        <Grid container marginTop="70px">
          <Grid className="vineandtext" item xs={12} sm={6} lg={6} xl={6}>
            <center>
              <Looks3OutlinedIcon sx={{ fontSize: "3rem" }} />
            </center>
            <Typography
              variant="h4"
              fontFamily="-moz-initial"
              marginBottom="20px"
            >
              DISTILLATION
            </Typography>
            <Typography
              variant="h6"
              fontFamily="-moz-initial"
              marginBottom="15px"
            >
              The traditional triple distillation method uses copper pot stills,
              which create and fine-tune the proper character. After the first
              distillation, the strength of the spirit is increased through a
              second distillation with a low wine still. A third distillation in
              the spirit still, creates a cut above 80% alcohol. This captures
              the heart of the spirit.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box maxWidth="500px">
              <img
                width="100%"
                height="350vh"
                className="whiskey"
                src="https://cdn.shopify.com/s/files/1/0025/8555/9110/files/unnamed-3_2160x.jpg?v=1536250869"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* 4 */}
      <Container maxWidth="md">
        <Grid container marginTop="70px">
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box maxWidth="500px">
              <img
                width="100%"
                height="350vh"
                className="whiskey"
                src="https://cdn.shopify.com/s/files/1/0025/8555/9110/files/unnamed_2160x.jpg?v=1536250895"
                alt=""
              />
            </Box>
          </Grid>
          <Grid className="vineandtext" item xs={12} sm={6} lg={6} xl={6}>
            <center>
              <Looks4OutlinedIcon sx={{ fontSize: "3rem" }} />
            </center>
            <Typography
              variant="h4"
              fontFamily="-moz-initial"
              marginBottom="20px"
            >
              MATURATION
            </Typography>
            <Typography
              variant="h6"
              fontFamily="-moz-initial"
              marginBottom="15px"
            >
              Our coopers hand-select the finest former bourbon barrels in which
              to age our proper whiskey. Our spirit slowly ages developing
              through the years flavours of vanilla, honey and toasted wood.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* 5 */}
      <Container maxWidth="md">
        <Grid container marginTop="70px">
          <Grid className="vineandtext" item xs={12} sm={6} lg={6} xl={6}>
            <center>
              <Looks5OutlinedIcon sx={{ fontSize: "3rem" }} />
            </center>
            <Typography
              variant="h4"
              fontFamily="-moz-initial"
              marginBottom="20px"
            >
              BLENDING
            </Typography>
            <Typography
              variant="h6"
              fontFamily="-moz-initial"
              marginBottom="15px"
            >
              The blending of sweet Irish grain spirit and single malt Irish
              whiskey lies at the heart of Proper No. Twelve. Our Master
              Distiller selects casks that hold the rich character needed to
              craft Proper No. Twelve Whiskey.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Box maxWidth="500px">
              <img
                width="100%"
                height="350vh"
                className="whiskey"
                src="https://cdn.shopify.com/s/files/1/0025/8555/9110/files/unnamed-1_2160x.jpg?v=1536250912"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contacts;
