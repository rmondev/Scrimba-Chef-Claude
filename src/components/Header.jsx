import React from 'react'
import { SiCodechef } from "react-icons/si";

const Header = () => {
  return (
    <header className='header-container'>
      <SiCodechef className='chef-logo' size={50} />
      <h1>Chef Claude</h1>
    </header>
  )
}

export default Header
