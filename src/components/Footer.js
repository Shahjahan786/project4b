/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    background: "linear-gradient(to right, #860091, #662070);",

    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 200,
    color: "white",

    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
  name: {
    fontSize: 20,
    textDecoration: "none",
    borderBottom: "1px white solid",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  head: {
    fontWeight: 100,
    fontSize: 35,
  
    
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <h1 className={classes.head}>samoon.shahjahan@gmail.com</h1>
       
      </footer>
      <div></div>
    </div>
  );
};

export default Footer;
