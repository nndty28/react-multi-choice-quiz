import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.option === props.selectedAnswer}
        id={props.option}
        value={props.option}
        disabled={props.selectedAnswer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.option}>
        {props.option}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  option: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
