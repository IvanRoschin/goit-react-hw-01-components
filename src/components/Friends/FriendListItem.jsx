import PropTypes from 'prop-types';
import defaultImage from '../Profile/defaultUser.jpg';
import {
  FriendIsOnline,
  FriendIsOffline,
  FriendAvatar,
  FriendName,
} from './FriendListItem.stylized';

export const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
  return (
    <>
      {isOnline === true ? (
        <FriendIsOnline> </FriendIsOnline>
      ) : (
        <FriendIsOffline> </FriendIsOffline>
      )}
      <FriendAvatar src={avatar ?? defaultImage} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.oneOfType([() => null, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
