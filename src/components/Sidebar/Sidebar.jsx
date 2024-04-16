import React from 'react'
import "./Sidebar.css"
import Logo from '../../assets/logo2.png'
import Home from '../../assets/home.svg'
import Transfer from "../../assets/transfer.svg"
import User from "../../assets/user.svg"
import Credit from "../../assets/credit-card 1.svg"
import Investment from "../../assets/investment.svg"
import Loan from "../../assets/loan.svg"
import Econometrics from "../../assets/econometrics.svg"
import Service from "../../assets/service.svg"
import SettingLogo from "../../assets/settinglogo.svg"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div>
        <img src={Logo} alt="Logo" height={40} width={200} className='logo' />
        </div>
<div className='sidebar-items'>

    <div className='item item-selected'>
    <div className='border border-selected'></div>
<img src={Home} alt="Home Logo" />
<p className='item-selected'>Dashboard</p>
    </div>

    <div className='item '>
    <div className='border'></div>
<img src={Transfer} alt="Home Logo" />
<p className='Logo-Content  '>Transaction</p>
    </div>
    <div className='item '>
    <div className='border'></div>
<img src={User} alt="Home Logo" />
<p className='Logo-Content '>Accounts</p>
    </div>
    <div className='item '>
    <div className='border'></div>
<img src={Investment} alt="Home Logo" />
<p className='Logo-Content '>Investments</p>
    </div>

    <div className='item '>
    <div className='border'></div>
<img src={Credit} alt="Home Logo" />
<p className='Logo-Content '>Credit Card</p>
    </div>
  
    <div className='item '>
    <div className='border'></div>
<img src={Loan} alt="Home Logo" />
<p className='Logo-Content  '>Loans</p>
    </div>
    <div className='item '>
    <div className='border'></div>
<img src={Service} alt="Home Logo" />
<p className='Logo-Content '>Services</p>
    </div>
    <div className='item '>
    <div className='border'></div>
<img src={Econometrics} alt="Home Logo" />
<p className='Logo-Content '>My Privilege</p>
    </div>
    <div className='item '>
    <div className='border'></div>
<img src={SettingLogo} alt="Home Logo" />
<p className='Logo-Content '>Settings</p>
    </div>

</div>



    </div>
  )
}

export default Sidebar