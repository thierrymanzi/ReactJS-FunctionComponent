import React from 'react';
import ReactDOM from 'react-dom';

function Employee(props){

return <div style={{border:"3px solid red"}}>
     <p>
        <label>Employee ID:<b>{props.data.Id}</b></label>
     </p>

     <p>
        <label>Employee Name:<b>{props.data.Name}</b></label>
     </p>

     <p>
        <label>Employee Location :<b>{props.data.Location}</b></label>
     </p>

     <p>
        <label>Employee Salary:<b>{props.data.Salary}</b></label>
     </p>

</div>

}

function DisplayEmployee(props){

  const EmpList=props.EmployeeList;

  const ListElements=EmpList.map((emp)=>

      <Employee  key={emp.Id} data={emp}> </Employee>

  );


return (<div>
  {ListElements}
</div>
);

}

const employees =[
  {Id:101,Name:"Thierry",Location:"Kacyiru",Salary:50000},
  {Id:102,Name:"NKUBITO",Location:"Remera",Salary:70000},
  {Id:101,Name:"Manzi",Location:"Nyarugenge",Salary:60000}
];


const element=<DisplayEmployee EmployeeList={employees}></DisplayEmployee>

ReactDOM.render(element,document.getElementById("root"));