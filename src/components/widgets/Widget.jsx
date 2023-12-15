import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({type}) => {
  //Creating a dummy data
  const amt = 200, diff = 30;
  let data;
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See All The Users",
        percentage: "20%",
        icon: <PersonOutlineOutlinedIcon className='icon' style ={{
          color: "crimson",
          backgroundColor: "rgba(255,0,0,0.2)",
        }} />
      }
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "See All The Orders",
        percentage: "20%",
        icon: <ShoppingCartOutlinedIcon className='icon' 
        style ={{
          color: "goldenrod",
          backgroundColor: "rgba(218,165,32,0.2)",
        }} />
      }
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "See All The Earnings",
        percentage: "20%",
        icon: <PaidOutlinedIcon className='icon' 
        style ={{
          color: "green",
          backgroundColor: "rgba(0,128,0,0.2)",
        }} />
      }
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See All The Balance",
        percentage: "20%",
        icon: <AccountBalanceWalletOutlinedIcon className='icon' 
        style ={{
          color: "purple",
          backgroundColor: "rgba(128,0,128,0.2)",
        }} />
      }
      break;
    default:
      break;
  }

  //Data is ready

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amt}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget;