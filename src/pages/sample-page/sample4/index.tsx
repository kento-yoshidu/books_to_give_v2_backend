import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "./scss/style.module.scss"

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
        <section className={Styles.hotTopic}>
          <a href="#" className={Styles.topic}>
            <StaticImage
              src="./src/images/hero.jpg"
              alt="hoge"
            />
          </a>
          <div className={Styles.content}>
            <h3 className={Styles.title}>
              Sample page 4
            </h3>
            <p className={Styles.desc}>
              ムカデは怒った時、雲型定規がアプリケーションを代表する豚肉を目撃した。
            </p>
            <time
              dateTime="2021-12-19"
              className={Styles.date}
            >
              2021.12.19
            </time>
          </div>

        </section>
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