import PropTypes from 'prop-types';
import defaultImage from '../Profile/defaultUser.jpg';



export const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
    const ifOnline = {isOnline}
    return <div className="item">
            {ifOnline
                ? <span className="status"></span>
                : <span className="status"></span>
            }
            <img className="avatar" src={avatar ?? defaultImage} alt="User avatar" width="48" />
            <p className="name">{name}</p>
    </div>

}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}