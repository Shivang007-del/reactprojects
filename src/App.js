import React, { Component } from 'react';
import Bimage from './components/headsection/bimage'
import classes from './App.css'
import MyImage from './components/headsection/myimage'
import Middlesec1 from './components/middlesec1/middlesec1'
import ButtonTypes from './containers/buttonsection/buttonsection'
import Contact from './ALLPARTS/contact'
import Hobbies from './ALLPARTS/HOBBIES/hobbies'



class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <Bimage>Shivang Saini</Bimage>
        <MyImage />
        <Middlesec1  >Hello, My name is <b>Shivang Saini</b>. I am from Saharanpur,Uttar Pradesh.
           Currently I am in 4<sup>th</sup> year and pursuing my B.tech from <b>SRM Universty</b>, Kattankhulathur,
            Chennai with<b> Computer
           Science</b> as my stream. </Middlesec1>
           <ButtonTypes />
           
           <Contact />
          
       
      </div>
    );
  }
}

export default App;
