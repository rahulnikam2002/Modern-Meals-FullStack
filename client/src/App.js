import './App.css';
import { HomeScreen } from './Screens/Home/Home.Screen';
import { Route, Routes } from 'react-router-dom';
import { SearchScreen } from './Screens/Search/search.screen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/search' element={<SearchScreen />} />
      </Routes>
    </div>
  );
}

export default App;
