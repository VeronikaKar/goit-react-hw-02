import css from "./Options.module.css";

function Options({
  good,
  neutral,
  bad,
  reset,
  handleResetClick,
  updateFeedback,
  totalFeedback,
}) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button className={css.btn}
          onClick={(event) =>
            updateFeedback(event.target.innerText.toLowerCase())
          }
        >
          {good}
        </button>
      </li>
      <li className={css.item}>
        <button className={css.btn}
          onClick={(event) =>
            updateFeedback(event.target.innerText.toLowerCase())
          }
        >
          {neutral}
        </button>
      </li>
      <li className={css.item}>
        <button className={css.btn}
          onClick={(event) =>
            updateFeedback(event.target.innerText.toLowerCase())
          }
        >
          {bad}
        </button>
      </li>
      {totalFeedback > 0 && (
        <li className={css.item}>
          <button className={css.btn}
            onClick={() => {
              handleResetClick();
            }}
          >
            {reset}
          </button>
        </li>
      )}
    </ul>
  );
}

export default Options;