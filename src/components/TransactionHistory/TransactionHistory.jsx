import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({items = [] }) => { 
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
        
        <TransactionItem
          key={item.id} 
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
    </tbody>
</table>
};

TransactionItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};