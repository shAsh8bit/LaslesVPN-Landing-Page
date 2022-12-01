import React from 'react'
import SingleFeature from "../Features//SingleFeature";
import free from "../../assets/Free.svg";

const PlanList = ({textTop,textBottom,textArr}) => {
  return (
    <div className="plan-single">
    <div className="plan-single-content">
         <img src={free} alt="" />
  <p>{textTop}</p>
    </div>
 {textArr.map((e)=>( <SingleFeature text1={e} />))}
 
 

  <div className="plan-single-content  plan-single-content-footer">     
  {textBottom==="Free"?<p>Free</p>: <p >{textBottom} <p style={{display:'inline',color:'#4f5665'}}>/ mo</p></p> }
  <button>Select</button>
    </div>
</div>
  )
}

export default PlanList