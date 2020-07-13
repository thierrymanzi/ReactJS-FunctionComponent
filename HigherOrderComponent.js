/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';



function ReportHOC(InputComponent,Inputdata){

  return class extends React.Component{

    constructor(props){
     super(props)
     this.state={
       data:[],
       columns:Inputdata.columns,
       header:Inputdata.header
     }

      }

      componentDidMount(){

        fetch(Inputdata.url)
        .then(res=>res.json())
        .then(result=>{this.setState({
           data:result
        });

        }
        ); 

      }

  

      render(){

        return(<div>
         <Data data={this.state}></Data>

        </div>)
      }

  }

}

class Data extends React.Component{
  constructor(props){

    super(props)
  }

render(){

return(
<div>
<h2>{this.props.data.header}</h2>
<table>
  
  <tr>
    {this.props.data.columns.map(c=>{
      <th>{c}</th>

    })}
  </tr>

  <tbody>
     {this.props.data.data.map(r=>{
      <tr key={r.Id}>
          {this.props.data.columns.map(c=>{
          <td>{r[c]}</td>
          })}
      </tr>
    })}

  </tbody>

</table>

</div>
);

}

}



class Report extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(<div></div>)
  }
  
}


const EmployeeReports=ReportHOC(Report,{url:'https://localhost:44306/api/employee',
columns:['Id','Name','Location','Salary'],header:'Employee Data'});

const DepartementReport=ReportHOC(Report,{url:'https://localhost:44306/api/departement',
columns:['Id','Name','Revenue'],header:'Departement Data'});


class AdminDashboard extends React.Component{

  constructor(props){

    super(props)
  }

  render(){

    return(
    <React.Fragment>
        <EmployeeReports></EmployeeReports>
        <DepartementReport></DepartementReport>
    </React.Fragment>


    );

  }
  
}

const element=<AdminDashboard></AdminDashboard>
ReactDOM.render(element,document.getElementById("root"));
