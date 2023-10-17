import React from 'react'
import Navbar from './Navbar'
import BannerBackgroungImage from '../Assets/home-banner-background.png'
import HomeBannerImage from '../Assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'

export default function Home() {
  return (
    <div className='home-container'>
        {/* <Navbar />  */}
        <div className="home-banner-container">
          <div className='home-bannerImage-container'>
            <img src={BannerBackgroungImage} alt="" />
          </div>  
          <div className='home-text-section'>
            <h1 className='primary-heading'>Your Favourite Food Delivered Hot & Fresh</h1>
            <p className='primary-text'>Healthy switcher chefs do all the prep work,like peeding,chopping & marinating,so you can cook a fresh food.</p>
            <button className="secondary-button">Order Now <FiArrowRight /></button>
          </div>
          <div className="home-image-section">
            <img src={HomeBannerImage} alt="" />
          </div>
        </div>
    </div>
  )
}