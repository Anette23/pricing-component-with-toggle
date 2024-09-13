import React from "react";

const Header = ({changePrice,isAnnually}) => {
  return (
    <header>
      <h1>Our Pricing</h1>
      <div className="toggleSection">
        <p>Annually</p>
        <input type="checkbox" id="switch" className="checkbox" onChange={changePrice} checked={isAnnually}/>
        <label htmlFor="switch" className="toggle"></label>
        <p>Monthly</p>
      </div>
    </header>
  );
};

export default Header;
