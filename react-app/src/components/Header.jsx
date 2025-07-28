import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

function Header() {
  const links = [
    { title: "Home", href: "#home" },
    { title: "About Me", href: "#aboutme" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); //scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function for the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: "inherit",
          transition: "transform 0.3s ease-in-out",
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          paddingLeft: 3,
          paddingRight: 3,
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            WA
          </Typography>

          {isMobile ? (
            // Hamburger icon
            <IconButton
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                  transition: "all 0.3s ease",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "rgba(70, 69, 69, 0.43)",
                  },
                },
              }}
              onClick={() => setDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  color: "primary.contrast",
                }}
              />
            </IconButton>
          ) : (
            // Desktop navbar
            <Box sx={{ display: "flex", gap: 2 }}>
              {links.map((title) => (
                <Button
                  key={title.href}
                  component="a"
                  href={title.href}
                  variant="text"
                  color="inherit"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: "3px",
                      backgroundColor: "primary.main",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {title.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          sx={{
            width: 200,
            color: "text.main",
            backgroundColor: "background.lighter",
            height: "100vh",
            textTransform: "uppercase",
          }}
        >
          {links.map((link) => (
            <ListItem
              key={link.href}
              button
              component="a"
              href={link.href}
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
