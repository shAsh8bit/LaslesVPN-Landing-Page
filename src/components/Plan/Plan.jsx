import React from "react";
import "./plan.css";
import PlanList from "./PlanList";

let arr1 =["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices"],arr2=["Unlimited Bandwitch","Encrypted Connection","Yes Traffic Logs","Works on All Devices","Connect Anyware"],arr3=["Unlimited Bandwitch","Encrypted Connection","Yes Traffic Logs","Works on All Devices","Connect Anyware","Get New Features"]
const Plan = () => {
  return (
    <div className="plan">
      <div className="plan-text">
       
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="plan-list">
      
   <PlanList textTop={"Free Plan"} textBottom={"Free"} textArr={arr1}/>
   <PlanList textTop={"Standard Plan"} textBottom={"$9"} textArr={arr2}/>
   <PlanList textTop={"Premium Plan"} textBottom={"$12"} textArr={arr3}/>
      </div>
    </div>
  );
};

export default Plan;
