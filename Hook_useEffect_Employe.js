import React ,{useState,useEffetct} from 'react';
import ReactDOM from 'react-dom';


 function EmployeeComponet(){
   const [employee, setEmployee] = useState([]);

   useEffect(()=>{

    fetch("https://localhost:44306/api/Employee")
    .then(res=>res.json())
    .then((result)=>{setEmployee(result)
    
     }
    );

   },[]);
  
   return(<div>
     <h2>Employee Data...</h2>
     <table>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Location</th>
         <th>Salary</th>
       </tr>
       <tbody>

          {employee.map(emp=>(
           <tr kery={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
           </tr>

          ))}
            

       </tbody>
     </table>
   </div>)


const employeeList=<EmployeeComponet ></EmployeeComponet>
ReactDOM.render(employeeList,document.getElementById("root"));
