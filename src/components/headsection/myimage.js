import React from 'react';
import img1 from '../../assets/IMG_1140.JPG'
import classes from './myimage.css'

const myimage=()=>(
    <div className={classes.myimgcontainer}>
    <div className={classes.myimage}>
        <img src={img1} alt=" not available"/>
    </div>
    </div>
)
export default myimage;