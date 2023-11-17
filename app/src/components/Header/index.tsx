"use client";

import * as React from "react";

import { AppBar, Toolbar } from "@mui/material";

import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import IdentityMenu from "./IdentityMenu";
import { MenuItemProps } from "./MenuItem";

export interface HeaderProps {
  menu?: MenuItemProps[];
  mobileMenu?: MenuItemProps[];
  identity?: boolean;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { identity = true } = props;

  return (
    <AppBar sx={styles.root}>
      <Toolbar sx={styles.toolbar}>
        <span></span>
        <Menu />
        {identity && <IdentityMenu />}
        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  root: {
    position: "fixed",
    zIndex: 11,
    top: { xs: 16, md: 24 },
    left: { xs: 16, md: 24 },
    width: { xs: "calc(100% - 32px)", md: "calc(100% - 48px)" },
    display: "flex",
    alignItems: "center",
    flexShrink: 1,
    boxSizing: "border-box",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(8px)",
    boxShadow: "none",
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: "8px",
  },

  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};
