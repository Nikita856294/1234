import './App.css';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { Container } from './components/Container/Container';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { FriendList } from './components/FriendsList/FriendsList';
import { Transaction } from './components/Transactions/Transaction';
import transactions from './json/transaction.json';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
function App() {
  return (
    <div className="root">
      <GlobalStyle />
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <Transaction transactions={transactions} />
      </Container>
    </div>
  );
}

export default App;
