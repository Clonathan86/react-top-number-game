import React from 'react';
import classnames from 'classnames';
import Display from '../components/Display';
import Target from '../components/Target';
import TopNumber from '../components/TopNumber';
import './styles/app.css';

class App extends React.Component{

  state = {
    game: false,
    targets: {},
    latestClick: 0
  };

  intervals = null;

  createTarget(key, ms) {
   ms = ms || this.random(500, 2000);
    this.intervals.push( setInterval( function() {
        let targets = this.clone(this.state.targets);
        let num = this.random(1, 1000*1000);
        targets[key] = targets[key] !== 0 ? 0 : num;
        this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget = e => {
    if (e.target.className !== 'target') return;
    let num = parseInt(e.target.innerText);
    this.state.targets.forEach( function(){
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    });

    this.setState({ latestClick: num });
  }

  random(min, max) {
    if (arguments.length === 1) {
      max = min;
      min = 0;
    }
      const r = Math.random();
      return Math.floor(r * (max - min) + min);
  }

  clone(obj) {
    let newObj = {};
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  }

  startGame = () => {
    this.createTarget('first', 750);
    this.setState({
        game: true
    });
  }

  endGame() {
    this.intervals.forEach(function(int){
        clearInterval(int);
    });
    this.intervals = [];
    this.setState({
        game: false,
        targets: {},
        latestClick: 0
    });
  }

  UNSAFE_componentWillMount() {
    this.intervals = [];
  }

  componentDidUpdate(prevState) {
    if (this.state.latestClick < prevState.latestClick) {
        this.endGame();
     }
  }

  render(){
    const btnVisibility = this.state.game ? 'none' : 'inline-block';
    const btnClassName = classnames('btn', {
      [`btn--${btnVisibility}`]: !!btnVisibility
    });

    let targets = [];

    for (let key in this.state.targets) {
      targets.push(
        <Target number={this.state.targets[key]} key={key} />
      );
    }

    return (
      <>
          <TopNumber number={this.state.latestClick} game={this.state.game} />
          <Display number={this.state.latestClick} />
          <button className={btnClassName} onClick={this.startGame}>New Game </button>
          <div className="target-container" onClick={this.hitTarget} >{targets}</div>
      </>
    );
  }
}

export default App;
