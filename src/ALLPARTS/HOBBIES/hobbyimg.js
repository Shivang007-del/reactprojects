import React,{Components} from 'react';
import classes from './hobbies.css'

const hobbiesimg=(props)=>{
  
       return(
          
               <div className={classes.himg}>
                   <img src={props.imgq}></img>
       <div className={classes.htext}>{props.htext}</div>
               </div>
          
       )
    }


export default hobbiesimg;