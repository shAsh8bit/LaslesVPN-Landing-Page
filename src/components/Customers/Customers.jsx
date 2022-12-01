import React from "react";
import "./customers.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import CustomerList from "./CustomerList";
let details = [
  {
    img:  person1 ,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    desc: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    img:  person2 ,
    name: "Yessica Christy",
    location: "Shanxi, China",
    desc: "“I like it because I like to travel far and still can connect with high speed.”.",
  },
  {
    img:  person3 ,
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    desc: "“This is very unusual for my business that currently requires a virtual private network that has high security.”",
  }, {
    img:  person1 ,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    desc: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  }
];
const Customers = () => {
  return (
    <div className="customers">
      <div className="plan-text">
        <h1>Trusted by Thousands of Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="customers-list">
        {details.map((e) => (
          <CustomerList
            img={e.img}
            name={e.name}
            location={e.location}
            desc={e.desc}
          />
        ))}
        {/* <CustomerList img={person1} name={"Viezh Robert"} location={"Warsaw, Poland"} desc={"“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."}/> */}
      </div>
    </div>
  );
};

export default Customers;
