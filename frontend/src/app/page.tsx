import { Fragment } from "react"
import Hero from "./hero"
import About from "./about"
import Reports from "./reports"

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Reports />
    </Fragment>
  );
}
