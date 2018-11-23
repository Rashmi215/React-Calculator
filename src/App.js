import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/result_component';
import KeypadComponent from './components/keypad_component';

class App extends Component{

  constructor(props){
    super(props);
    this.state= {result: ''};
    this.baseState= this.state
  }

  calculate= ()=>{
     try{
       this.setState({ result: (eval(this.state.result) || "") + "" });
     }catch(e){
       this.setState({ result: "error" });
     }
  };

  backspace= ()=>{
    this.setState({ result: this.state.result.slice(0,-1) });
  };

  // reset= ()=>{
  //   this.setState({ result: " " });
  // };

  onClick= (button)=>{
    if(button === '='){
      this.calculate();
    }else if(button === "C"){
      this.setState(this.baseState);
    }else if(button === "CE"){
      this.backspace();
    }else{
      this.setState({ result: this.state.result + button });
    }
  };

  render(){
    return(
      <div className= "calculator-body">
         <div>
            <ResultComponent result= {this.state.result} />
            <KeypadComponent onClick= {this.onClick} />
         </div>
      </div>
    );
  }
}

export default App;
