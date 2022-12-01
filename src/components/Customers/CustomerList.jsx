import React from 'react'
import star from "../../assets/star.png";
const CustomerList = ({img,name,location,desc}) => {
  return (
    <div className="customers-single">
    <div className="customers-pic-name-rating">
      <div className="customers-pic-name">
        <img src={img} alt="" />
        <div className="customers-name">
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="customers-rating">
        <p>4.5</p>
        <img src={star} alt="" />
      </div>
    </div>

    <div className="customers-description">
      <p>
        {desc}
      </p>
    </div>
  </div>
  )
}

export default CustomerList