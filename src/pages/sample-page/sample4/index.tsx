import React from "react"
import { Link } from "gatsby"

const Styles = require("./scss/style.module.scss")

const Sample4 = () => (
	<>
    <header className={Styles.header}>
      <h1 className={Styles.siteTitle}>
        Sample4 Web site
      </h1>
    </header>

    <nav className={Styles.globalNav}>
      <ul>
        <li className={Styles.navItem}>
          <Link to="#">HOME</Link>
        </li>
        <li className={Styles.navItem}>
          <Link to="#">ABOUT</Link>
        </li>
        <li className={Styles.navItem}>
          <Link to="#">NEWS</Link>
        </li>
        <li className={Styles.navItem}>
          <Link to="#">TOPICS</Link>
        </li>
        <li className={Styles.navItem}>
          <Link to="#">DOCS</Link>
        </li>
        <li className={Styles.navItem}>
          <Link to="#">BLOG</Link>
        </li>
      </ul>
    </nav>

    <div className={Styles.wrapper}>
      <main className={Styles.main} >
  main
      </main>

      <div className={Styles.sideMenu}>
  side
      </div>

    </div>
    <footer className={Styles.footer}>
  footer
    </footer>
</>
)

export default Sample4

{/*https://dhf.co.jp/-->

<!--https://www.mitsuoka-motor.com/lineup/viewtnostalgia/-->
*/}