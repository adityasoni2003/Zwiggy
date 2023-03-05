import React from "react"
import { Outlet } from "react-router"
import Profile from "./profile"

class About extends React.Component{
    render(){
        return (
            <>
                <h1>Welcome to Our About Page</h1>
                <Outlet/>
            </>

        )
    }
}

export default About