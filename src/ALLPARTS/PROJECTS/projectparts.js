import React,{Component} from 'react';
import classes from './project.css'

class resumeparts extends Component{
    render(){
let part ='projects';
 switch(this.props.type)
 {
     case 'education':
         part=<div className={classes.pp}>
             <h1>
                An real world ecommerce website was made .Frontend languages used was HTML ,CSS ,BOOTSTRAP .
                 To handle backend part of project PHP ,SQL was used.
             </h1>
         </div>
         break;

         case 'skills':
         part=<div className={classes.pp}>
             <h1>An email classification system project was made using machine learning algorithms like
                 SVM . To implemenent this R language is used.
             </h1>
         </div>
         break;
    
         case 'projects':
            part=<div className={classes.pp}>
                <h1>
                An online test portal was made .Frontend languages used was HTML ,CSS ,BOOTSTRAP .
                 To handle backend part of project PHP ,SQL was used.It shows marks scored in the end.
                </h1>
            </div>
            break;

            case 'hobbies':
                part=<div className={classes.pp}>
                   <h1>
                       A Feekart Application was made using Core Java ,JDBC ,SQL .It consist of two separate sections
                       for admin and for accountact . It shows fee status of students.
                   </h1>
                </div>
                break;   

            default:
                part=null;    
 }

    return part;
}}

export default resumeparts