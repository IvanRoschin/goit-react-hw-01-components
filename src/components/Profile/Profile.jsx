import PropTypes from 'prop-types';
import defaultImage from '../Profile/defaultUser.jpg';
import { Section } from 'components/Section/Section';
import {
  ProfileCard,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.stylized';

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  followers,
  views,
  likes,
}) => {
  return (
    <Section title="Profile">
      <ProfileCard>
        <ProfileAvatar src={avatar ?? defaultImage} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>

        <ProfileStats>
          <ProfileStatsItem>
            <ProfileStatsLabel>Followers </ProfileStatsLabel>
            <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Views </ProfileStatsLabel>
            <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Likes </ProfileStatsLabel>
            <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
          </ProfileStatsItem>
        </ProfileStats>
      </ProfileCard>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([() => null, PropTypes.object]).isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
