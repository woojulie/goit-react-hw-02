import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";

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

  const updateFeedback = (reviewOption) => {
    setReview({ ...review, [reviewOption]: review[reviewOption] + 1 });
  };

  function resetFeedback() {
    setReview({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("review");
  }

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      <Feedback review={review} />
    </div>
  );
}

export default App;
