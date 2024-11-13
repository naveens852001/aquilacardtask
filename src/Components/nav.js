import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { UseStyles } from './MaterialCss';
function Header() {


  const classes = UseStyles();
  return (
    <div>
      <AppBar position='static' className={classes.AppBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Aquila- I
          </Typography>
          <div className={classes.navMenus}>
          <Button className={classes.navButton}>Home</Button>
          
          </div>
          
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header