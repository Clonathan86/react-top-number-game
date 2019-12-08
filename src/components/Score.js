var React = require('react');

class Score extends React.Component {

  constructor (props) {
    super(props)
    this.state = {count: 0, score: 0}
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.startTime && (nextProps.startTime !== this.props.startTime)){
      this.setState({count: 0})
      this.startTimer();
    }else if(!nextProps.startTime){
      this.stopTimer();
    }
    this.setState({score: Math.round(parseInt(this.props.higherNumber)-parseInt(this.state.count * 10))})
  }

  tick () {
    this.setState({count: (this.state.count + 1)})
  }
  startTimer () {
    this.setState({score: 0, count: 0})
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  render () {

    var timeDisplay = {
      visibility: this.state.count > 0 ? 'visible' : 'hidden'
    };

    return (
      <div className='timer'>
        <h1 style={timeDisplay}>Time: {this.state.count}s</h1>
        <h1 style={timeDisplay}>Top: {this.props.higherNumber}</h1>
        <h1 style={timeDisplay}>Score: {this.state.score}</h1>
      </div>
    )
  }
}

module.exports = Score;
