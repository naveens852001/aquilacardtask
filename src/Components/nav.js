import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { UseStyles } from './MaterialCss';
import { FaCartPlus } from "react-icons/fa6";
function Header() {


  const classes = UseStyles();
  return (
    <div>
      <AppBar position='static' className={classes.AppBar}>
        <Toolbar style={{fontSize:'1.5rem'}}>
          <Typography variant='h6' className={classes.title}>
            Aquila- I
          </Typography>
          <div className={classes.navMenus}>
          <Button className={classes.navButton}>Home</Button>
          
          </div>
          <div>
<FaCartPlus/>
          </div>
          
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header