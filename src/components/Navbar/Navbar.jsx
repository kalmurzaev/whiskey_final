import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import { useProducts } from "../../contexts/ProductContext";
import "../Navbar/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import logo1 from "../../../src/assets/image/logo1.webp";
import logo2 from "../../../src/assets/image/logo2.webp";
import BeenhereTwoToneIcon from "@mui/icons-material/BeenhereTwoTone";

const pages = [
  { name: "WHISKEY", link: "/products", id: 1 },
  { name: "STORY", link: "/aboutus", id: 2 },
  { name: "RECEPS", link: "/contacts", id: 3 },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [navbar, setNavbar] = React.useState(false);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const { cart } = useProducts();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeBackground = () => {
    if (window.scrollY <= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <AppBar id={navbar ? "navbar_color" : "active"} position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/">
            {navbar ? (
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  marginTop: "15px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img width="200rem" src={logo2} alt="" />
              </Typography>
            ) : (
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  marginTop: "15px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img width="200rem" src={logo1} alt="" />
              </Typography>
            )}
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "black" },
            }}
          >
            {/* burger menu */}
            <IconButton
              id={navbar ? "navbar_color" : "active"}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {/* ADMIN PANEL */}
              {email == ADMIN ? (
                <MenuItem>
                  <Link to="/admin">
                    <Typography textAlign="center">ADMIN PANNEL</Typography>
                  </Link>
                </MenuItem>
              ) : null}
              {/* ADMIN PANEL */}
            </Menu>
          </Box>

          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                marginRight: "70px",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              {/* logoooooo */}
              <img width="150rem" src={logo1} alt="" />
            </Typography>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link}>
                <Button
                  id={navbar ? "navbar_color" : "active"}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "-moz-initial",
                    fontSize: "15px",
                    marginRight: "30px",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {/* ADMIN PANEL */}
            {email == ADMIN ? (
              <Link to="/admin">
                <Button
                  id={navbar ? "navbar_color" : "active"}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "-moz-initial",
                    fontSize: "15px",
                  }}
                >
                  ADMIN PANEL
                </Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button
                  id={navbar ? "navbar_color" : "active"}
                  sx={{ my: 2, color: "white" }}
                >
                  <Badge
                    badgeContent={cart?.products ? cart.products.length : 0}
                    color="secondary"
                  >
                    <BeenhereTwoToneIcon />
                  </Badge>
                </Button>
              </Link>
            )}
            {/* ADMIN PANEL */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <Button
                id={navbar ? "navbar_color" : "active"}
                variant="standard"
                color="error"
                sx={{
                  my: 2,
                  display: "block",
                  color: "white",
                  fontFamily: "-moz-initial",
                  fontSize: "14px",
                  marginTop: "20px",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : null}

            {email ? null : (
              <Link to="/auth">
                <Button
                  id={navbar ? "navbar_color" : "active"}
                  variant="standard"
                  color="error"
                  sx={{
                    my: 2,
                    display: "block",
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontSize: "14px",
                    marginTop: "20px",
                  }}
                  onClick={handleLogout}
                >
                  Account
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
