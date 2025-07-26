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
    { title: "About Me", href: "#aboutme" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
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
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            William Andrews II
          </Typography>

          {isMobile ? (
            // Hamburger icon
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Desktop navbar
            <Box sx={{ display: "flex", gap: 2 }}>
              {links.map((title) => (
                <Button
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
            color: "white",
            backgroundColor: "#292929ff",
            height: "100vh",
            textTransform: "uppercase",
          }}
        >
          {links.map((link) => (
            <ListItem
              button
              key={link.href}
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
