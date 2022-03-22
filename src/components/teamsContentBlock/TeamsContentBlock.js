import React, {useRef} from 'react'

function TeamsContentBlock({teamName}) {

    const innerContentBlockRef = useRef()
    const contentBlockListRef = useRef()
    const teamsContentBlockRef = useRef()
    const openTeamFunc = () => {
        innerContentBlockRef.current.classList.toggle('teams_inner_content_block_active')
        contentBlockListRef.current.classList.toggle('teams_content_block_list_active')
        teamsContentBlockRef.current.classList.toggle('content_block_name_active')
    }

  return (
    <div className="teams_inner_content_block" ref={innerContentBlockRef} >
          <div className="teams_content_block_name" ref={teamsContentBlockRef} onClick={() => openTeamFunc()}>
            {teamName}
          </div>
          <ul className="teams_content_block_list" ref={contentBlockListRef}>
            <li>
                Имя Фамилия Сотрудника <span className='teams_list_item_arrow'></span>
            </li>
            <li>
                Имя Фамилия Сотрудника <span className='teams_list_item_arrow'></span>
            </li>
            <li>
                Имя Фамилия Сотрудника <span className='teams_list_item_arrow'></span>
            </li>
          </ul>
    </div>
  )
}

export default TeamsContentBlock