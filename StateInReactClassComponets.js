import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class CountCharacters extends React.Component{
counter=0
  constructor(props){

    super(props)
  
    this.state={
      message:'',
      counter:10
    };
  }

  onMessageChange(text){
    this.setState({
      message:'message has '+text.length+'number of characters'
  });
   
  }

render(){

        return <div>
            <h1>Welcome To count Characters components</h1>
            <p>
          <label>Enter a message:<input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></label>

            </p>

            <p>
              <label>the message has<b>{this.state.message}</b></label>
            </p>
            <p>
              <label>the message has<b>{this.state.counter}</b></label>
            </p>
        </div>

}


}


class Employee extends React.Component{
  
  state={counter:0};

  addEmployee =() =>{
    this.setState({counter:this.state.counter+1});
      // alert("Add Employee");
    // alert("Add Employee is Clicked"+this.counter+"times");

  }

  render(){
  
    return <div>
            <h1>Welcomto Employee</h1>

            <p>
            <button onClick={this.addEmployee}>Add Employee</button>
            </p>
            <p>
  <label>Add Employee buttion is clicked<b> {this.state.counter}</b> times</label>

            </p>
   
    </div>

  }
}
// const element =<Employee></Employee>
const element=<CountCharacters></CountCharacters>

ReactDOM.render(element,document.getElementById("root"));
