import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';
import './index.css';

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <Header />
      <Profile name="Amos Korir" email="amoskorir@example.com" />
      <Counter />
    </div>
  );
};

export default App;
