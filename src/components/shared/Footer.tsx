import React from 'react';

const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="footerText">{`Jhon Choque ${new Date().getFullYear()} © All rights reserved`}</p>
    </div>
  );
};

export default Footer;
