"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

const Footer = () => {
  return (
    <>
      <Box component="footer" sx={{ py: 3 }}>
        <Typography level="body-xs" textAlign="center">
          MIT LICENSED | Random Password Generator | {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};
export default Footer;
