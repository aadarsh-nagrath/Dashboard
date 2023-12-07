import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className='list'>
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className="item">
            <TocOutlinedIcon className='icon' />
          </div>
          <img
            src='https://i.pinimg.com/236x/18/aa/86/18aa86f88b2a366279f0f41a24b149d2.jpg'
            alt='avatar'
            className='avatar'
          />
        </div>
      </div> 
    </div>
  )
}

export default Navbar