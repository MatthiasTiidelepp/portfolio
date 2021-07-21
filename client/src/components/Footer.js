import React from 'react'

// Component for displaying the author's name and link to the code on github as a footer
const Footer = () => {
  return (
    <footer className="footerContainer">
      <p className="footerText">by Matthias Tiidelepp</p>
      <p className="footerInterpunct">·</p>
      <a className="footerLink" href="https://github.com/MatthiasTiidelepp">GitHub</a>
      <p className="footerInterpunct">·</p>
      <a className="footerLink" href="https://www.linkedin.com/in/matthias-tiidelepp-a51792208/">Linkedin</a>
    </footer>
  )
}

export default Footer