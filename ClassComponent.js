import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class Employee extends React.Component{

  constructor(props){

  super(props)

  console.log(this.props)

  }

render(){

  return <div>

          <p>Employeee Details</p>

          <p>
            <label>Employee ID:<b>{this.props.Id}</b></label>
          </p>

          <p>
            <label>Employee Name:<b>{this.props.Name}</b></label>
          </p>

          <p>
            <label>Employee Location:<b>{this.props.Location}</b></label>
          </p>

          <p>
            <label>Employee Salary:<b>{this.props.Salary}</b></label>
          </p>

          <Department DepName={this.props.DepName}  HeadName={this.props.HeadName} ></Department> 

        </div>

}

}

class Department extends React.Component{

render(){

  return <div>
              <p>
                <label>Name:<b>{this.props.DepName}</b></label>
              </p>

              <p>
                  <label>Head Name:<b>{this.props.HeadName}</b></label>
              </p>
        </div>

}

}

const element =<Employee Id="101" Name="Thierry" Location="Kacyiru" Salary="250000" DepName="IT" HeadName="Jordan" ></Employee>;

ReactDOM.render(element,document.getElementById("root"));
