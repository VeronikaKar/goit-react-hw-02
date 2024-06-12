import css from "./Description.module.css";

function Description({ title, description }) {
  return (
    <>
      <header className={css.header__description}>
        <h1 className={css.title__description}>{title}
        </h1>
        <p className={css.text__description}>{description}
        </p>
      </header>
    </>
  );
}

export default Description;