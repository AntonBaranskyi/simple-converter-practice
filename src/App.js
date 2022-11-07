import "./App.css";
import { Component, useState, useEffect } from "react";
import Servisec from "./sevisec";

// class App extends Component {
//   state = {
//     value: 1,
//     usd:0,
//     funt:0,
//     lev:0,
//     euro:0
//   };

//   componentDidMount(){
//     this.setValue('Долар США');
//     this.setValue('Фунт стерлінгів');
//     this.setValue('Болгарський лев');
//     this.setValue('Євро');
//   }
//   ourServis = new Servisec();

//   setValue = (txt)=>{
//     this.ourServis.getData()
//     .then(resp=>{
//      let answ = resp.filter(item=>item.txt === txt)
//      switch(txt){
//       case 'Долар США':
//         this.setState({
//           usd : Math.floor(answ[0].rate)
//         })
//         break;
//         case 'Євро':
//           this.setState({
//             euro : Math.floor(answ[0].rate)
//           })
//           break;
//           case 'Фунт стерлінгів':
//             this.setState({
//               funt : Math.floor(answ[0].rate)
//             })
//             break;

//         case 'Болгарський лев':
//           this.setState({
//             lev : Math.floor(answ[0].rate)
//           })
//           break;

//      }

//     })
//   }
//   onChangeValue = (current)=>{
//     this.setState({
//       value :  current
//     })
//   }

//   onDefault = ()=>{
//     this.setState({
//       value : this.setState.value = 1
//     })
//   }

//   render() {
//     const {usd, funt, euro, lev} = this.state;
//     return (
//       <div className="app">
//         <div className="counter">{this.state.value} грн</div>
//         <div className="controls">
//           <button onClick={()=>this.onChangeValue(usd)}>Долари</button>
//           <button  onClick={()=>this.onChangeValue(funt)}>Фунти</button>
//           <button  onClick={()=>this.onChangeValue(euro)}>Євро</button>
//           <button  onClick={()=>this.onChangeValue(lev)}>Болгарський лев</button>
//           <button onClick={this.onDefault}>Скинути</button>
//         </div>
//       </div>
//     );
//   }
// }

function App(props) {
  let [value, setState] = useState(1);
  const [usd, setUsd] = useState(0);
  const [euro, setEuro] = useState(0);
  const [funt, setFunt] = useState(0);
  const [lev, setLev] = useState(0);

  let ourServis = new Servisec();
  const setValue = (txt) => {
    ourServis.getData().then((resp) => {
      let answ = resp.filter((item) => item.txt === txt);
      switch (txt) {
        case "Долар США":
          setUsd(Math.floor(answ[0].rate));
          break;
        case "Євро":
          setEuro(Math.floor(answ[0].rate));
          break;
        case "Фунт стерлінгів":
          setFunt(Math.floor(answ[0].rate));
          break;
        case "Болгарський лев":
          setLev(Math.floor(answ[0].rate));
          break;
      }
    });
  };

  useEffect(() => {
    console.log("effect");
    setValue("Долар США");
    setValue("Фунт стерлінгів");
    setValue("Болгарський лев");
    setValue("Євро");
  }, []);

  const onChangeValue = (current) => {
    setState(current);
  };

  const onDefault = () => {
    setState((value = 1));
  };

  return (
    <div className="app">
      <div className="counter">{value}</div>
      <div className="controls">
        <button onClick={() => onChangeValue(usd)}>Долари</button>
        <button onClick={() => onChangeValue(funt)}>Фунти</button>
        <button onClick={() => onChangeValue(euro)}>Євро</button>
        <button onClick={() => onChangeValue(lev)}>Лев</button>
        <button onClick={() => onDefault()}>Скинути</button>
      </div>
    </div>
  );
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
