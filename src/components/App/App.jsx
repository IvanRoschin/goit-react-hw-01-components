import userData from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { StatisticsList } from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { Global } from '@emotion/react';
import { GlobalStyle } from 'theme/GlobalStyle';

export const App = () => {
  return (
    <div>
      <Global styles={GlobalStyle} />
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <StatisticsList title="Upload stats" items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
