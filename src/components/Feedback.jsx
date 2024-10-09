import React from "react";

function Feedback({ review, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <div>
      <ul>
        <li>Good: {review.good}</li>
        <li>Neutral: {review.neutral}</li>
        <li>Bad: {review.bad}</li>
        <li>Total feedback: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
