import { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        size="small"
        onClick={scrollToTop}
        sx={{
          backgroundColor: "primary.main",
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 999,
          "&:hover": {
            backgroundColor: "primary.contrast",
          },
        }}
        aria-label="Scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;
