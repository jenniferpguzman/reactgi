import React, { Component } from "react";
import BasicInfo from './BasicInfo'




//VERY EASY
// export default class App extends Component {
//   render(){
//     return (
//       <div>
//       <li>Jennifer Guzman</li>
//       <li>704-444-4444</li>
//       <li>February 13th 2001</li>
//       </div>
//     )
//   }
// }

//EASY
// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       person:{}
//     }
//   render();{
//     return (
//       <div>
//       <li>Jennifer Guzman</li>
//       <li>704-444-4444</li>
//       <li>February 13th 2001</li>
//       </div>
//     )
//   }
// }
// }



//MEDIUM
// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       person:{
//         name: 'Jennifer Guzman',
//         phone: '704-444-4444',
//         dob:'February 13th 2001'
//       },
//     };
//   }
//   render(){
//     return (
//       <div>
//      <h1>Basic Information</h1>
//      <BasicInfo person={this.state.person} /> 
//       </div>
//     )
//   }
// }


//HARD

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      people:[
        {name: 'Jennifer Guzman', phone: '704-444-4444', dob:'February 13th 2001'},
        {name: 'Antonio Garcia', phone:'980-800-8000', dob:'October 25th 2000'},
        {name:'Fernando Lopez', phone: '980-444-4444', dob: 'September 1st 1999'}
      ],
    };
  }
  render(){
    return (
      <div className="basic_info">
     <h1>Basic Information</h1>
     {this.state.people.map((person,index) => (
      <BasicInfo key={index} person={person} /> 
     ))}
      </div>
    )
  }
}


// export default App
