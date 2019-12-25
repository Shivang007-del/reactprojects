import React,{Component} from 'react'
import img1 from './h.png'
import classes from './education.css'
import Innereducation from './innereducation'

class education extends Component{
    state={
        details:[{Name:"Asha Modern School",Degree:"10th" ,Year:"2012-2013",Marks:"10 CGPA"},
                 {Name:" Asha Modern School",Degree:"12th" ,Year:"2014-2015",Marks:"89%"},
                 {Name:"SRM Institue Of Technology",Degree:"B.TECH(CSE)" ,Year:"2016-2020",Marks:"85.2%"}]
    }

    render(){
var innereducation=this.state.details.map((ind)=>(
    <Innereducation iname={ind.Name} idegree={ind.Degree} iyear={ind.Year} imarks={ind.Marks}/>
   
    
))


        return(
            <div className={classes.edu}>
                <div className={classes.in1}>
                    <div className={classes.line}>
                    <div className={classes.img1}><img src={img1} /></div>
                    </div>
                  
                </div>
                <div className={classes.in2}> 
                
            {innereducation}
            </div>
            
            </div>
        )
    }
}

export default education;
