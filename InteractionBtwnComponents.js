import React from 'react';
import ReactDOM from 'react-dom';


const employeeContext=React.createContext({
    data:'',
    changeEmployeeInfo:()=>{}

});

class App extends React.Component{

  constructor(props){

    super(props);

    this.state={
     data :{
            Id:"103",
            Name:"Thierry",
            Location:"Rwanda",
            Salary:50000

     },
     changeEmployeeInfo:this.updateEmployeeDetails

    };

  }

  updateEmployeeDetails=()=>{

      this.setState=({data:{Id:"102"}});

  }

  render(){
   return <div>
              <h2>welcome to App component</h2>
              <p>
                <label>Employee ID:<b>{this.state.data.Id}</b></label>
              </p>
              <employeeContext.Provider value={this.state}>
              <Employee></Employee>
              </employeeContext.Provider>
          </div>
  }
}

class Employee extends React.Component{
static context=employeeContext;

  render(){
      return <div>
                <h2>welcome to Employee component</h2>
                <p>
                  <label>Employee ID:<b>{this.context.data.Id}</b></label>
                </p>
                  <button onClick={this.context.changeEmployeeInfo}>Update</button>
               </div>
  }
}

const element=<App></App>

ReactDOM.render(element,document.getElementById("root"));