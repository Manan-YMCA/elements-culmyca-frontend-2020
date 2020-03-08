import React from 'react';
import classes from './card.module.css'

const Card = () => {
    const colors = ["#4ab7cc", " #779233", "#38465b"]
    return (
        <div className={classes.card} style={{ backgroundColor: colors[Math.floor(Math.random() * 3)] }}>
            <div className={classes.number_container}> <h2 className={classes.number}>01.</h2></div>
            <div></div><div></div>
            <div className={classes.title}>Xunbao</div><div></div><div></div>
            <div className={classes.subtitle}>Read More</div><div></div><div className={classes.plus}>+</div>
        </div>
    )
}

export default Card;