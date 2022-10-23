import PropTypes from 'prop-types';
import {
  TableString,
  PaymentType,
  AmountType,
  CurrencyType,
} from './TransactionItem.stylized';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableString>
      <PaymentType>{type}</PaymentType>
      <AmountType>{amount}</AmountType>
      <CurrencyType>{currency}</CurrencyType>
    </TableString>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
