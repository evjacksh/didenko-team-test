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

  const dataObject = {}
  const infoFormList = Object.keys(data).map((elem,i) => <InfoFormInput key={i} elem={elem} value={data[elem]} dataObject={dataObject} />)
  
  const [saving,setSaving] = useState(false)
  const modalClass = saving ? 'settings_modal_over modal_active' : 'settings_modal_over'

  const sendData = ((url,object) => {
    setSaving(true)    
    console.log(object);

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object)
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setSaving(false)
    });

  })

  return (
    <div className="settings_inner_content_info">
      <div className="content_info_image_block">
        <div className="image_placeholder"></div>
      </div>
      <div className='content_info_block'>
        <div className="content_info">
          <form className="content_info_form">
            {infoFormList}
            <span className='form_button'onClick={() => sendData('https://jsonplaceholder.typicode.com/posts', dataObject) } >Сохранить</span>
          </form>
        </div>
        <div className="content_comment">
          <form className='content_comment_form'> 
            <input type="text" placeholder='Комментарии...' className='comment_form_input' />
            <span className='form_button' >Сохранить</span>
          </form>
        </div>
      </div>
      <div className={modalClass}>
        <div className="settings_modal">
          Соханение...
        </div>
      </div>
    </div>
  )
}

const InfoFormInput = ({value,elem,dataObject}) => {
  
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(value === '' ? '...' : value)
  },[value])


  useEffect(() => {
    if(inputValue !== '...' || '') dataObject[elem] = inputValue
  },[inputValue])
  

  const clazz = inputValue === '...' ? 'info_form_input null' : 'info_form_input'
  return(
    <p className='info_form_field' >{elem}: <input type="text"className={clazz} value={inputValue} onChange={e => setInputValue(e.target.value)} /></p>
  )
}

export default SettingsContentInfo