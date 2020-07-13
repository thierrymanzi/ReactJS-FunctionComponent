import React from 'react';
import ReactDOM from 'react-dom';


class EmployeeComponent extends React.Component{

  constructor(props){
  super(props)

  this.state={
    message:''
  };
 
  }

  onCreateEmployee=()=>{

      let empInfo={
        Id:this.refs.Id.value,
        Name:this.refs.Name.value,
        Location:this.refs.Location.value,
        Salary:this.refs.Salary.value
   
      };
      
      fetch('https://localhost:44306/api/Employee',{
        method:'POST',
        headers:{'Content-type':'Application/json'},
        body:JSON.stringify(empInfo)

      }).then(r=>r.json()).then(res=>{
         
         if(res){
            this.setState({message:'New Employee Add Successfully'});
         }

      })
    }

render(){

    return(<div>

      <h1>Employee Registration Form </h1>
      <p>
        <label>Employee ID:<input type="text" refs="id"></input></label>
      </p>
      <p>
        <label>Employee Name:<input type="text" refs="Name"></input></label>
      </p>
      <p>
        <label>Employee Location:<input type="text" refs="Location"></input></label>
      </p>
      <p>
        <label>Employee Salary:<input type="text" refs="Salary"></input></label>
      </p>

      <button onClick={this.onCreateEmployee}></button>
    <p>{this.state.message}</p>
    
      </div>);
  }

}

const employeeList=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(employeeList,document.getElementById("root"));
