import { Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
