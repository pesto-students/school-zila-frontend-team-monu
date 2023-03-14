import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "20%",
        borderRadius: "50px",
        padding: "0px 4px",
      }}
    >
      <IconButton
        type="button"
        sx={{
          p: "10px",
          "& .css-i4bv87-MuiSvgIcon-root": { fontSize: "2rem" },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: "1.5rem", color: "#A098AE" }}
        placeholder="Search here..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
