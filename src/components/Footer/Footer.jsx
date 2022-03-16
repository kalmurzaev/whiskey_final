import React from "react";
import "../Footer/Footer.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import tiger from "../../assets/image.tiger.webp";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="top_header">
          <section>
            <span>
              <LocationOnOutlinedIcon />
            </span>
            <span> Market Street Unit 288, Los Angeles </span>
          </section>
          <section>
            <Typography variant="h4" fontFamily="-moz-initial">
              LIVE PROPER
            </Typography>
          </section>
          <section>
            <span>
              <ForwardToInboxOutlinedIcon />
            </span>
            <span>Proper-Twelve.com</span>
          </section>
        </div>
        <div class="tigerr">
          <img
            class="tiger"
            src="https://cdn.shopify.com/s/files/1/0025/8555/9110/t/36/assets/logo-tiger_300x.png?v=5518566609820073033"
            alt=""
          />
        </div>
        <span class="border-shape"></span>

        <div class="bottom_content">
          <section>
            <a target="_blank" href="https://ru-ru.facebook.com/">
              <FacebookOutlinedIcon sx={{ color: "black", fontSize: "2rem" }} />
            </a>
            <a target="_blank" href="https://web.telegram.org/k/">
              <SendOutlinedIcon sx={{ color: "black", fontSize: "2rem" }} />
            </a>
            <a target="_blank" href="https://twitter.com/?lang=ru">
              <RocketLaunchOutlinedIcon
                sx={{ color: "black", fontSize: "2rem" }}
              />
            </a>
            <a target="_blank" href="https://www.whatsapp.com/">
              <WhatsappOutlinedIcon sx={{ color: "black", fontSize: "2rem" }} />
            </a>
          </section>
          <section class="niz">
            <Link to="/">HOME</Link>
            <Link to="/products">WHISKEY</Link>
            <Link to="/aboutus">STORY</Link>
            <Link to="/contacts">RECEPS</Link>
          </section>
        </div>
        <div class="copyright">
          PROPER NO. TWELVE®️ IRISH WHISKEY, A BLEND. 40% ALC./VOL. (80 PROOF).
          ©️2022 EIRE BORN SPIRITS, JERSEY CITY, NJ. PLEASE DRINK RESPONSIBLY.
          2022.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
