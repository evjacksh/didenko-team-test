import React,{useRef} from 'react'


function ListItem({value,menuRadioButton,setMenuRadioButton,pageKey}) {
  const myRef = useRef()
  const clazz = menuRadioButton === pageKey ? 'page_name_button active' : 'page_name_button'
  const radioId = menuRadioButton === pageKey ? 'active_button' : ''
  return (
    <li className="menu_list_item">
        <input type="radio" id={'radio' + value} onChange={() => {setMenuRadioButton(pageKey)}} checked={menuRadioButton === pageKey}/>
        <label htmlFor={'radio' + value} id={radioId} ref={myRef}><div className="label_inner"></div></label>
        <span className={clazz} onClick={() => myRef.current.click()} >{value}</span>
    </li>
  )
}

export default ListItem