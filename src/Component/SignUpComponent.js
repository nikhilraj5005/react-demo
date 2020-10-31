import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Container from "@material-ui/core/Container";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const SignUpComponent = (props) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-modal">
      <Dialog
        onClose={(close) => props.handleSignUpOpen(false)}
        maxWidth="lg"
        aria-labelledby="customized-dialog-title"
        open={(close) => props.handleSignUpOpen(true)}
      >
        <MuiDialogTitle>Please Enter your details to sign up</MuiDialogTitle>
        <DialogContent dividers>
          <form noValidate autoComplete="off">
            <Container maxWidth="md" fixed="true">
              <Typography
                component="div"
                style={{ height: "75px", width: "300px" }}
              >
                <InputLabel htmlFor="input-with-icon-adornment">
                  Name
                </InputLabel>
                <Input
                  id="name"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </Typography>

              <Typography
                component="div"
                style={{ height: "75px", width: "300px" }}
              >
                <InputLabel htmlFor="input-with-icon-adornment">
                  Email
                </InputLabel>
                <Input
                  id="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  }
                />
              </Typography>
              <Typography
                component="div"
                style={{ height: "75px", width: "300px" }}
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Typography>
              <Typography
                component="div"
                style={{ height: "75px", width: "300px" }}
              >
                <InputLabel htmlFor="input-with-icon-adornment">
                  Mobile No.
                </InputLabel>
                <Input
                  id="mobile"
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  }
                />
              </Typography>
            </Container>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" autoFocus>
            Sign-Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUpComponent;
