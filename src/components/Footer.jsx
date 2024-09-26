import React from "react";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">Foodhub.com</p>
        <p>
          FoodHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free.
        </p>
        <p>&copy; 2024 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>foodhub@gmail.com</p>
        <p>
         +343-5324-9454.
        </p>
        <p>2394 Street NYC</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default Footer;
