import React from 'react'
import Header from '../Components/Header/Header'
import HeaderBottom from '../Components/HeaderBottom/HeaderBottom'
import Post from '../Components/Posts/Post'
import TopFooter from '../Components/TopFooter/TopFooter'
import Footer from '../Components/Footer/Footer'
const HomePage = () => {
  return (
    <div>
      <Header/>
      <HeaderBottom/>
      <Post/>
      <TopFooter/>
      <Footer/>
    </div>
  )
}

export default HomePage
