import React from 'react'
import feature from "../../assets/feature.svg";
const SingleFeature = ({text1}) => {
  return (
    <div className="feature-single">
            <img src={feature} alt="" />
            <p>{text1}</p>
        </div>
  )
}

export default SingleFeature