import css from "./Profile.module.css";

const UserCard = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
  <>
    <div className={css.user__card}>
      <div className={css.user__cardBody}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.user__name}>{username}</p>
        <p className={css.user__tag}>@{tag}</p>
        <p className={css.user__location}>{location}</p>
      </div>

      <ul className={css.user__cardStats}>
        <li className={css.user__cardStatsItem}>
          <span className={css.stat__name}>Followers</span>
          <span className={css.stat__counter}>{followers}</span>
        </li>
        <li>
          <span className={css.stat__name}>Views</span>
          <span className={css.stat__counter}>{views}</span>
        </li>
        <li>
          <span className={css.stat__name}>Likes</span>
          <span className={css.stat__counter}>{likes}</span>
        </li>
      </ul>
    </div>
  </>
);

export default UserCard;