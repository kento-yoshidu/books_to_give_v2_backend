import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Button from "../components/button"
import intersectionObserver from "../lib/intersectionObserver"

import Header from "../components/header"
import Card from "../components/card"

import * as Styles from "../styles/index.module.scss"

const Index: React.VFC = () => {
  useEffect(() => {
    intersectionObserver()
  }, [])

  return (
    <>
      <Seo title="ポートフォリオサイト" />

      <div className={Styles.sa}>
        <Header />
      </div>

      <section className={`${Styles.section} ${Styles.sec1}`} id="sec1">
        <h2 className={`${Styles.sectionTitle} ${Styles.linksTitle}`}>
          Sample Pages
        </h2>

      </section>

      <section
        className={`${Styles.section} ${Styles.sec5} progress-section sa sa--up`}
      >
        <h2 className={Styles.sectionTitle}>2022年度の個人タスク</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            width: "80%",
            margin: "0 auto"
          }}
        >
          <Card color="#04fc43" num={50} text="Jamstackサイトを10個作る" />

          <Card color="#06ccff" num={50} text="AWS認定資格を2つ以上取る" />

          <Card color="#ff00be" num={45} text="サンプルWebサイトを10個作る" />

          <Card color="#fee800" num={45} text="最新のCSSを学習する" />
        </div>
      </section>

      <footer className={Styles.footer}>
        <h2 className={Styles.footerTitle}>Developed by Gatsby</h2>
      </footer>
    </>
  )
}

export default Index
