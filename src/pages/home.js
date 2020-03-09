import BackgroundImage from "../images/hero.jpg"
import classes from "./home.module.css"
import AboutImage from "../images/about.png"
import React from 'react'
import { Parallax } from "react-parallax"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Slide"


const Events = ({ data } = { data: [] }) => {
    const imgdata = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (<div>
        <div className={classes.bg} >
            <Parallax bgImage={BackgroundImage} strength={800} bgClassName={classes.bg} >
                <div className={classes.bg_2} >
                </div>
            </Parallax>
        </div>
        
            <div className={classes.container}>
                <Fade bottom><img src={AboutImage} className={classes.img} /></Fade>

                <div className={classes.title}><h1>About Us</h1><div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</div></div>
                <div></div>
                <div>.
</div>
            </div>
        

    </div>)
}

export default Events;