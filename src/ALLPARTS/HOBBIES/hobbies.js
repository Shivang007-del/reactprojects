import React,{Component} from 'react';
import Hobbyimage from './hobbyimg'
import classes from './hobbies.css';

class hobbies extends Component{
    state={
        hdetails:[{hphoto:"https://wallpaperaccess.com/full/1088580.jpg",htext:"CRICKET"},
        {hphoto:"https://www.incimages.com/uploaded_files/image/970x450/getty_549933903_2000133320009280405_105293.jpg",htext:"READING"},
        {hphoto:"http://www.diegomallien.com/wp-content/uploads/2017/03/Meaning-of-travelling.jpg",htext:"TRAVEL"}
    ]
    }
    
    render()
    {
var hobby= this.state.hdetails.map((gby)=>(
        <Hobbyimage imgq={gby.hphoto} htext={gby.htext} />
    ))


       return(
           <div className={classes.fo}>
          {hobby}
           </div>
       )
    }
}

export default hobbies;