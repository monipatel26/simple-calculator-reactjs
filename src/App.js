import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserInput from './UserInput/userInput';
import UserOutput from './UserOutput/userOutput';

const operations = {' + ' : function (x,y) {
        return x+y;
    }, ' - ' : function (x,y) {
        return x-y;
    }, ' * ' : function (x,y) {
        return x*y;
    }, ' / ' : function (x,y) {
        if(y == 0){
            return 'Invalid Value'
        } else {
            return x / y;
        }
    }};

class App extends Component{
  state = {
    inputv: '0',
    result: '0'
  };

  valueChanged = (event) =>{
      var expr = '';
      if((this.state.inputv == '0' && !(event.target.value in operations)) || this.state.result != '0') {
          expr = event.target.value;
      } else if(event.target.value in operations){
          expr = this.state.inputv + event.target.value;
          if(event.target.value in operations && expr.substr(-6,3) in operations){
              expr = expr.slice(0,-3)
          }
      } else {
            expr = this.state.inputv + event.target.value;
      }
      this.setState({inputv: expr, result: '0'});

  }

  results = () =>{
      const expr = this.state.inputv.split(" ");
      var res = 0;
      if(expr.length < 2)
          res = expr[0]
      else {
          for (var i = 0; i < expr.length; i++) {
              if (' ' + expr[i] + ' ' in operations) {
                  var num1 = parseInt(expr[i - 1]);
                  var num2 = expr[i + 1] ? parseInt(expr[i + 1]) : 'false';
                  if (num2 != 'false') {
                      var total = operations[' ' + expr[i] + ' '](num1, num2);
                      if (total == 'Invalid Value')
                          res = total;
                      else
                          res = res + total;
                      expr.splice(i, 2)
                      expr[0] = res;
                      if(expr.length > 2){
                          res = 0;
                      }
                      i = 0;
                  } else {
                      res = '0';
                  }
              }
          }
      }
      this.setState({result: res});
  }

  clear = (event) => {
    this.setState({inputv : '0', result: '0'})
  }

  backspace = () =>{
      if(this.state.result == '0')
          if(this.state.inputv.substr(-3,3) in operations)
              this.setState({inputv : this.state.inputv.slice(0,-3)})
          else
              this.setState({inputv : this.state.inputv.slice(0,-1)})
  }

  render() {
    return (
        <div className="App">
            <div className="header text-center d-block">
                <div>C</div>
                <div>A</div>
                <div>L</div>
                <div>C</div>
                <div>U</div>
                <div>L</div>
                <div>A</div>
                <div>T</div>
                <div>O</div>
                <div>R</div>
            </div>
            <div className="calculator">
                <div className="row no-gutters">
                    <div className="col-12">
                        <UserOutput inputv={this.state.inputv.replace(',','')} result={this.state.result}/>
                    </div>
                    <div className="col-12">
                        <UserInput input={this.valueChanged} inputv={this.state.inputv} equal={this.results} clear={this.clear} backspace={this.backspace}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
