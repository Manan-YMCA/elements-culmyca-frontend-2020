import BackgroundImage from "../images/bgimage.png"
import classes from "./event.module.css"
import React from 'react'
import Card from '../components/card'
import { Parallax } from "react-parallax"


const Events = ({ data } = { data: [] }) => {
    
    return (<Parallax bgImage={BackgroundImage} strength={800} >
        <div className={classes.bg} >
            <Card></Card>
            <Card isOpen={true}></Card>
            <Card></Card>
            <Card isOpen={true}></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card isOpen={true}></Card>
            <Card></Card>
        </div>
    </Parallax>)
}

export default Events;