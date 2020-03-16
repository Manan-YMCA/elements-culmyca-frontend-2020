import Clubs from "./clubs"
import Teasers from "./teasers"
import Sponsors from "./sponsors"
import Events from './events';
import Home from "./home"


import React from "react"

const Main = ({ data } = { data: [] }) => {
  return (
    <>
      <Home />
      <Clubs />
      <Teasers />
      <Sponsors />
      <Events />
    </>
  )
}

export default Main;
