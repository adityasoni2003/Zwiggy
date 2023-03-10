import React from "react"
import { Outlet } from "react-router"

import { Link } from "react-router-dom"

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            onProfile : true,
        }
    }
    render(){
        return (
            <>
                <h1 className="font-bold text-4xl">Welcome to Our About Page</h1>
                { !this.state.onProfile?  (
                <Link to={""}>
                    <button className="font-semibold text-2xl" onClick={()=>this.setState({onProfile : true})}>
                    {"Go To Back 🔙"}
                        </button>
                </Link>)
                :(<Link to={"profile"}>
                <button className="font-semibold text-2xl" onClick={()=>this.setState({onProfile : false}) }>
                {"Go To Creator's Profile ➡️"}
                </button>
            </Link>) }
                
                
                <Outlet/>
            </>

        )
    }
}

export default About