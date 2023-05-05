import React from 'react'
import  AppSidebar from '../sidebar/AppSideBar'
import AppHeader from '../sidebar/AppHeader';
import AppContent from '../sidebar/AppContent';
import { useSelector } from 'react-redux';

function Dashboard() {
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  return (
    <div className={unfoldable ? sidebarShow ? 'm-l-64px': '' : sidebarShow ? 'm-l-256px' : ''}>
        <AppSidebar/>
          <div >
            <AppHeader/>
            <AppContent/>
          </div>
    </div>
  )
}

export default Dashboard