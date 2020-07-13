import React ,{useState} from 'react';
import ReactDOM from 'react-dom';


 function Employee(){
   const [employee, setEmployeedata] = useState({Id:'',Name:'',Location:'',Salary:''});
 
  function changeemployeeInfo(e){
 
     setEmployeedata({...employee,[e.target.name]:e.target.value})

  }

    return (
      <div>
        <h2>Welcome to Employee Function component</h2>
        <p>
          <label>Employee ID<input type="text" name="Id" value={employee.Id} onChange={changeemployeeInfo}></input></label>
        </p>
        <p>
          <label>Employee Name<input type="text" name="Name" value={employee.Name} onChange={changeemployeeInfo}></input></label>
        </p>
        <p>
          <label>Employee Location<input type="text" name="Location" value={employee.Location} onChange={changeemployeeInfo}></input></label>
        </p>
        <p>
          <label>Employee Salary<input type="text" name="Salary" value={employee.Salary} onChange={changeemployeeInfo}></input></label>
        </p>
        <p>
    <label>Employee Id:{employee.Id},Name:{employee.Name},Locationis:{employee.Location} and Salary is:{employee.Salary}</label>
        </p>

        <SalaryComponent Salary={employee.Salary} onSalaryChange={changeemployeeInfo}></SalaryComponent>
        
      </div>
    )
    
}

const SalaryComponent=({onSalaryChange,Salary})=>{

   return(<div>
     <h2>Welcom to Salary function component</h2>
      <p>
      <label>Employee Salary<input type="text" name="Salary" value={Salary} onChange={onSalaryChange}></input></label>
      </p>

  </div>
   )

}

const employeeList=<Employee ></Employee>
ReactDOM.render(employeeList,document.getElementById("root"));
