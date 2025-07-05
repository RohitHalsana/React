import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'
import HelperBot from './components/HelperBot/HelperBot'

const Layout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
            <HelperBot/>
        <Footer/>
    </>
  )
}

export default Layout