import BackgroundImage from "../images/hero.jpg"
import classes from "./home.module.css"
import AboutImage from "../images/about.png"
import Logo from "../images/logo_white.png"

import { useSpring, animated } from "react-spring"

import React from "react"

import Fade from "react-reveal/Slide"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`

const Home = ({ data } = { data: [] }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        className={classes.bg}
        style={{
          transform: props.xy.interpolate(trans1),
        }}
      >
        <animated.img
          src={BackgroundImage}
          className={classes.moving_image}
          style={{
            transform: props.xy.interpolate(trans1),
          }}
        ></animated.img>
        <div
          className={classes.bg_2}
          style={{ transform: props.xy.interpolate(trans2) }}
        ></div>
        <div
          className={classes.hero}
          style={{ transform: props.xy.interpolate(trans3) }}
        >
          <div className={classes.ribbon}>
            <img src={Logo} className={classes.logo} />
          </div>
          <div></div>
          <div className={classes.nav}>
            <span>About</span>
            <span>Events</span>
            <span>Competetions</span>
            <span>Sponsor</span>
            <span>Contributors</span>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <Fade bottom>
          <img src={AboutImage} className={classes.img} />
        </Fade>

        <div className={classes.title}>
          <h1>About Us</h1>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like)
          </div>
        </div>
        <div></div>
        <div></div>
        <div className={classes.about_overlay}>
          <div className={classes.about}></div>
        </div>
      </div>
    </>
  )
}

export default Home;
