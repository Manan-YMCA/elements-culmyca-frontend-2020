import React from 'react';
import { useMediaQuery } from 'react-responsive'
import classes from './card.module.css'

const Card = ({ isOpen = false } = {}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const open = isDesktopOrLaptop && isOpen
    const colors = ["#4ab7cc", " #779233", "#38465b"]
    return (
        <div className={classes.card} style={{ backgroundColor: colors[Math.floor(Math.random() * 3)], height: !open ? '250px' : "" }}>
            <div className={classes.number_container}> <h2 className={classes.number}>01.</h2></div>
            <div></div><div></div>
            <div className={classes.title}>Xunbao</div><div></div><div></div>
            {!open ? <><div className={classes.subtitle}>Read More</div> <div></div> <div className={classes.plus}>+</div></> : ""}
            {open ?
                <div className={classes.text}>
                    {"Design, law, construction, asset management, financial and professional services consultancies all have to manage their professional indemnity and D&O liabilities. We have an in-depth knowledge not just of these industries, but also the constantly changing regulatory landscape, and the increasingly competitive environment they work within."}
                </div> : ""}
        </div>
    )
}

export default Card;