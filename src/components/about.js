import React from "react"
import { Outlet } from "react-router"

import { Link } from "react-router-dom"

class About extends React.Component{
    render(){
        return (
            <>
                <h1>Welcome to Our About Page</h1>
                <Link to={"profile"}>Go To Creator's Profile</Link>
                <Outlet/>
            </>

        )
    }
}

export default About