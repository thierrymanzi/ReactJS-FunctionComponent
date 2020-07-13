/* eslint-disable no-unused-expressions */
import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';



class DisplayList extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
   
    return(

      <ul>
         {this.props.list.map(d=>(
          
         <li>{d}</li>

         ))}
       </ul>

    );

  }
}

 class Departement extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:['Dev','Big Data','Mobility']
    }
  }

  render(){

    return(<div>
       <h2>Department List...</h2>
         {this.props.render(this.state.list)}

    </div>)
  }
}

class Project extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    return(<div>
      <h2>Project List...</h2>
      {this.props.render(this.props.list)}
    </div>)
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(<div>
        <Departement render={(data)=><DisplayList list={data}></DisplayList>}></Departement>
        <Project render={(data)=><DisplayList list={['P-1','P-2','P-3']}></DisplayList> }></Project>

    </div>)
  }
}


const element=<App></App>
ReactDOM.render(element,document.getElementById("root"));
