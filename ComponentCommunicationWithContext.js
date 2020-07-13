const employeeContext = React.createContext();

class App extends React.Component{
  constructor(props){

     super(props);

     this.state={
     Id:101,
     Name:"Thierry",
     Location:"Rwanda",
     Salary:50000

     };

  }

  //changeEmployeeData=()=>{this.setState=({id:102});}

  render(){

    return <div>

            <h2>Welcome To App Component</h2>
            <p>

            <label>Employee ID:<b>{this.state.Id}</b></label>

            </p>

            <employeeContext.Provider value={this.state}>
              <Employee></Employee>
            </employeeContext.Provider>

            <button onClick={this.changeEmployeeData}>Update</button>

          </div>
  }
}

class Employee extends React.Component{

  render(){

    return <div>

      <h2>Welcome To Employee Component</h2>
      
      <Salary></Salary>
      
    </div>
  }
}

class Salary extends React.Component{

  render(){

    return <div>

<h2>Welcome To Salary Component</h2>
      
    </div>
  }
}

const element=<App></App>

ReactDOM.render(element,document.getElementById("root"));