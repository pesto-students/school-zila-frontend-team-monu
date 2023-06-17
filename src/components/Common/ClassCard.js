import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Menu, MenuItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ActionAreaCard({ item }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
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
                {/* <img src={ClassIcon} alt="" style={{ width: "65%" }} /> */}
                <Typography fontSize="55px" color="#3D3D3D">{item.abbreviation || item?.class_name}</Typography>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </Button>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Subjects"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {SubjectIcon.map((el) => {
              return <img src={el} alt="" />;
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
