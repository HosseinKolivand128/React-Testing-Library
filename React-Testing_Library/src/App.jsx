import './App.css';
import Banner from './components/banner/banner';
import { Routes ,Route } from "react-router-dom"
import TodoPage from './pages/todoPage/todoPage';
import FollowersPage from './pages/followersPage/followersPage';

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