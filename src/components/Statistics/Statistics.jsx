import PropTypes from 'prop-types';
import { StatisticsLabel, StatisticsPercentage } from './Statistics.stylized';

export const Statistics = ({ label, percentage }) => {
  return (
    <>
      <StatisticsLabel>{label}</StatisticsLabel>
      <StatisticsPercentage>{percentage}</StatisticsPercentage>
    </>
  );
};
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
