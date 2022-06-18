import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello,</h1>
    <p>This is a mockup of example pages for Stickylife.com.</p>
    <p>It was made using <a href="https://gatsbyjs.com/">Gatsby.</a></p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to Home Page Mockup</Link> <br />
      <Link to="/page-3/">Go to Category Page Mockup</Link><br />
      <Link to="/page-4/">Go to Check Out Page Mockup</Link><br />
      <Link to="/page-5/">Go to Confirmation Page Mockup</Link><br />
      <Link to="/artist-page/">Go to Artist Page Mockup</Link><br />
      <Link to="/page-6/">Go to Alternate Navigation</Link><br />
      <Link to="https://github.com/sparker888/stickylife">Project GitHub Repository</Link><br />
      <Link to="https://stickylife-nav.vercel.app/" className="mt-12">Final Fixed Navigation</Link><br />
      <Link to="https://github.com/sparker888/stickylife-nav">Final Fixed Navigation GitHub Repository</Link><br />
    </p>
  </Layout>
)

export default IndexPage
