import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

function App() {
  const [review, setReview] = useState(() => {
    const savedFeedback = localStorage.getItem("review");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(review));
  }, [review]);

  const totalFeedback = review.good + review.neutral + review.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((review.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (reviewOption) => {
    setReview({ ...review, [reviewOption]: review[reviewOption] + 1 });
  };

  const resetFeedback = () => {
    setReview({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("review");
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          review={review}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}

export default App;
