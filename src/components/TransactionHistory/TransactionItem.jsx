import PropTypes from 'prop-types';

export const TransactionItem = ({type, amount, currency }) => { 
    return <tr><th>{ type }</th>
        <th>{ amount }</th>
        <th>{currency}</th>
        </tr>
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}