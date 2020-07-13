/* eslint-disable no-undef */
import React ,{useState,useContext} from 'react';
import ReactDOM from 'react-dom';

const EmployeeContext=React.createContext();

function App(){
  
  const [employee,setEmployeedata]=useState({Id:100,Name:'Thierry',Location:'Kigali-Kacyiru',Salary:5000});
   
  return(<div>
    <h2>Welcome to App component</h2>
    <EmployeeContext.Provider value={employee}>
    <Employee></Employee>
    </EmployeeContext.Provider>
   

  </div>)
}

function Employee(){
  let context=useContext(EmployeeContext);

  return(<div>
    <h2>Welcome to Employee component</h2>
    <p>
      <label>Employee ID:<b>{context.Id}</b></label>
    </p>
    <p>
      <label>Employee Name:<b>{context.Name}</b></label>
    </p>
      <Salary></Salary>
  </div>);
}

function Salary(){
  let  context = useContext(EmployeeContext)

  return(<div>
    <h2>Welcome to Salary Component</h2>
    <p>
      <label>Employee ID:<b>{context.Id}</b></label>
    </p>
    <p>
      <label>Employee Name:<b>{context.Name}</b></label>
    </p>
    
  </div>);
}


const employeeList=<App></App>

ReactDOM.render(employeeList,document.getElementById("root"));
