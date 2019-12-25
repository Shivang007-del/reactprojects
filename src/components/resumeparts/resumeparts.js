import React,{Component} from 'react';
import Education from '../../ALLPARTS/EDUCATION/education'
import Skills from '../../ALLPARTS/SKILLS/skills'
import Project from '../../ALLPARTS/PROJECTS/project'
import Hobbies from '../../ALLPARTS/HOBBIES/hobbies'

class resumeparts extends Component{
    render(){
let part ='projects';
 switch(this.props.type)
 {
     case 'education':
         part=<div>
             <p>
                 <Education />
             </p>
         </div>
         break;

         case 'skills':
         part=<div>
             <p>
                 <Skills />
             </p>
         </div>
         break;
    
         case 'projects':
            part=<div>
                <p>
                    <Project />
                </p>
            </div>
            break;

            case 'hobbies':
                part=<div>
                    <Hobbies />
                </div>
                break;   

            default:
                part=null;    
 }

    return part;
}}

export default resumeparts