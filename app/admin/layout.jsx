import React from 'react'
import Sidebar from '../componnets/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
      <div><Sidebar/></div>
      {children}
    </div>
  )
}

export default Layout
