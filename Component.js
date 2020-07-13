import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


var  DisplayEmployeeInfo=(employee) =>{

return <div>
  
     <p>Employeee and Department Details</p>

     <p>
       <label>Employee ID:<b>{employee.Id}</b></label>
     </p>

     <p>
       <label>Employee Name:<b>{employee.Name}</b></label>
     </p>

     <p>
       <label>Employee Location:<b>{employee.Location}</b></label>
     </p>

     <p>
       <label>Employee Salary:<b>{employee.Salary}</b></label>
     </p>

     <DisplayDepartment Id="103" Name="I.T"></DisplayDepartment>

   </div>;


};

const DisplayDepartment=(department)=>{
return <div>
  <p>
  <label>Departement ID:<b>{department.Id}</b></label>
</p>

<p>
<label>Department Name:<b>{department.Name}</b></label>
</p>
</div>;

};

const element =<DisplayEmployeeInfo Id="101" Name="Thierry" Location="Kacyiru" Salary="250000" ></DisplayEmployeeInfo>;

ReactDOM.render(element,document.getElementById("root"));
