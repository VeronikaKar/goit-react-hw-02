import "./App.css";

// import {
//   Profile,
//   FriendList,
//   TransactionHistory,
// } from "components";
import Profile from "./components/Profile/Profile"
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div className="container">
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;