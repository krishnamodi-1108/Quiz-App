import React from 'react';
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;



const ProgressBar = props => {
    const {currentQuestionIndex, totalQuestionsCount, color} = props
    // const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100

    return(
    <Container color= {color} >
        <div className='counter'>
        <progress value= {currentQuestionIndex} max = {totalQuestionsCount} />
        <span >{currentQuestionIndex} / {totalQuestionsCount}</span>
        </div>
    </Container>
    )
    
};
// const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
//     const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100
    
//     return (
//       <div className="progressBar">
//         <div className="text">
//           {currentQuestionIndex} answered 
//           ({totalQuestionsCount - currentQuestionIndex} remaining)
//         </div>
//         <div className="inner" style={{ width: `${progressPercentage}%` }} />
//       </div>
//     )
//   }

ProgressBar.propTypes = {
    value : PropTypes.number.isRequired,
    max : PropTypes.number.isRequired
};

// ProgressBar.defaultProps = {
//     max : 100
// };

export default ProgressBar;