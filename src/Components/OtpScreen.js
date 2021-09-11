import React, { Component,useState } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { toast } from "react-toastify" ;
import 'react-toastify/dist/ReactToastify.css';
// import "./styles.css";

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: "white",
    height: "60vh",
    textAlign: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const  OtpScreen =() => {
  const classes = useStyles();
  const theme = useTheme();
  const OTP = 1234;

  const [otp, setOtp] = useState("");
  const isNumberEntered = localStorage.getItem("Number");
  const isVerified = localStorage.getItem("verified");
  console.log(isVerified);

  console.log(isNumberEntered);
  if(isNumberEntered){
    console.log("hello")
    // window.location = "/otp";
  }else{
    console.log("false")
    window.location = "/"
  }
  

  const handleOnChange = value => {
    setOtp(value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault() ;
    console.log(otp) ;
    if(otp!=OTP){
      toast.error(" Invalid OTP ") ;
      setTimeout(() => {
        window.location = "/otp";
      }, 4000); 
    }else{
      localStorage.setItem("verified",true);
      toast.success("OTP Verified");
      setTimeout(() => {
        window.location = "/welcome";
      }, 3000);
    }
  }

  const handleLinkClick = (e) =>{
    e.preventDefault();
    setTimeout(()=>{
      toast.info("OTP Sent")
    },3000);
  }
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
          
          
        <Grid
          container
          style={{ backgroundColor: "white" }}
          className={classes.grid}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item container justify="center">
            <Grid item container alignItems="center" direction="column">
            <Grid item>
              <img style={{height:"20vh",width:"40vw"}} 
              src="https://cdn.pixabay.com/photo/2017/05/25/21/15/applications-2344379__340.png"/> 
              </Grid>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Verification Code
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Paper elevation={0}>
              <Typography variant="h6">
                Please enter the verification code sent to your mobile {localStorage.getItem("phone")}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item spacing={3} justify="center">
              <OtpInput
                separator={
                  <span>
                    <strong></strong>
                  </span>
                }
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)"
                }}
                value={otp}
                onChange={handleOnChange}
              />
            </Grid>
            <br></br><br></br>
            <Typography>
                Didn't Receive verification code? &ensp;
                 <Link style={{textDecoration: 'none'}} onClick={handleLinkClick}>Resend</Link>
              </Typography>
            <Grid item>
              <Button style={{backgroundColor:"#ffc266",cursor :"pointer",color : "white",border : "0px", borderRadius : "12px",height : "40px",width:"140px",fontSize:"16px"}}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Verify
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default OtpScreen;

