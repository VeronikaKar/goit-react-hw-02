import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <>
    <li className={css.friend__listItem} key={id}>
      <img className={css.avatar} src={avatar} alt={name} width={100} />
      <p className={css.friend__name}>{name}</p>

      <p
        className={clsx(css.friend__status, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  </>
);

export default FriendListItem;