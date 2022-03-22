import React, { useEffect } from 'react'
import './MenuList.css';
import ListItem from '../listItem/ListItem';
import {useState} from 'react'

const logo = require('../../img/logo.png')

function MenuList({setPageHistory,hideFunction}) {
    const [menuRadioButton,setMenuRadioButton] = useState('home')

    useEffect(() => {
      setPageHistory(menuRadioButton)
    },[menuRadioButton])

    const arr = {
      home: 'Главная',
      tasks: 'Мои задачи',
      changeHistory: 'История изменений',
      teams: 'Команды',
      settings: 'Настройки'
    }

    const listItem = Object.values(arr).map((elem,i) => <ListItem key={i} pageKey={Object.keys(arr)[i]} value={elem} menuRadioButton={menuRadioButton} setMenuRadioButton={setMenuRadioButton} />)
  return (
    <>
    <div className="menu_header">
        <img src={logo} alt="logo_img" className='logo_picture'/>
        <span className='menu_button' onClick={() => hideFunction()}></span>
    </div>
    <ul className='menu_list' >
        {listItem}
    </ul>
    </>
  )
}

export default MenuList