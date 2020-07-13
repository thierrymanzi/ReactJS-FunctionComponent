import React from 'react';
import ReactDOM from 'react-dom';


class EmployeeComponent extends React.Component{

  constructor(props){

     super(props)

     this.state={employee:{
       Id:'',
       Name:'',
       Location:'',
       Salary:''
     }
     }

  }

  handlerchange=e=>{
    const name=e.target.name;
    const value=e.target.value;
    this.setState({employee:{
      ...this.state.employee,
      [name]:value
    }
       
    });

    }

    onCreateEmployee=()=>{
    console.log(this.state.employee.Name);
    }

  render(){

    return(<div>
      <p>
        <label>Employee Id:<input type="text" name="Id" value={this.state.employee.Id} onChange={this.handlerchange}></input> </label>
      </p>
      <p>
        <label>Employee Name:<input type="text" name="Name" value={this.state.employee.Name} onChange={this.handlerchange}></input> </label>
      </p>
      <p>
        <label>Employee Location:<input type="text" name="Location" value={this.state.employee.Location} onChange={this.handlerchange}></input> </label>
      </p>
      <p>
        <label>Employee Salary:<input type="text" name="Salary" value={this.state.employee.Salary} onChange={this.handlerchange}></input> </label>
      </p>

      <button onClick={this.onCreateEmployee}>create</button>
    </div>)
  }

}


const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));
