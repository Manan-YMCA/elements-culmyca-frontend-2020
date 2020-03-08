import BackgroundImage from "../images/bgimage.png"
import classes from "./event.module.css"
import React from 'react'
import Card from '../components/card'

const Events = ({ data } = { data: [] }) => {
    return (<div className={classes.bg} style={
        {
            backgroundImage: `url(${BackgroundImage})`,
        }}>

        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>)
}

export default Events;