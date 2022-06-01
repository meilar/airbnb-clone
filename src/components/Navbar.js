import React from "react"
import AirbnbLogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
      <React.Fragment>
        <nav>
            <img className="nav-logo" src={AirbnbLogo} />
        </nav>
      </React.Fragment>
    )
}