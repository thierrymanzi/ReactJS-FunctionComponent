/* eslint-disable no-unused-expressions */
import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';

class NewAccountReport extends React.Component{
  constructor(props){
    super(props)
    this.state={
      FromDate:'',
      ToDate:''
    }
  }

  handlechange=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   
      this.setState({
         [name]:value
      });

  }

    render(){
      return(<div>
        <h2>Welcome to New Account Report Component</h2>
        <p>
          <label>From Date<input type="text" name="FromDate" value={this.state.FromDate} onChange={this.handlechange}></input></label>
        </p>
        <p>
          <label>To Date<input type="text" name="ToDate" value={this.state.ToDate} onChange={this.handlechange}></input></label>
        </p>
        <p>
          <input type="submit" value="Generate"></input>
        </p>
      </div>);
    
  }
}


  class LoarnRepaymenntReport extends React.Component{
    constructor(props){
      super(props)

    }
    render(){
      return(<di>
        <h2>Welcome to Loarn Repayment Reports</h2>
      </di>)
    }
  }

  class ReportDashboard extends React.Component{


    callbackFunction=(id,phase,actualDuration,baseDuration,)=>{

      console.log("id is:"+id+",Phase is:"+phase);
      console.log("Actual Duration is:"+actualDuration+"and Base Duration is:"+baseDuration);

    }

    render(){
      return(<div>
        <h2>Welcome To Report Dashboard....</h2>
        <Profiler id="newAccount" onRender={this.callbackFunction}>
        <NewAccountReport></NewAccountReport>
        </Profiler>
        <Profiler id="loarnrepayment" onRender={this.callbackFunction}>
        <LoarnRepaymenntReport></LoarnRepaymenntReport>
        </Profiler>
       
        
      </div>)
    }
  }


const element=<ReportDashboard></ReportDashboard>
ReactDOM.render(element,document.getElementById("root"));
