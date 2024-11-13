import React from 'react'
import { UseStyles } from './MaterialCss';

function HeroSection() {
    const classes=UseStyles();
  return (
    <>
    <div className={classes.HeroSection}>
        <img src='/banner.jpg' className={classes.banner} alt='banner'/>
    </div>

    </>
  )
}

export default HeroSection