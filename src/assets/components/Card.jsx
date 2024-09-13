import React, { useState } from "react";

const Card = ({ isAnnually }) => {
  const [monthly, setMonthly] = useState(["19.99", "24.99", "39.99"]);
  const [annually, setAnnually] = useState(["199.99", "249.99", "399.99"]);

  const prices = isAnnually ? annually : monthly;

  const cardData = [
    {
      id: "Basic",
      storage: "500G",
      users: "2",
      gb: "3",
    },

    { id: "Professional", storage: "1TB", users: "5", gb: "10" },

    { id: "Master", storage: "2TB", users: "10", gb: "20GB" },
  ];

  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={data.id}
          className={`card ${data.id === "Professional" ? "highlight" : ""}`}
        >
          <h2>{data.id}</h2>
          <p className="price">
            $ <span>{prices[index]}</span>
          </p>
          <p>{data.storage} Storage</p>
          <p>{data.users} Users Allowed</p>
          <p>Send up to {data.gb}</p>
          <button
            className={data.id === "Professional" ? "highlight-btn" : "btn"}
          >
            LEARN MORE
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
