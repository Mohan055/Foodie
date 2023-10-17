import React from 'react'
import Profilepic from "../Assets/john-doe-image.png"
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
                Lorem ipsum
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src= {Profilepic} alt="No IMG" />
            <p>
            Lorem ispm dolor
            </p>
            <div className='testmonials-stars-cointainer'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />

            </div>
            <h1>John Doe</h1>
      
        </div>
    </div>
  )
}
