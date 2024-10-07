import React from "react";

function Feedback({ review }) {
  const totalFeedback = review.good + review.neutral + review.bad;
  if (totalFeedback === 0) {
    return <Notification message="No feedback given yet" />;
  }
  const positiveFeedbackPercentage = Math.round(
    (review.good / totalFeedback) * 100
  );

  return (
    <div>
      <ul>
        <li>Good: {review.good}</li>
        <li>Neutral: {review.neutral}</li>
        <li>Bad: {review.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
}

function Notification({ message }) {
  return <p>{message}</p>;
}

export default Feedback;
