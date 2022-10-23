import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Section } from 'components/Section/Section';
import { List, ListItem } from './FriendList.stylized';

export const FriendList = ({ items = [] }) => {
  return (
    <Section title="Friends">
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
