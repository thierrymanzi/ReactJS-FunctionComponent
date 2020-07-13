import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik, Field, ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';

const EmployeeComponent=()=>{

  return(
     
     <Formik initialValues={
      {
        Id:'',
        Name:'',
        Location:'',
        Salary:'',
        emailId:'',
        designation:''
  
      }}validationscheme={yup.object({

        Name:yup.string().max(20,'Employe Name should not exceed 20 characters').required('Please Enter employee name'),
        Location:yup.string().required("Please enter employee location"),
        Salary:yup.string().required('Please enter employee salary'),
        emailId:yup.string().email('Please enter a valid email').required('Please enter email ID')
      })}onSubmit={values=>{
        alert(JSON.stringify(values))
      }}>
{/* 
         {
        props=>(
          true
        )
        }  */}

        <div>
          <h2>New Employee Form</h2>
          <form >
            <p>
              <label>Employee ID</label>
              <Field name="Id" type="text"></Field>
              <ErrorMessage name="Id"></ErrorMessage>
            </p>
            <p>
              <label>Employee Name</label>
              <Field name="Name" type="text"></Field>
              <ErrorMessage name="Name"></ErrorMessage>
            </p>
            <p>
              <label>Employee Location</label>
              <Field name="Location" type="text"></Field>
              <ErrorMessage name="Location"></ErrorMessage>
            </p>
            <p>
              <label>Employee Salary</label>
              <Field name="Salary" type="text"></Field>
              <ErrorMessage name="Salary"></ErrorMessage>
            </p>
            <p>
              <label>Employee Email</label>
              <Field name="emailId" type="text"></Field>
              <ErrorMessage name="emailId" type="email"></ErrorMessage>
            </p>
            <p>
              <label>Employee designation</label>
              <Field name="designation" as="select">
                <option value="Python">Python</option>
                <option value="Django">Django</option>
                <option value="Django">Java</option>
                <option value="Sofware engeneering">Sofware engeneering</option>
              </Field>
              
            </p>
            <button type="submit">Create</button>
            
          </form>
        </div>
             </Formik>
 );

}

const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));
