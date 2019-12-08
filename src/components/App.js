import React from 'react';
var random = require('./Helper').random;
var randomColor = require('./Helper').randomColor;
var clone = require('./Helper').clone;
//var Display = require('./Display');
var Target = require('./Target');
var Score = require('./Score');

/*
var playStartSound = require('./Helper').playStartSound;
var playSongSound = require('./Helper').playSongSound;
var pauseSongSound = require('./Helper').pauseSongSound;
var playBleepSound = require('./Helper').playBleepSound;
var playGameOverSound = require('./Helper').playGameOverSound;
var Ranking = require('./Ranking');
*/

class App extends React.Component {

    state = {
      game: false,
      targets: {},
      targetNumbers: 1,
      latestClick: 0,
      topNumber: 200,
      higherNumber: 0
    }

    intervals=  null;

    createTarget(key, ms) {
        ms = ms || random(1000, 2000);
        this.setState(
            {
                targetNumbers: this.state.targetNumbers + 1,
            }
        );
        this.intervals.push(setInterval(function(){
            var targets = clone(this.state.targets);
            var num = random(1, this.state.topNumber) + random(1, this.state.topNumber);
            targets[key] = targets[key] !== 0 ? 0 : num;
            this.setState({ targets: targets });
        }.bind(this), ms));
    }

    hitTarget = (e) => {
        if (e.target.className !== 'target') return;
        var num = parseInt(e.target.innerText);
        if(this.state.targetNumbers < 24){
            var key = Math.random().toFixed(4);
            this.createTarget(key);
        }

        var top = this.state.topNumber;
        var higherNumberClicked = this.state.higherNumber;
        if(num > higherNumberClicked){
            higherNumberClicked = num;
            //playBleepSound();
        }
        this.setState({ higherNumber: higherNumberClicked, latestClick: num, topNumber: top + 200 });
    }

    startGame = () => {
        //playSongSound();
        this.createTarget('first', 5000);
        this.setState({
            game: true,
            gameOver: false,
            latestClick:  0,
            topNumber:    200,
            higherNumber: 0,
            targetNumbers: 1
        });
    }

    playStartSound = () => {
        //playStartSound();
    }

    endGame() {
        //pauseSongSound();
        //playGameOverSound();
        this.intervals.forEach(function(int){
            clearInterval(int);
        });
        this.intervals = [];
        this.setState({
            game:         false,
            gameOver:     true,
            targets:      {},
            latestClick:  0,
            targetNumbers: 1
        });
    }

    UNSAFE_componentWillMount() {
        this.intervals = [];
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.latestClick < prevState.latestClick) {
            this.endGame();
        }
    }

    render() {

        var buttonStyle = {
            display: this.state.game ? 'none' : 'inline-block'
        };

        var hintStyle = {
            display: this.state.game ? 'none' : 'block'
        };

        var fieldStyle = {
            visibility: this.state.game ? 'visible' : 'hidden',
            position:'absolute',
            width: '85%',
            left: '5%',
            height: '70%'
        }

        var gameOverStyle = {
            visibility: this.state.gameOver ? 'visible' : 'hidden'
        };

        var targets = [];
        var colorTarget = randomColor();
        for (var key in this.state.targets) {
            targets.push(
                <Target color={colorTarget} number={this.state.targets[key]} key={key} />
            );
        }

        return (
            <div>
                <Score startTime={this.state.game} higherNumber={this.state.higherNumber} />

                <div style={buttonStyle}>
                    <div style={gameOverStyle} className='gameOver'>Game Over!</div>

                    <button style={buttonStyle} onMouseOver={this.playStartSound} onClick={this.startGame}>New Game </button>

                    <div style={hintStyle} className='hint'>Click a higher number every time!</div>
                </div>

                <div style={fieldStyle} onClick={this.hitTarget} >{targets}</div>
            </div>
    );
  }
};

export default App;
