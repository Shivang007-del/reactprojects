import React from 'react'
import classes from './skills.css'

const skilldesign=(props)=>{
    return(<div>
        <div className={classes.skilldesign}>
    <p>{props.getvalue}</p>
        </div>
    </div>
    )
}


export default skilldesign;