import React, { ChangeEvent, Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State{
  datum: Date;
  dobas: number;
  meret: number;
}
class App extends Component<{},State>{

  constructor(props: {}){
    super(props);
    this.state={
      datum: new Date(),
      dobas: 0,
      meret: 12,
    }
    setInterval(() =>{
      this.setState({
        datum:new Date()
      });
    },1000);
  }

  kockadobas=()=>{
    const ujSzam=Math.floor(Math.random()*6+1);
    this.setState({
      dobas: ujSzam
    })
  }

  betumeret=(e: ChangeEvent /* InputEvent */ )=>{
    let ujMeret=parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      meret: ujMeret,
    })
  }
  
  render() {
    return <div style={{fontSize: this.state.meret + 'pt'}}>
      <p id="hello" style={{
        fontStyle: 'italic',
        color: 'aqua'
      }}>
        {this.state.datum.toLocaleString()}
        </p>
        <p className="kockadobas">Kockadobás eredménye: {this.state.dobas}</p>
        <button onClick={this.kockadobas}>Kockadobás</button>
        <input type="number" onChange={this.betumeret}></input>
    </div>;
  }
}

export default App;
