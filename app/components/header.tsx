"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import ColorSchemeToggle from "./ColorSchemeToggle";
import Typography from "@mui/joy/Typography";

export default function Header() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Typography level="h1" sx={{ p: 1 }}>
          Password Generator
        </Typography>
      </Stack>

      <Box
        style={{ position: "fixed", right: 20, top: 10 }}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <ColorSchemeToggle />
      </Box>
    </Box>
  );
}
