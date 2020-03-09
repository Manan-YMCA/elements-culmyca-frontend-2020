import React from 'react'
import LOGO from "../images/logo_white.png"
import Image from '../components/image'

const Loading = () => {
    return (
        <div style={{ backgroundImage: "radial-gradient(circle, #D35336,#D35336,#D35336)", height: "100vh", display: "grid" }}>
            <div style={{ height: "50vh", width: "50vh", margin: "0 auto", marginTop: "25vh" }}> <Image /></div>
        </div>
    )
}

export default Loading;