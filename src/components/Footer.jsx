import React from "react"

import "./Footer.scss"
import Facebook from "../images/icon-facebook.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <img className="icon" src={Facebook} alt="facebook" />
      <img className="icon" src={Pinterest} alt="pinterest" />
      <img className="icon" src={Instagram} alt="instagram" />
    </footer>
  )
}

export default Footer
