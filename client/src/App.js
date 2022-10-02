import './App.css';
import { HomeScreen } from './Screens/Home/Home.Screen';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
