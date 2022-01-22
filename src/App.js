import './App.css';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { Container } from './components/Container/Container';
import user from './json/user.json';
import data from './json/data.json';
function App() {
  return (
    <div className="root">
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
        <Statistics
          title="Upload stats"
          stats={[
            { id: 'id-1', label: '.docx', percentage: 22 },
            { id: 'id-2', label: '.pdf', percentage: 4 },
            { id: 'id-3', label: '.mp3', percentage: 17 },
            { id: 'id-4', label: '.psd', percentage: 47 },
            { id: 'id-5', label: '.pdf', percentage: 10 },
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
