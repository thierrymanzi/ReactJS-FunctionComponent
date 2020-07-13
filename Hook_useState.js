import React ,{useState} from 'react';
import ReactDOM from 'react-dom';


 function Employee(){
  const [name,setName]=useState();

  function   changeHandler(e){
    setName(e.target.value)
  }

    return (
      <div>
        <h2>Employe Form</h2>
        <p>
          <label><input type="text" name="name" value={name} onChange={changeHandler}></input></label>
        </p>
        <p>
          <label>Employee Name is:{name}</label>
        </p>
        
      </div>
    )
    
}

const employeeList=<Employee ></Employee>
ReactDOM.render(employeeList,document.getElementById("root"));
