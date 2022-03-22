import React, { useEffect } from 'react'
import './Home.css';
import {useNavigate} from 'react-router-dom'

function Home({pageHistory}) {
  const navigate = useNavigate()

  useEffect(() => {
    if(pageHistory === 'home'){
      pageHistory = '/'
      navigate(pageHistory, {replace: false})
    } else{
      navigate('/' + pageHistory, {replace: true})
    }
  },[pageHistory])

  return (
    <div className='home_page'>
      <p className='home_paragraph'>Выберите страницу в меню</p>
    </div>
  )
}

export default Home