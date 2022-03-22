import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Settings.css'
import SettingsContentInfo from '../settingsContentInfo/SettingsContentInfo'

function Settings({pageHistory}) {

  const navigate = useNavigate()

  useEffect(() => {
    if(pageHistory === 'home'){
      pageHistory = '/'
      navigate(pageHistory, {replace: false})
    } else{
      navigate('/' + pageHistory, {replace: true})
    }
  },[pageHistory,navigate])

  return (
    <div className='settings_block'>
      <div className="settings_block_header">
        <span className='settigns_header_button'>Вернуться назад</span>
        <h1 className='settings_heading'>Имя сотрудника</h1>
      </div>
      <div className="settings_content">
        <div className="settings_inner_content">
          <div className="settings_inner_content_theme">
            Карточка сотрудника
          </div>
          <SettingsContentInfo />
          <div className="settings_inner_content_theme">
            Занятость сотрудника
          </div>
          <table className='content_tasks_block'>
            <thead>
              <tr>
                <th>Клиент ...</th>
                <th>Проект ...</th>
                <th>Этап ...</th>
                <th>Дедлайн ...</th>
                <th>Статус ...</th>
              </tr>
            </thead>
            <tbody>
              <TableTaskField />
              <TableTaskField />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const TableTaskField = () => {
  const [time,setTime] = useState('')
  const [date,setDate] = useState('')
  const [part,setPart] = useState('Название этапа')
  const [client,setClient] = useState('')
  return(
    <tr>
      <td>
        <input type="text" placeholder={'Введите текст...'} />
      </td>
      <td className='project_tabel_field'>
        <input type="text" placeholder={'Текст...'} value={client} onChange={e => setClient(e.target.value)} />
        <span className='project_table_button'></span>
      </td>
      <td>
        <input type="text" value={part} onChange={e => setPart(e.target.value)} />
      </td>
      <td>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" value={time === '' ? '00:00'  : time} onChange={e => setTime(e.target.value)}/>
      </td>
      <td>
        <span className='tabel_project_status'></span>
      </td>
    </tr>
  )
}

export default Settings