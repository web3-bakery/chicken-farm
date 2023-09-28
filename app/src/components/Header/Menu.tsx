import React from "react";
import { Box } from "@mui/material";
import MenuItem from "./MenuItem";
import { MENU } from "./config";
import { transitions } from "../../theme";

const Menu: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.box}>
        {MENU.map((item) => {
          return <MenuItem {...item} key={item.label} />;
        })}
      </Box>
    </Box>
  );
};

const styles = {
  root: {
    position: "fixed",
    top: 7,
    left: "50%",
    transform: "translateX(-50%)",
    display: { xs: "none", md: "block" },
    bgcolor: "rgba(0,0,0,0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.5)",
    p: "4px",
    borderRadius: "12px",
    height: 51,
    transition: transitions[120],

    "&:hover": {
      bgcolor: "rgba(0,0,0,0.5)",
    },
  },
  box: {
    display: "flex",
    borderRadius: "6px",
    overflow: "hidden",
    height: 42,
  },
};

export default Menu;
