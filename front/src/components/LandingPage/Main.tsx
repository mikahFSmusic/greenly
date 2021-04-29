import React, { ChangeEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import GreenlyLogo from "./assets/GreenlyLogo.png";
import {
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { addEmail } from "../../API";
import "./Main.scss";

type MainProps = {
  className: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& label.Mui-focused": {
        color: "green",
      },
      "& .MuiFilledInput-underline:after": {
        borderBottom: "2px solid green",
      },
    },
    disabled: {
      color: "gray",
    },
    emphasizedText: {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  })
);

export const Main = (props: MainProps) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const el = event.target as HTMLTextAreaElement;
    const value = el.value;
    setEmail(value);
  };

  const handleEmailSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (email) {
      setLoading(true);
      const res = await addEmail(email);
      console.log(res);
      if (res.status === 201) {
        setEmail("");
        setSuccessModalOpen(true);
        setLoading(false);
      }
    }
  };

  const clickOpen = () => {
    setSuccessModalOpen(true);
  };

  const clickClose = () => {
    setSuccessModalOpen(false);
  };

  return (
    <div className={props.className}>
      <div className="Content">
        <Container className="Content-container">
          <Container className="Text-container">
            <img src={GreenlyLogo} alt="logo" className="Logo" />
            <Typography className={classes.emphasizedText} variant="h5">
              Home of the Green Revolution
            </Typography>
            <Typography variant="h5">
              Where the world's greatest minds come together to discuss the
              future of our planet.
            </Typography>
            <Typography variant="h5">
              Join us in the fight for our planet.
            </Typography>
            <Typography variant="h5">Coming soon.</Typography>
          </Container>
          <Container className="Form-container">
            <TextField
              className={`Email-submit ${classes.root}`}
              variant="filled"
              label="Enter your email to get an invitation"
              color="primary"
              InputLabelProps={{
                variant: "filled",
              }}
              InputProps={{
                color: "primary",
                endAdornment: (
                  <SubmitButton
                    onSubmit={handleEmailSubmit}
                    disabled={loading ? true : false}
                  />
                ),
              }}
              margin="none"
              onChange={handleEmailChange}
              value={email}
            />
          </Container>
        </Container>
      </div>
      <EmailSuccessModal
        open={successModalOpen}
        clickOpen={clickOpen}
        clickClose={clickClose}
      />
    </div>
  );
};

// Submit Button
type SubmitProps = {
  onSubmit:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  disabled: boolean;
};

const SubmitButton = ({ onSubmit, disabled }: SubmitProps) => {
  return (
    <Button
      onClick={onSubmit}
      style={{
        height: "100%",
      }}
      disableElevation
      disabled={disabled}
    >
      Submit
    </Button>
  );
};

interface IEmailSuccessModal {
  open: boolean;
  clickOpen: () => void;
  clickClose: () => void;
}

const EmailSuccessModal = ({
  open,
  clickClose,
  clickOpen,
}: IEmailSuccessModal) => {
  return (
    <Dialog
      open={open}
      onEscapeKeyDown={clickClose}
      onBackdropClick={clickClose}
    >
      <DialogTitle>Email confirmation</DialogTitle>
      <DialogContent>Email Submitted Successfully!</DialogContent>
      <DialogActions>
        <Button onClick={clickClose}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};
