import React from "react"
import Fade from "react-reveal/Fade"

import classes from "./sponsors.module.css"

import sample from "../images/sample.png"

function Sponsors(props) {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  return (
    <div className={classes.bg}>
      <div className={classes.heading}>Sponsors</div>
      <Fade bottom>
        <div className={classes.title}>
          <img
            src={sample}
            className={`${classes.title_img} ${classes.animated}`}
          />
          <div className={classes.sponsor_name}>Name</div>
          <div className={classes.sponsor_status}>Title Sponsor</div>
        </div>
      </Fade>
      <div className={classes.second}>
        <Fade bottom>
          <div className={classes.second_item}>
            <img
              src={sample}
              className={`${classes.second_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.second_item}>
            <img
              src={sample}
              className={`${classes.second_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.second_item}>
            <img
              src={sample}
              className={`${classes.second_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.second_item}>
            <img
              src={sample}
              className={`${classes.second_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
      </div>
      <div className={classes.third}>
        <Fade bottom>
          <div className={classes.third_item}>
            <img
              src={sample}
              className={`${classes.third_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.third_item}>
            <img
              src={sample}
              className={`${classes.third_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.third_item}>
            <img
              src={sample}
              className={`${classes.third_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={classes.third_item}>
            <img
              src={sample}
              className={`${classes.third_img} ${classes.animated}`}
            />
            <div className={classes.sponsor_name}>Name</div>
            <div className={classes.sponsor_status}>Title Sponsor</div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Sponsors
