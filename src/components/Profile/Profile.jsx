import PropTypes from 'prop-types';
import defaultImage from '../Profile/defaultUser.jpg';

export const Profile = ({username, tag, location, avatar = defaultImage, followers,  views, likes}) => { 
    return <div className="profile">
  <div className="description">
            <img
                src={avatar ?? defaultImage}
                alt={username}
      className="avatar"
    />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers </span>
                <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
                <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
                <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
} 

Profile.propTypes = { 
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}