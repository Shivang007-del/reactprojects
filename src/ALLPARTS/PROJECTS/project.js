import React,{Component} from 'react';
import classes from  './project.css'
import Projectpart from './projectparts'


class bttonsection extends Component{
state={
  btntype:[{id:'education',name:"Ecommerce website"},
  {id:'skills',name:"Email Classification System"},
  {id:'projects',name:"Online Test Portal"},
  {id:'hobbies',name:"Feekart Application"}],

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
            <div className={classes.bb}>
    {btnvar}</div>
    <Projectpart type={this.state.values}></Projectpart>
        </div>

        )
    }
}

export default bttonsection;