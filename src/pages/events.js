import BackgroundImage from "../images/bgimage.png"
import classes from "./event.module.css"
import React from "react"
import Card from "../components/card"
import { Parallax } from "react-parallax"
import Fade from "react-reveal"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"

const Events = ({ data } = { data: [] }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <div className={`${classes.popup} ${open ? classes.popup_open : ""}`}>
        <div
          className={`${classes.popup_wrapper} ${
            open ? classes.popup_inner_open : ""
          }`}
        >
          <div className={classes.popup_inner}>
            <span />
            <div className={classes.popup_heading}>Xunbao</div>
            <Icon
              icon={faTimes}
              className={classes.cross}
              onClick={() => setOpen(false)}
            />
            <span />
            <div className={classes.meta_data}>
              <span className={classes.item}>
                <span className={classes.item_lead}>Day:</span>
                <span>2020-04-12</span>
              </span>
              <span className={classes.item}>
                <span className={classes.item_lead}>Time:</span>
                <span>12:30 PM</span>
              </span>
              <span className={classes.item}>
                <span className={classes.item_lead}>Venue:</span>
                <span>CC09</span>
              </span>
              <span className={classes.item}>
                <span className={classes.item_lead}>Entry Fee:</span>
                <span>INR 30</span>
              </span>
            </div>
            <span />
            <div className={classes.description}>
              {
                "Design, law, construction, asset management, financial and professional services consultancies all have to manage their professional indemnity and D&O liabilities. We have an in-depth knowledge not just of these industries, but also the constantly changing regulatory landscape, and the increasingly competitive environment they work within."
              }
            </div>
            <span className={classes.contact_us}>Rules</span>
            <div className={classes.description}>
              {
                "Design, law, construction, asset management, financial and professional services consultancies all have to manage their professional indemnity and D&O liabilities. We have an in-depth knowledge not just of these industries, but also the constantly changing regulatory landscape, and the increasingly competitive environment they work within."
              }
              {
                "Design, law, construction, asset management, financial and professional services consultancies all have to manage their professional indemnity and D&O liabilities. We have an in-depth knowledge not just of these industries, but also the constantly changing regulatory landscape, and the increasingly competitive environment they work within."
              }
            </div>
            <div className={classes.contact_us}>Contact </div>
            <span className={classes.name}>Anshul Goyal +91 9560987006</span>
          </div>
        </div>
      </div>

      <Parallax bgImage={BackgroundImage} strength={800}>
        <div className={classes.bg}>
          <div onClick={() => setOpen(true)}>
            <Fade bottom>
              <Card></Card>
            </Fade>
          </div>
          <Fade bottom delay={5000}>
            <Card isOpen={true}></Card>
          </Fade>
          <Fade bottom delay={8000}>
            <Card></Card>
          </Fade>
          <Fade bottom delay={4000}>
            <Card isOpen={true}></Card>
          </Fade>
          <Fade bottom delay={4000}>
            <Card></Card>
          </Fade>
          <Fade bottom delay={4000}>
            <Card></Card>
          </Fade>
          <Fade bottom delay={4000}>
            <Card></Card>
          </Fade>
          <Fade bottom delay={4000}>
            <Card isOpen={true}></Card>
          </Fade>
          <Fade bottom delay={4000}>
            <Card></Card>
          </Fade>
        </div>
      </Parallax>
    </>
  )
}

export default Events
