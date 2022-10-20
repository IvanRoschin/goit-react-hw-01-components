import userData from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import { Profile } from "./Profile/Profile";
import { Section } from "./Section/Section";
import { StatisticsList } from './Statistics/StatisticsList';


export const App = () => {
  return (
    <div>
<Section title="Profile">
      <Profile 
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
        />
  </Section>
      
<Section title="Statistics">
      <StatisticsList title="Upload stats"
          items={data} 
       />
</Section>

    </div>
  );
};
