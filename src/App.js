import "./App.css";
import { Component } from "react";
import Servisec from "./sevisec";

class App extends Component {
  state = {
    value: 1,
    usd:0,
    funt:0,
    lev:0,
    euro:0
  };

  componentDidMount(){
    this.setValue('Долар США');
    this.setValue('Фунт стерлінгів');
    this.setValue('Болгарський лев');
    this.setValue('Євро');
  }
  ourServis = new Servisec();

  setValue = (txt)=>{
    this.ourServis.getData()
    .then(resp=>{
     let answ = resp.filter(item=>item.txt === txt)
     switch(txt){
      case 'Долар США':
        this.setState({
          usd : Math.floor(answ[0].rate)
        })
        break;
        case 'Євро':
          this.setState({
            euro : Math.floor(answ[0].rate)
          })
          break;
          case 'Фунт стерлінгів':
            this.setState({
              funt : Math.floor(answ[0].rate)
            })
            break;

        case 'Болгарський лев':
          this.setState({
            lev : Math.floor(answ[0].rate)
          })
          break;
         
     } 
     
    })
  }
  onChangeValue = (current)=>{
    this.setState({
      value : 1 * current
    })
  }

  onDefault = ()=>{
    this.setState({
      value : this.setState.value = 1
    })
  }

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.value} грн</div>
        <div className="controls">
          <button onClick={()=>this.onChangeValue(this.state.usd)}>Долари</button>
          <button  onClick={()=>this.onChangeValue(this.state.funt)}>Фунти</button>
          <button  onClick={()=>this.onChangeValue(this.state.euro)}>Євро</button>
          <button  onClick={()=>this.onChangeValue(this.state.lev)}>Болгарський лев</button>
          <button onClick={this.onDefault}>Скинути</button>
        </div>
      </div>
    );
  }
}
export default App;
//   let res = getData();
//   res.then(resp=>{
//       return resp.filter(item=>{
//         return item.txt == 'Долар США';
//     })
//   }).then(answ=>{
//     setUsd(Math.floor(answ[0].rate))
//   })
// },[])
