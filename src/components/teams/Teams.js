import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Teams.css'
import TeamsContentBlock from '../teamsContentBlock/TeamsContentBlock'

function Teams({pageHistory}) {

  const navigate = useNavigate()

  useEffect(() => {
    if(pageHistory === 'home'){
      pageHistory = '/'
      navigate(pageHistory, {replace: false})
    } else{
      navigate('/' + pageHistory, {replace: true})
    }
  },[pageHistory])

  const teamsArr = ['Наталья Светличная', 'Ярослав Жуков', 'Валентина Филина']
  const teamsList = teamsArr.map((elem,i) => <TeamsContentBlock key={i} teamName={elem} />)

  return (
    <div className='teams_block'>
      <h1 className='teams_heading'>Команды</h1>
      <div className="teams_inner_content">
        {teamsList}
      </div>
    </div>
  )
}

export default Teams