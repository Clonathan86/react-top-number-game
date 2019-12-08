import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import random from '../util/Helper.random';

class Target extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.number != nextProps.number;
  }

  buildTarget(){
      const { number } = this.props;
      const visibility = number ? 'visible' : 'hidden';
      const targetClassName = classnames('target', {
          [`target--${visibility}`]: !!visibility
      });

      const style = {
        left: random(100) + '%',
        top:  random(100) + '%',
      };

      return (
        <span style={style} className={targetClassName} >
          {number}
        </span>
      );
  }

  render() {
      <>
        {this.buildTarget()}
      </>
  }
}

Target.propTypes = {
    number: PropTypes.number.isRequired,
}

module.exports = Target;
