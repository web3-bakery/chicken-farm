import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export interface MenuItemProps extends BoxProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, href } = props;
  const { pathname } = useRouter();

  const active = pathname === href;

  return (
    <Link href={href}>
      <Box {...props} sx={styles.root} className={active ? "active" : ""}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Link>
  );
};

const styles = {
  root: {
    minWidth: "100px",
    height: "42px",
    px: 5,
    display: "flex",
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "transparent",
    color: "rgba(255,255,255,1)",
    borderRadius: "8px",

    "&.active": {
      bgcolor: "rgba(255,255,255,1)",
      color: "black",
    },

    "&:hover": {
      cursor: "pointer",
      bgcolor: "primary.main",
      color: "common.white",
    },
  },
};

export default MenuItem;
