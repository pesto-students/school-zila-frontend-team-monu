import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
// import ClassIcon from "../../assets/Class Icons-03.png";

export default function ActionAreaCard({ ClassIcon }) {
  return (
    <div style={{ padding: "2% 4% 2% 4%" }}>
      <Card
        sx={{
          width: 150,
          height: 150,
        }}
      >
        <CardActionArea style={{ height: "inherit" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={ClassIcon} alt="" style={{ width: "65%" }} />
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
