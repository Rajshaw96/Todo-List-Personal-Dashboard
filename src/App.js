import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import Preloader from './components/Preloader';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/MyAccount';
import TodoLists from './pages/TodoLists';
import CityWeather from './pages/CityWeather';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader/>
  } else {
    return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/toDoList" element={<TodoLists />} />
          <Route path="/weather" element={<CityWeather />} />
        </Routes>
    </>
    )
  }
}

export default App;