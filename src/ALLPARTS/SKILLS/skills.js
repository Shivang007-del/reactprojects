import React,{Component} from 'react'
import Skilldesign from './skilldesign'
import classes from './skills.css'
import skilldesign from './skilldesign'

class skills extends Component{
    state={
        skillset:[{name:"C"},{name:"C++"},{name:"JAVA"},{name:"PYTHON"},{name:"HTML"},
        {name:"CSS"},{name:"JAVASCRIPT"},{name:"REACT"},{name:"PHP"},{name:"BOOTSTRAP"}]}

    render()
    {var lang=this.state.skillset.map((skl)=>(
<Skilldesign getvalue={skl.name} />
    ))

        return(<div className={classes.skills}>
           {lang}
        </div>)
    }
}

export default skills;