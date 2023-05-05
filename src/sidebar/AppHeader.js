import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CAvatar, CHeader, CHeaderToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilUser } from '@coreui/icons'
import '@coreui/coreui/dist/css/coreui.min.css'


const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader style={{ backgroundColor: 'grey' }} position='sticky'>
      <div
        className='display-flex justify-content-between w-100per'>
        <CHeaderToggler onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}>
          <CIcon icon={cilMenu} className='color-white' size="lg" />
        </CHeaderToggler>

        <CAvatar className='cursor' color="light" textColor="white" src={localStorage.getItem('photoURL')}>
          <CIcon className='color-gray' title='Profile Image' icon={cilUser} size="sm" />
        </CAvatar>
      </div>
    </CHeader>
  )
}

export default AppHeader
