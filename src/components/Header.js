import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  appBar: {
    backgroundImage:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%);",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          
            CORTEX COPYWRITER 
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
