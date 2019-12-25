import React,{Component} from 'react';
import classes from  './buttonsection.css'
import Resumeparts from './../../components/resumeparts/resumeparts'

class bttonsection extends Component{
state={
  btntype:[{id:'education',name:"EDUCATION"},
  {id:'skills',name:"SKILLS"},
  {id:'projects',name:"PROJECTS"},
  {id:'hobbies',name:"HOBBIES"}],

  values:null
  
}

       gg=(event,id)=>{
         this.setState({values:id})
           
        }


    render()
    {
        
      

        let btnvar=(this.state.btntype.map((btn)=>(
        <button onClick={(event)=>this.gg(event,btn.id)} className={classes.btnsection}>{btn.name}</button>
        )))

        return(<div>
          
    {btnvar}
   
   <Resumeparts type={this.state.values}></Resumeparts>
        </div>

        )
    }
}

export default bttonsection;