import { Box, Container } from "@mui/material";
import React from "react";

interface Props {
  children?: React.ReactNode;
  image?: string;
}

const Hero: React.FC<Props> = ({ children, image }) => {
  return (
    <Box sx={{ ...styles.root, backgroundImage: `url(${image})` }}>
      <Box sx={styles.overlay} />
      <Container maxWidth="md" sx={styles.content}>
        {children}
      </Container>
    </Box>
  );
};

const styles = {
  root: {
    pt: 16,
    pb: 6,
    height: "50vh",
    minHeight: "400px",
    bgcolor: "white",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    mb: 6,
    position: "relative",
  },

  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, rgba(24, 22, 22, 0) 0%, #1d1d1d 100%)",
  },
};

export default Hero;
