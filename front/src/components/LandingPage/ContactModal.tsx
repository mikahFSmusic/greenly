import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { addContactForm } from "../../API";

interface ContactModalProps {
  open: boolean;
  clickOpen: () => void;
  clickClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogBox: {},
    dialog: {
      padding: "40px",
      justifyContent: "center",
      backgroundColor: "#DFFFD3",
      color: "#004621",
      fontFamily: "Nunito",
    },
    dialogTitle: {
      paddingBottom: "40px",
      fontSize: "28px",
      width: "100%",
    },
    fullWidthField: {
      width: "100%",
      backgroundColor: "#A5ED8C",
    },
    firstNameField: {
      width: "95%",
      backgroundColor: "#A5ED8C",
    },
    gridContainer: {
      paddingBottom: "30px",
    },
  })
);

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#A5ED8C",
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

export const ContactModal = (props: ContactModalProps) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReason(event.target.value as string);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = makeFormData();
    const res = await addContactForm(formData)
    console.log(res)
    if (res.status === 201) {
      props.clickClose()
    }
  };

  const makeFormData = () => {
    let formData: IContactForm = {
      _id: (Date.now).toString(),
      first: firstName,
      last: lastName,
      email: email,
      reason: reason,
      message: message
    };
    return formData
  };
  return (
    <Dialog
      open={props.open}
      onEscapeKeyDown={props.clickClose}
      onBackdropClick={props.clickClose}
      className={classes.dialogBox}
    >
      <form
        className={classes.dialog}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <DialogTitle className={classes.dialogTitle} disableTypography>
          Thank you for joing the greenly community
        </DialogTitle>
        <Grid container className={classes.gridContainer} alignItems="center">
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField
                label="First"
                variant="outlined"
                size="small"
                className={classes.firstNameField}
                onChange={(e) => {
                  const value = e.target.value
                  setFirstName(value)
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField
                label="Last"
                variant="outlined"
                size="small"
                className={classes.fullWidthField}
                onChange={(e) => {
                  const value = e.target.value
                  setLastName(value)
                }}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container className={classes.gridContainer}>
          <FormControl fullWidth={true}>
            <TextField
              label="Email"
              className={classes.fullWidthField}
              variant="outlined"
              size="small"
              onChange={(e) => {
                const value = e.target.value
                setEmail(value)
              }}
            />
          </FormControl>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <FormControl fullWidth={true}>
            <Select
              className={classes.fullWidthField}
              variant="outlined"
              value={reason}
              onChange={handleSelectChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>Reason for reaching out...</em>
              </MenuItem>
              <MenuItem value="Contributor">Contributor</MenuItem>
              <MenuItem value="Keep me posted">Keep me posted</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* dropdown with reason for reaching out */}
        <Grid container className={classes.gridContainer}>
          <FormControl fullWidth={true}>
            <TextField
              label="Your Message Here"
              multiline
              rows={8}
              className={classes.fullWidthField}
              variant="outlined"
              size="small"
              onChange={(e) => {
                const value = e.target.value
                setMessage(value)
              }}
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl fullWidth={true}>
            <Button
              className={classes.fullWidthField}
              variant="outlined"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </Grid>
      </form>
    </Dialog>
  );
};
