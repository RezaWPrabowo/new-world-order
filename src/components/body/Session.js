import React from "react";

import "./session.scss";

const Session = () => {
  const data = [
    { name: "Darling Downs", location: "Warwick, Toowoomba" },
    {
      name: "Wide Bay Region",
      location: "Gympie, Hervey Bay, Bundaberg, Kingaroy",
    },
    { name: "Scenic Rim", location: "Beaudesert" },
    { name: "Gold Coast", location: "Carrara" },
    { name: "Sunshine Coast", location: "Sippy Downs" },
    {
      name: "Metro Brisbane",
      location: "Chandler, Morayfield, Toowong, Ipswich",
    },
    { name: "Capricornia", location: "Gladstone, Rockhampton, Emerald" },
    { name: "North West Region", location: "Longreach, Mt. Isa" },
    {
      name: "North Queensland",
      location: "Ingham, Townsville, Airlie Beach, Mackay, Cairns",
    },
    {
      name: "South West Region",
      location: "Roma, Dalby, St. George, Goondiwindi",
    },
  ];

  return (
    <div className="session-container">
      Testing session locations
      <p>
        You for 2032 testing days will be hosted across Queensland in the first
        half of 2022. Below is a list of the regions, broken down to cities,
        towns and suburbs identified as hosts for testing sessions. As part of
        the selection process athletes will need to be prepared to attend at
        least one testing day.
      </p>
      <div className="session-content">
        {data.map((o, index) => (
          <div className="session-content__container" key={index}>
            <p>{o.name}</p>

            <p>{o.location}</p>
          </div>
        ))}
      </div>
      <div className="session-button">
        <button>Register your interest</button>
      </div>
    </div>
  );
};

export default Session;
