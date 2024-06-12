import css from "./Feedback.module.css";

function Feedback({ state, totalFeedback, positivePercentage }) {
  const { good, neutral, bad } = state;
  return (
    <ul className={css.feedback__list}>
      <li className={css.feedback__item}>Good: {good}</li>
      <li className={css.feedback__item}>Neutral: {neutral}</li>
      <li className={css.feedback__item}>Bad: {bad}</li>
      <li className={css.feedback__item}>Total: {totalFeedback}</li>
      <li className={css.feedback__item}>Positive: {positivePercentage}%</li>
    </ul>
  );
}

export default Feedback;