import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';


const EmployeeComponent=()=>{
  const formik=useFormik({
    initialValues:{
      Id:'',
      Name:'',
      Location:'',
      Salary:'',
      emailId:''

    },
    validationscheme:yup.object({

      Name:yup.string().max(20,'Employe Name should not exceed 20 characters').required('Please Enter employee name'),
      Location:yup.string().required("Please enter employee location"),
      Salary:yup.string().required('Please enter employee salary'),
      emailId:yup.string().email('Please enter a valid email').required('Please enter email ID')
    }),
    onSubmit:values=>{
      alert(JSON.stringify(values))
    }

  })

  return(<div>
     <h2>New Employee Form</h2>

       <form onSubmit={formik.handleSubmit}>
       <p>     
         <label htmlFor="Id">Employee ID</label>
         <input name="Id" {...formik.getFieldProps("Id")} ></input>
         
         </p>
        <p>
         <label htmlFor="Name">Employee Name</label>
         <input name="Name" {...formik.getFieldProps("Name")}></input>
         {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> :null}
         </p>
         <p>
         <label htmlFor="Location">Employee Location</label>
         <input name="Location" {...formik.getFieldProps("Location")}></input>
         {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> :null}
         </p>
         <p>
         <label htmlFor="Id">Employee Salary</label>
         <input name="Salary" {...formik.getFieldProps("Salary")}></input>
         {formik.touched.Salary && formik.errors.Salary ? <span style={{color:'red'}}>{formik.errors.Salary}</span> :null}
         </p>

         <p>
         <label htmlFor="emailId">Employee Email</label>
         <input name="emailId" {...formik.getFieldProps("emailId")}></input>
         {formik.touched.emailId && formik.errors.emailId ? <span style={{color:'red'}}>{formik.errors.emailId}</span> :null}
         </p>
        
         <button type="submit">create</button>
      
       </form>
     
  </div>);

}

const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));
