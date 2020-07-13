import React from 'react';
import ReactDOM from 'react-dom';



const DemoComponent =React.forwardRef((props,ref)=>{

    function testClick(){

      ref.current.focus();

    }
   
  return(
  <button onClick={testClick}>Click</button>
  );

});


class Elevator extends React.Component{
  constructor(props){
  super(props)
  this.elevatorref=React.createRef();

  }

  render(){
    return(<div>
      <h2>Elevator Order Details</h2>
      <p>
        <label>Elevator Name:<input type="text" ref={this.elevatorref}></input></label>
      </p>
      <p>
        <label>Elevator Speet:<input type="text"></input></label>
      </p>
      <p>
        <label>Elevator Load:<input type="text"></input></label>
      </p>
      <button>Order</button>
      <Summary inneref={this.elevatorref}></Summary>
      <DemoComponent ref={this.elevatorref}></DemoComponent>
    </div>);
  }
}


class Summary extends React.Component{
  constructor(props){
  super(props)

  }

  focusInput=()=>{
    this.props.inneref.current.focus();
  }

  render(){
    return(<div>
      <h2>Elevator Summary Details</h2>
      <p onClick={this.focusInput}>
        <label >Elevator Name:<b>Thierry</b></label>
      </p>
      <p>
        <label>Elevator Speet:<b>10m/s</b></label>
      </p>
      <p>
        <label>Elevator Load:<b>50kg</b></label>
      </p>
    </div>);
  }
}
 
const element=<Elevator></Elevator>
ReactDOM.render(element,document.getElementById("root"));
