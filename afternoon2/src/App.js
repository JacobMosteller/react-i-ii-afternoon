import React, { Component } from 'react';
import Top from './Top.js'
import Box from './Box.js'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      people: {
        jacob:{
          number: '1/4',
          name:  `Jacob Mosteller`,
          age: 20,
          favBand: `Weezer`,
          favDrink: `Coke zero`
        },
        kaylah:{
          number: '2/4',
          name: `Kaylah Mosteller`,
          age: 21,
          favBand: 'Ice Nine Kills',
          favDrink: `Sprite`
        },
        jet:{
          number: '3/4',
          name: `Jet Mosteller`,
          age: `4 Months`,
          favBand: `Weezer`,
          favDrink: `Milk`
        },
        jaiden:{
          number: '4/4',
          name: 'Jaiden Armsrong',
          age: 18,
          favBand: 'Linkin Park',
          favDrink: 'Pibb ex'
        }
      },
      person: 'jacob',
    }

    this.nextCycle=this.nextCycle.bind(this);
    this.previousCycle=this.previousCycle.bind(this);
  }
  
  

  nextCycle(){
    if(this.state.person === 'jacob' ){
     return this.setState({
       person: 'kaylah'
     });
    }
    else if(this.state.person === 'kaylah'){
     return this.setState({
       person:'jet'
     });
    }
    else if(this.state.person === 'jet'){
     return this.setState({
       person:'jaiden'
     });
    }
    else if(this.state.person === 'jaiden'){
      return this.setState({
        person:'jacob'
      });
    
  }
}
  previousCycle(){
    if(this.state.person === 'jacob' ){
      return this.setState({
        person: 'jaiden'
      });
     }
     else if(this.state.person === 'kaylah'){
      return this.setState({
        person:'jacob'
      });
     }
     else if(this.state.person === 'jet'){
      return this.setState({
        person:'kaylah'
      });
     }
     else if(this.state.person === 'jaiden'){
      return this.setState({
        person:'jet'
      });
    }
  }
     
  


  render() {
    return (
      <div className="App">
      <div>
      <Top/>
      </div>
        <header className="App-header">
        <div className="text">
          <Box peopleArr={this.state.people} dude={this.state.person}/>
        </div>
        <div className='nextbar'>
          <p onClick={this.previousCycle} className='next'>{`< Previous`}</p>
          <p onClick={this.nextCycle} className='next'>Next ></p>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
