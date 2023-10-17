import React from 'react'
import AboutBackgroundImage from '../Assets/about-background.png'
import AboutBannerImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function About() {
  return (
    <div className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Food Is An Important Part Of A Balanced Diet</h1>
        <p className='primaryt-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p className='primaryt-text'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec tortor felis. Ut viverra sit amet nisl quis tincidunt</p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'><BsFillPlayCircleFill />Watch Video </button>
        </div>
      </div>
    </div>
  )
}