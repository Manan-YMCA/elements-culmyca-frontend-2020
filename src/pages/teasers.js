import React from "react"

import classes from "./teasers.module.css"

const Teaser = () => {
  return (
    <div className={classes.outer}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ minHeight: "99vh", width: "100%" }}
      >
        <path
          d="M-0.57,135.48 C77.31,145.35 348.76,94.03 497.17,5.22 L497.17,4.23 L-72.24,149.30 Z"
          style={{ stroke: "none", fill: "#f3e5ca" }}
        ></path>
        <path
          d="M-9.03,151.27 C106.09,89.10 288.37,51.60 505.07,0.28 L505.07,0.28 L-15.81,155.22 Z"
          style={{ stroke: "none", fill: "#faf3e7" }}
        ></path>
      </svg>

      <div className={classes.overlay}>
        <h1 className={classes.title}>Teasers</h1>
        <div className={classes.container}>
          {" "}
          <iframe
            width="270"
            height="150"
            src="https://youtube.com/embed/nT6EU1_0JIQ"
          ></iframe>
          <iframe
            width="270"
            height="150"
            src="https://youtube.com/embed/Lq3IXDWpsaY"
          ></iframe>
          <iframe
            width="270"
            height="150"
            src="https://youtube.com/embed/pUeNPCbwIEk"
          ></iframe>
          <iframe
            width="270"
            height="150"
            src="https://youtube.com/embed/7pdy8TAtduQ"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Teaser
