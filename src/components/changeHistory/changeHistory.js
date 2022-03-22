import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function ChangeHistory({pageHistory}) {
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
      <p className='home_paragraph'>История изменений</p>
    </div>
  )
}

export default ChangeHistory