import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class Employee extends React.Component{

  
  constructor(props){

    super(props)

    this.state={
          updatedSalary:null
    };

  }

  getUpdatedSalary=(salary)=>{
  this.setState({updatedSalary:salary});
  }

  render(){

    return <div>
               <h1>Empoyee Component</h1>
             <p>

              <label> ID:<b>{this.props.Id}</b></label>

             </p>

             <p>

              <label>Name:<b>{this.props.Name}</b></label>

             </p>

              <p>

              <label>Location:<b>{this.props.Location}</b></label>

              </p>
            <p>

              <label>Salary:<b>{this.props.Salary}</b></label>

             </p>
             <p>

              <label>Total Updated Salary:<b>{this.state.updatedSalary}</b></label>

             </p>

             <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
   
       

    </div>
  }


}


class Salary extends React.Component{

  // eslint-disable-next-line no-useless-constructor
  constructor(props){

  super(props)
    
      this.state={
        basic:this.props.BasicSalary,
        hra:this.props.HRA,
        sa:this.props.SpecialAllowance
      };
   }

   UpdateSalary=()=>{
    let salary=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);

       this.props.onSalaryChanged(salary)

   }


   render(){

    return <div>

          <h1>Salary Details</h1>
           <p>
          <label>Basic Salary:<input type="text" ref="basic" defaultValue={this.state.basic}></input></label>
           </p>
                  
           <p>
          <label>HRA:<input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
           </p>

           <p>
          <label>Special Allowonce:<input type="text" ref="sa" defaultValue={this.state.sa}></input></label>
           </p>

           <p>
               <button onClick={this.UpdateSalary}>Update</button> 
          </p>

    </div>
   }

}

const element=<Employee Id="101" Name="Nkubito" Location="Rwanda" Salary="5000" BasicSalary="1000" HRA="2000" SpecialAllowance="3000"></Employee>

ReactDOM.render(element,document.getElementById("root"));