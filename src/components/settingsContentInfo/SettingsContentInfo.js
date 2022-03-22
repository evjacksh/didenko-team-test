import React, {useEffect, useState} from 'react'

function SettingsContentInfo() {

  const data = {
    'ФИО': '',
    'Дата Рождения': '',
    'Гражданство': '',
    'Адрес проживания': '',
    'Руководитель группы': '',
    'Должность': '',
    'Телефон': '',
    'Почта (личная)': '',
    'Почта (рабочая, если есть)': '',
    'Дата приема на работу': '',
    'Размер оплаты труда': '',
    'Оформление': ''
  }

  const infoFormList = Object.keys(data).map((elem,i) => <InfoFormInput key={i} elem={elem} value={data[elem]} />)
  
  return (
    <div className="settings_inner_content_info">
      <div className="content_info_image_block">
        <div className="image_placeholder"></div>
      </div>
      <div className='content_info_block'>
        <div className="content_info">
          <form className="content_info_form">
            {infoFormList}
            <span className='form_button' >Сохранить</span>
          </form>
        </div>
        <div className="content_comment">
          <form className='content_comment_form'> 
            <input type="text" placeholder='Комментарии...' className='comment_form_input' />
            <span className='form_button' >Сохранить</span>
          </form>
        </div>
      </div>
    </div>
  )
}

const InfoFormInput = ({value,elem}) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(value === '' ? '...' : value)
  },[value])

  const clazz = inputValue === '...' ? 'info_form_input null' : 'info_form_input'
  return(
    <p className='info_form_field' >{elem}: <input type="text"className={clazz} value={inputValue} onChange={e => setInputValue(e.target.value)} /></p>
  )
}

export default SettingsContentInfo