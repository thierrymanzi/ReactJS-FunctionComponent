import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Location</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {this.props.employees(emp=>(
         <tr key={emp.Id}>
          <td>{emp.Id}</td>
          <td>{emp.Name}</td>
          <td>{emp.Location}</td>
          <td>{emp.Salary}</td>
         </tr>
        ))}

      </tbody>
    </table>

    );
  }
}


class EmployeeComponent extends React.Component{

  constructor(props){
  super(props)

  this.state={
    employees :[]
  };
 
  }

   componentDidMount(){

    fetch("https://localhost:44306/api/Employee").then(res=>res.json()).then(
      result=>{
        
        this.setState({employees:result});
          
      }
    )

  }

render(){

    return(<div>

      <h1>Employee Details</h1>
      {this.props.content(this.state.employees)}
      
      </div>);
  }

}

const employeeList=<EmployeeComponent content={(input)=><employeeList employees={input}></employeeList>}></EmployeeComponent>
ReactDOM.render(employeeList,document.getElementById("root"));
