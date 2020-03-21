import React from 'react'
import classes from './logo.css'
import burgerLogo from '../../assets/images/burger-logo.png'
const logo = (props) =>{
  
   const imagePath = 'http://localhost:3000/' + {burgerLogo}
   console.log(imagePath);
   console.log(burgerLogo);
    return (
       
         <div className={classes.Logo}>
             {/* <img scr={burgerLogo} ></img> */}
             <img alt="My logo" ></img>
         </div>
      
    )
}

export default logo;