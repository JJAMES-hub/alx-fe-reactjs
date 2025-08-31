import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <MainContent />

      <h1>My Favorite Cities</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Brian" age="30" bio="A foodie and travel enthusiast" />
      <UserProfile name="Chloe" age="28" bio="Enjoys painting and reading novels" />

      <Footer />
    </>
  );
}

export default App;


