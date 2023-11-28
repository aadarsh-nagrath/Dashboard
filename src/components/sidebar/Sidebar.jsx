import React from 'react'
import './sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <li>
            <GridViewIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">Main</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <p className="title">Analytics</p>
          <li>
            <span>Notifications</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <p className="title">Services</p>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <p className="title">User</p>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="themeOptions"></div>
        <div className="themeOptions"></div>
        <div className="themeOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar