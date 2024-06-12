import css from "./Notification.module.css";
function Notification({ info }) {
  return<p className={css.text__notification}>{info}</p>;
}

export default Notification;

