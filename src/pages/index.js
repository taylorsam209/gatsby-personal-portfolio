import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi America, wassup.</h1>
    <p>Welcome to Taylor's first attempt at building a Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src="https://source.unsplash.com/random/" height="300px" alt="Random" />
    <div><Link to="/page-2/">Go to page 2</Link></div>
    <div><Link to="/new-page/">Go to new page </Link> </div>
    <div><Link to="/counter/">Counter</Link></div>
  </div>
)

export default IndexPage
