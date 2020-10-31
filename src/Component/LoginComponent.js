import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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

export default function LoginComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        maxWidth="lg"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <form noValidate autoComplete="off">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Login
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            autoFocus
          >
            Sign-Up
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        onClose={handleClose}
        maxWidth="lg"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
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
                      <AccountCircle />
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
            </Container>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            autoFocus
          >
            Sign-Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
