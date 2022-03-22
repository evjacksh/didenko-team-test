import { useState } from 'react';
import './App.css'
import './fonts/font.css'
import MenuList from "./components/menuList/MenuList";
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import ChangeHistory from './components/changeHistory/changeHistory';
import Teams from "./components/teams/Teams";
import Settings from "./components/settings/Settings";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  const [pageHistory,setPageHistory] = useState('home')

  const hideFunction = () => {
    document.querySelector('.menu_list').classList.toggle('hide')
    document.querySelector('.menu_list_block').classList.toggle('hide_color')
    document.querySelector('.content_side_block').classList.toggle('fullsize')
  }
  
  return (  
    <div className="app">
      <div className="menu_list_block">
        <MenuList setPageHistory={e => setPageHistory(e)} hideFunction={e => hideFunction()}/>
      </div>
      <div className="content_side_block">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home pageHistory={pageHistory}/>} />
              <Route path="/tasks" element={<Tasks pageHistory={pageHistory}/>} />
              <Route path="/changeHistory" element={<ChangeHistory pageHistory={pageHistory}/>} />
              <Route path="/teams" element={<Teams pageHistory={pageHistory}/>} />
              <Route path="/settings" element={<Settings pageHistory={pageHistory} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
