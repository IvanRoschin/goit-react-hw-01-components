import PropTypes from 'prop-types';

import { Statistics } from './Statistics';

export const StatisticsList = ({ title, items = [] }) => {
    return <section className="statistics">

        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
{items.map(item => (
        <li key={item.id} className="item">
          <Statistics
            label={item.label}
            percentage={item.percentage}
          />
    </li>))}
        </ul>
    </section>
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};