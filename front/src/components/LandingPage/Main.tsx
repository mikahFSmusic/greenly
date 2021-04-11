import React, { ChangeEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import GreenlyLogo from "../../assets/Greenly_logo.png";
import {
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { addEmail } from "../../API";
import "./Main.scss";

type MainProps = {
  className: string;
};

export const Main = (props: MainProps) => {
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
        <p className="Coming-soon">COMING SOON...</p>
        <img src={GreenlyLogo} alt="logo" className="Logo" />
        <br />
        <br />
        <Typography className="Text-body">
          For centuries, our fossil fuel civilization has pushed the world off
          balance.
          <br />
          We're here to steer our planet back towards a more sustainable
          equilibrium and, ultimately, a Green Revolution - the next step in
          humanity's progress towards a future unconstrained by carbon emissions
          and their ecological consequences.
        </Typography>
        <p className="Join-us">Join us and fight for our planet</p>
        <form className="Form">
          <TextField
            className="Email-submit"
            variant="filled"
            label="Submit your email for an invite"
            color="primary"
            InputProps={{
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
          ></TextField>
        </form>
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
