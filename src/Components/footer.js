import React from 'react'
import { UseStyles } from './MaterialCss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    const classes=UseStyles();
  return (
    <>
    <div className={classes.footer}>
    <div style={{display:'flex', justifyContent:'center'}}>
        <ul className={classes.ul}>
           <li className={classes.footerHead}>Company</li>
            <li>Aquila-I</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>


        </ul>

        <ul className={classes.ul}>
         <li className={classes.footerHead}>Get Help</li>         
         <li>Products</li>
         <li>Support</li>
         <li>FAQ</li>
         <li>Returns</li>
        </ul>
        

        <ul className={classes.ul}>
                 
       
         <li className={classes.footerHead}>Follow us</li>
         <div className={classes.socialicons}>
            
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><AiFillTwitterCircle /></li>
            <li><FaLinkedin />
            </li>
         </div>
         <li>Contact</li>
         <li>+91 9897273283</li>
         
        </ul>

    </div>
    </div>
    </>
  )
}

export default Footer