import React from "react"
import'./Footer.css'

function Footer(props) {
    return (
      <div className="footer">{props.title}- (c) All rights reserved.</div>
    )
  }
  
  export default Footer