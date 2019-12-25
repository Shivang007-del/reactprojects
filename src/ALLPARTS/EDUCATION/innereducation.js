import React,{Component} from 'react'
import classes from './education.css'

class innereducation extends Component{

    render(){

        return(<div>
            <div className={classes.inedu}>
               <div>{this.props.iname}</div>
               <hr />
                <div>{this.props.idegree}</div>
                <hr />
                <div>{this.props.iyear}</div> 
                  <hr />
                <div>{this.props.imarks}</div>
            </div><hr />
            </div>
        )
    }
}

export default innereducation;
