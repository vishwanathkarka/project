import React from "react";
import Logo from "../../assets/logo.png"
import "./Header.css"
const Header = () =>{
    return(
<div className="header">
<img src={Logo} alt="Logo" height={40} width={100}  />
</div>
    )
}

export default  Header
