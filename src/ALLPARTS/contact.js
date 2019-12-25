import React from 'react';
import classes from './contact.css'

const contact=(props)=>{
    return(<div className={classes.cpart}>
        <div className={classes.tpart}> <h1><u>CONTACT</u></h1></div>
        <div className={classes.bpart}>
        <div className={classes.lpart}>
           <div>
            <u> <h1>Address</h1></u>  
            <p>P204 ,Abode Valley ,Kakkan Street ,Potheri .</p>
            <u> <h1>Mobile No.</h1></u>  
            <p>7397258838</p>
           < p>8630281936</p>

           </div>

        </div>
        <div className={classes.rpart}>
            <div>
            <u> <h1>Email</h1></u>  
            <p>shivangsainiofficial@gmail.com</p>
            <p>shivangsaini99@gmail.com</p>
            <u> <h1>Whatsapp</h1></u>  
            <p>7397258838</p>
            
            </div>

        </div>
        </div>
 </div>)
}

export default contact;