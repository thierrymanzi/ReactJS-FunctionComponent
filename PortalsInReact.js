/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component{
  constructor(props){
    super(props)
    this.state={
      employee:[]
    };
  }

 
  componentDidMount(){
    fetch('https://localhost:44306/api/Employee')
    .then(res=>res.json())
    .then((result)=>{this.setState({
      employee:result,
      showModal:false
    });

    }
    );
  }

  editEmployee=()=>{
      this.setState({
        showModal:!this.state.showModal
      });

  }

  render(){
    return(<div>
      <h2>Employee Data</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Location </th>
          <th>Salary</th>
          <th>Action</th>
        </tr>

        <tbody>
          {this.state.employee.map(emp=>(
           <tr key={emp.Id}>
            <td>{emp.Id}</td>
            <td>{emp.Name}</td>
            <td>{emp.Location}</td>
            <td>{emp.Salary}</td>
            <td>
              <button onClick={this.editEmployee}>Edit</button>
              <Modal open={this.state.showModal} close={this.editEmployee}>
                <EmployeeModal employee={emp}></EmployeeModal>
              </Modal>
            </td>
          </tr>
          ))}
         
        </tbody>

      </table>
    </div>);
  }
}

class Modal extends React.Component{
  constructor(props){
    super(props)
  }

render(){

  return(
    this.state.open?React.ReactDOM.createportal(
      <di className="modal">
        <button onClick={this.props.close}>x</button>
         {this.props.children}
      </di>,document.body):null
    );
  
}

}

class  EmployeeModal extends React.Component{
 constructor(props)
 {
   super(props)
 }

 render(){

  return(<div>
    <h2>Employee Details</h2>
    <p>
      <label>Employee ID<input type="text" value={this.props.employee.Id} ></input></label>
    </p>
    <p>
      <label>Employee Name<input type="text" value={this.props.employee.Name} ></input></label>
    </p>
    <p>
      <label>Employee Location<input type="text" value={this.props.employee.Location} ></input></label>
    </p>
    <p>
      <label>Employee Salary<input type="text" value={this.props.employee.Salary} ></input></label>
    </p>

    <input type="submit" value="save"></input>
    
  </div>)

 }

}

const element=<EmployeeModal></EmployeeModal>
ReactDOM.render(element,document.getElementById("root"));
