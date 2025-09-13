import React, { useEffect, useState } from "react";
import './kids.css';

import k1 from './assests/k1.jpg';
import k2 from './assests/k2.jpg';
import k5 from './assests/k5.jpg';
import k6 from './assests/k6.jpg';
import k3 from './assests/k3.jpg';
import k4 from './assests/k4.jpg';
import k7 from './assests/k7.jpg';
import k8 from './assests/k8.jpg';





function Kids() {
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      alert("Thank you for your purchase!");
      setButtonClicked(false); // Reset after showing alert
    }
  }, [buttonClicked]);

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <div id="kids">
      <h1 className="h1">Kids Wear</h1>
      
      <div className="container2">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k1} alt="Kids wear 1" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k2} alt="Kids wear 2" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k5} alt="Kids wear 3" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k6} alt="Kids wear 4" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k3} alt="Kids wear 4" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k4} alt="Kids wear 4" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k7} alt="Kids wear 7" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="image-container">
              <img src={k8} alt="Kids wear 8" className="image" />
              <button className="image-button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Kids;



