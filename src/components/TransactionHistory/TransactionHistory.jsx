import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => (
  <>
    <table className={css.transaction__table}>
      <thead className={css.transaction__tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transaction__tableBody}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transaction__tableData}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default TransactionHistory;