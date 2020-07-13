import React from 'react';
import ReactDOM from 'react-dom';
import {video} from '../src/Assets/mboso.mp4';
// import src from '*.bmp';

class IncrementQuantity extends React.Component{
  constructor(props){
    super(props)
    
    this.quantityref=React.createRef();

  }

  quantityIncrement=()=>{
    this.quantityref.current.value++;

  }
  quantityDecrerement=()=>{
    this.quantityref.current.value--;
  }


  render(){
    alert("use text");
    return(
    <div>
      <p>
        <label> Enter quanity: <button onClick={this.quantityDecrerement}>-
        </button><input type="text" ref={this.quantityref}></input></label>
        <button onClick={this.quantityIncrement}>+</button>
      </p>
    </div>);
  }
}

class Login extends React.Component{
  constructor(props){
    super(props)
    this.usernameref=React.createRef();
  }

  componentDidMount(){
  
     this.usernameref.current.focus();

  }

render(){
  return(<div>
    <p>
      <label>username:<input type="text" ref={this.usernameref}></input></label>
    </p>
    <p>
      <label>Password:<input type="password"></input></label>
    </p>
    <button>Login</button>
  </div>)
}

}

class VideoPlayer extends React.Component{
  constructor(props){
    super(props)

    this.videoref=React.createRef();


  }

  playvideo=()=>{
    this.videoref.current.play();

  }

  pausevideo=()=>{
    this.videoref.current.pause();

  }
  
  render(){

    return(
    <div>

       <video ref={this.videoref} height="200" width="300" controls>
         
         <source src={video} type="video/mp4"></source>
  
       </video>
       <div>
         <button onClick={this.playvideo}>Play</button>
         <button onClick={this.pausevideo}>Pause</button>
       </div>

    </div>)
  }

}

const element=<VideoPlayer></VideoPlayer>
ReactDOM.render(element,document.getElementById("root"));
