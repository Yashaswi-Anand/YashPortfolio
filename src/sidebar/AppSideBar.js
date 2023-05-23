import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CCardImage, CSidebarBrand, CSidebarNav, CSidebarToggler, CContainer } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { navbar } from './navBar'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons'


function AppSideBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [logoutModel, setLogoutModel] = useState(false);


  return (
    <CContainer>

      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarBrand className="d-none d-md-flex cursor" to="/">
          <h4>Logo</h4>
        </CSidebarBrand>

        <CSidebarNav className='display-flex justify-content-between'>
          <SimpleBar>
            <AppSidebarNav items={navbar} />
          </SimpleBar>

          {/* <SimpleBar>
            <div className='cursor m-l-25px text-align-left p-a-10 h-50' onClick={() => setLogoutModel(!logoutModel)}>
              <span><CIcon icon={cilAccountLogout} customClassName="nav-icon" /></span>
              {!unfoldable && <span style={{ color: '#b5adad' }}> &emsp; Logout</span>}
            </div >
          </SimpleBar> */}
        </CSidebarNav>

        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />

      </CSidebar>
    </CContainer>
  )
}

export default AppSideBar