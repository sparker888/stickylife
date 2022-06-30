import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello,</h1>
    <br />
    <p>This project is a redesign resource for Stickylife.com.</p>
    <br />
    <p>
      The theme was developed using{" "}
      <a href="https://gatsbyjs.com/" className="text-purple-600">
        Gatsby
      </a>{" "}
      and the{" "}
      <a href="https://tailwindcss.com" className="text-purple-600">
        Tailwind CSS
      </a>{" "}
      utility library.
    </p>
    <br />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2 className="mt-4">
      <Link to="/page-2/" className="text-purple-600">
        Go to Home Page Mockup
      </Link>{" "}
      <br />
    </h2>
    <h2 className="mt-4">
      <Link to="/page-3/" className="text-purple-600">
        Go to Category Page Mockup
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link to="/page-4/" className="text-purple-600">
        Go to Check Out Page Mockup
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link to="/page-5/" className="text-purple-600">
        Go to Confirmation Page Mockup
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link to="/artist-page/" className="text-purple-600">
        Go to Artist Page Mockup
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link to="/page-6/" className="text-purple-600">
        Go to Alternate Navigation
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link
        to="https://github.com/sparker888/stickylife"
        className="text-purple-600"
      >
        Project GitHub Repository
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link
        to="https://stickylife-nav.vercel.app/"
        className="text-purple-600 font-bold"
      >
        Final Fixed Navigation (NextJS)
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link
        to="https://github.com/sparker888/stickylife-nav"
        className="text-purple-600 font-bold"
      >
        Final Fixed Navigation GitHub Repository
      </Link>
      <br />
    </h2>
    <h2 className="mt-4">
      <Link to="/index2/" className="text-purple-600 font-bold">
        Warning: Experimental Page Only!!!
      </Link>
      <br />
    </h2>
  </Layout>
)

export default IndexPage
