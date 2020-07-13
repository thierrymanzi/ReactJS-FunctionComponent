
import React from 'react';
import ReactDOM from 'react-dom';

function testComponent(){

  let testref=null;
  function handleClick(){
    testref.focus();

  }

  return(<div>
    <input type="text" ref={e=>testref=e}/>
    <input type="button" value="Focuss the Input" onClick={handleClick}/>
  </div>);
}

const element=testComponent()
ReactDOM.render(element,document.getElementById("root"));