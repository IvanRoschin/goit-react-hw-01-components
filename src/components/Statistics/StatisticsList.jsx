import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { Section } from 'components/Section/Section';
import {
  StatisticsCard,
  Title,
  List,
  ListItem,
} from './StatisticsList.stylized';

export const StatisticsList = ({ title, items = [] }) => {
  return (
    <Section title="Statistics">
      <StatisticsCard>
        {title && <Title>{title}</Title>}
        <List>
          {items.map(item => (
            <ListItem key={item.id}>
              <Statistics label={item.label} percentage={item.percentage} />
            </ListItem>
          ))}
        </List>
      </StatisticsCard>
    </Section>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
