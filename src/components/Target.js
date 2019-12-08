import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Target extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.number !== nextProps.number;
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

  buildTarget(){
      const { number } = this.props;
      const visibility = number ? 'visible' : 'hidden';
      const targetClassName = classnames('target', {
          [`target--${visibility}`]: !!visibility
      });

      const style = {
        left: this.random(100) + '%',
        top:  this.random(100) + '%',
      };

      return (
        <span style={style} className={targetClassName} >
          {number}
        </span>
      );
  }

  render() {
    return (
      <>
        {this.buildTarget()}
      </>
    );
  }
}

Target.propTypes = {
    number: PropTypes.number.isRequired,
}

export default Target;
