import React from 'react';
import ReactDOM from 'react-dom';
import {userFormik} from 'Formik';


const validateEmployee=empData=>{

    const errors={}

    if(!empData.Name){
       errors.Name="Please Enter Employee Name";

    }
    else if(empData.name.length>20){

      errors.Name="Employe Name should not Exceed 20 Character";
    }

    if(!empData.Location){
      errors.Location="Please Enter the location";
    }

    if(!empData.EmailId){

      errors.EmailId="Please Enter Email ";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)){
      errors.EmailId="Invalid email Address";
    }

    return errors;

}

const EmployeeComponent=()=>{

    const formik=userFormik({

        initialvalue:{
          Id:'',
          Name:'',
          Location:'',
          Salary:'',
          EmailId:''

        },
        validate:validateEmployee,
        onSubmit:value=>{

          alert(JSON.stringify(value))
        }

    });
 
    return(<div>

      <h1>Create New Employee Form</h1>
      <form onSubmit={formik.handleSubmit}>
      <p>
        <label htmlFor="Id">Employee ID:</label>
        <input type="text" name="Id" id="Id"  onChange={formik.handlechange}
        value={formik.value.Id}></input>
      </p>

      <p>
      < label htmlFor="Name">Employee Name:</label>
        <input type="text" name="Name" id="Name"  onChange={formik.handlechange}
        value={formik.value.Name} onBlur={formik.handleBlur}></input>
        {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> :null}
      </p>

      <p>
      <label htmlFor="Location">Employee Location:</label>
      <input type="text" name="Location" id="Location"  onChange={formik.handlechange}
      value={formik.value.Location} onBlur={formik.handleBlur}></input>
       {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> :null}
      </p>

      <p>
      <label htmlFor="Salary">Employee Salary:</label>
      <input type="text" name="Salary" id="Salary"  onChange={formik.handlechange}
      value={formik.value.Salary} onBlur={formik.handleBlur}></input>
      </p>
      <p>
      <label htmlFor="EmailId">Employee Email:</label>
      <input type="text" name="EmailId" id="EmailId"  onChange={formik.handlechange}
      value={formik.value.EmailId} onBlur={formik.handleBlur}></input>
      {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> :null}
      </p>
      
        <button type="submit">Create</button>
  
      </form>
      </div>);
  }

const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));
