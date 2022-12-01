import React from 'react'
import "./features.css"
import illustration from "../../assets/Illustration-2.svg";

import SingleFeature from './SingleFeature';
const Features = () => {
  return (
    <div className="feature">
        <img src={illustration} />
      <div className="feature-right">
      
        <h1>We Provide Many Features You Can Use </h1>
        <p>
        You can explore the features that we provide with fun and have their own functions each feature.
        </p>
       <div className="features-list">
        <SingleFeature text1={"Powerfull online protection."}/>
        <SingleFeature text1={"Internet without borders."}/>
        <SingleFeature text1={"Supercharged VPN"}/>
        <SingleFeature text1={"No specific time limits."}/>
       
       </div>
      </div>
      
    </div>
  )
}

export default Features