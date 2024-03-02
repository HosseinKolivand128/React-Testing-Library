import './App.css';
import Banner from './components/banner/Banner';
import { Routes ,Route } from "react-router-dom"
import TodoPage from './pages/todoPage/TodoPage';
import FollowersPage from './pages/followersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route strict exact path="/" element={<TodoPage/>}/>
        <Route strict exact path="/followers" element={<FollowersPage/>}/>
      </Routes>
    </div>
  );
}

export default App;