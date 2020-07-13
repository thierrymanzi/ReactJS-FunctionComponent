import React from 'react';
import ReactDOM from 'react-dom';

class CustomErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state={hasError:null}
  }

  static getDerivedStateFromError(error){
    return{hasError:true}
  }

  componentDidCatch(error,errorInfo){
    console.log(error);
    console.log(errorInfo);
     }

     render(){
        
      if(this.state.hasError){

        return(<div>
          <h2>We are having problem to Load your preferences Now.</h2>
        </div>)
      }else{
        return this.props.children
      }
     
     }
  
}

class OrderComponent extends React.Component{

 constructor(props){

  super(props)

  this.state={quantity:'',address:''}

 }

 orderInfochanged=val=>{
   this.setState({quantity:val})
 }

 addresschanged=val=>{
  this.setState({address:val})
}

 render(){
    
  return (<div>
    <h2>Product Order Change screen</h2>

    <ProductInformationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfochanged}></ProductInformationComponent>
    <AddressComponent address={this.state.address} onAddressChanged={this.addresschanged}></AddressComponent>
    <SummaryComponent address={this.state.address} quantity={this.state.quantity} onQuantityChange={this.orderInfochanged}></SummaryComponent>
  </div>);

  }

}


class ProductInformationComponent extends React.Component{

  constructor(props){
 
   super(props)
 
  }
 
  handlechange=e=>{
   this.props.onQuantityChange(e.target.value)

  }

  render(){

    return (<div style={{border:'solid red'}}>
      <h2>Productn Information</h2>
      <p>
        <label>Product Name: 
          <select>
            <option value="Product-1">Product-1</option>
            <option value="Product-2">Product-2</option>
            <option value="Product-3">Product-3</option>
          </select>
        </label>
      </p>
      <p>
        <label>Enter Quantity:<input type="text" value={this.props.quantity} onChange={this.handlechange}></input></label>
      </p>
    </div>
    );
  }
   
  }

 class AddressComponent extends React.Component{

  constructor(props){
 
   super(props)
 
  }
 
  handlechange=e=>{
   this.props.onAddressChanged(e.target.value)
  }
  render(){

    return(<div style={{border:'solid red'}}>
      <h2>Address Information...</h2>
      <p>
        <label>Address:
          <textarea valure={this.props.address} onChange={this.handlechange}></textarea>
        </label>
      </p>
      <CustomErrorBoundary>
      <UserPrefferedAddresList></UserPrefferedAddresList>
      </CustomErrorBoundary>
    </div>);
 
  }
 
 }

 class UserPrefferedAddresList extends React.Component{

     constructor(props){
       super(props)
     }

     render(){
      throw new Error("Not able to Load the Address List");
       
     return(<div>
        <h2>Your Existing Address ....</h2>
        <p>
          Office<br></br>
          Rwanda,Kigali-078879
        </p>
 
     </div>);

     }

 }



 class SummaryComponent extends React.Component{

  constructor(props){
 
   super(props)
 
  }
  handlechange=e=>{
    this.props.onQuantityChange(e.target.value)

  }

 
  render(){

    return(<div style={{border:'solid red'}}>
      <h2>Summary Information...</h2>
      <p>
        <label>Product Name:<b>Product-1</b></label>
      </p>
      <p>
        <label>Enter Quantity:<input type="text" value={this.props.quantity} onChange={this.handlechange}></input></label>
      </p>
      <p>
  <label>Enter Address:<b>{this.props.address}</b></label>
      </p>
      <button type="submit">Place Order</button>
    </div>);
 
  }
 
 }

 const element=<OrderComponent></OrderComponent>

 ReactDOM.render(element,document.getElementById("root"));
