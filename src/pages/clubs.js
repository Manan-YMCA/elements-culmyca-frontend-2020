import React from "react"

import backgroundImage from "../images/event.png"
import classes from "./clubs.module.css"
import sample from "../images/sample.png"

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { useMediaQuery } from "react-responsive"

function Events() {
  const isPhone = useMediaQuery({
    query: "(max-device-width: 600px)",
  })
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [active, setActive] = React.useState(0)
  return (
    <div
      class={classes.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.title}>CATEGORIES</div>
      <Icon
        className={classes.icon}
        icon={faChevronLeft}
        onClick={() => setActive(active !== 0 ? active - 1 : cards.length - 1)}
      ></Icon>
      <div class={classes.items_wrapper}>
        <div
          class={classes.items}
          style={{
            transform: `translate(${(!isPhone ? -33 : -100) * active + "%"})`,
          }}
        >
          {cards.map(v => (
            <div
              class={`${classes.card} ${
                active + 1 === v ? classes.card_active : ""
              }`}
            >
              <div className={classes.card_inner}>
                <div className={classes.card_heading}>Fine Arts</div>{" "}
                <div className={classes.card_subheading}>-By Srijan</div>{" "}
                <img className={classes.img} src={sample} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Icon
        className={classes.icon}
        icon={faChevronRight}
        onClick={() => setActive((active + 1) % cards.length)}
      ></Icon>
      <div className={classes.dots}>
        {cards.map(v => (
          <div
            onClick={() => setActive(v)}
            className={`${classes.dot} ${
              active === v ? classes.dot_active : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
export default Events
