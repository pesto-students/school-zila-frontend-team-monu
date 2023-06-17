import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

export default function ToasterSnackbar({ status, openToaster, setOpenToaster, alertStatus, setAlertStatus, message }) {
  const handleClose = () => {
    setOpenToaster(false);
    setAlertStatus(null);
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar open={openToaster} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={alertStatus}>{message}</Alert>
      </Snackbar>
    </Stack>
  );
}
