import React from 'react';
import classes from  './bimage.css';


const bimage=(props)=>{
return(
<div>
    
    <div className={classes.bimagecss}>
       <div className={classes.nametxt}>
            {props.children}
        </div>
       
    </div> 
    </div>
)
}

export default bimage;