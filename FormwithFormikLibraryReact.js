import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';

const EmployeeComponent=()=>{
  const formik=useFormik({
    initialValues:{
      Id:'',
      Name:'',
      Location:'',
      Salary:''

    },
    onSubmit:values=>{
      alert(JSON.stringify(values))
    }

  })

  return(<div>
     <h2>New Employee Form</h2>

       <form onSubmit={formik.handleSubmit}>
       <p>     
         <label htmlFor="Id">Employee ID</label>
         <input type="text" name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange}></input>
         </p>
        <p>
         <label htmlFor="Name">Employee Name</label>
         <input type="text" name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange}></input>
         </p>
         <p>
         <label htmlFor="Location">Employee Location</label>
         <input type="text" name="Location" id="Location" value={formik.values.Location} onChange={formik.handleChange}></input>
         </p>
         <p>
         <label htmlFor="Id">Employee Salary</label>
         <input type="text" name="Salary" id="Salary" value={formik.values.Salary} onChange={formik.handleChange}></input>
         </p>
        
         <button type="submit">create</button>
      
       </form>
     
  </div>);

}

const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));
