import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import { Section } from 'components/Section/Section';
import { TransactionTable, HeaderOfTable } from './TransactionHistory.stylized';

export const TransactionHistory = ({ items = [] }) => {
  return (
    <Section>
      <TransactionTable>
        <thead>
          <tr>
            <HeaderOfTable>Type</HeaderOfTable>
            <HeaderOfTable>Amount</HeaderOfTable>
            <HeaderOfTable>Currency</HeaderOfTable>
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
      </TransactionTable>
    </Section>
  );
};

TransactionItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
