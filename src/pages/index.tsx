import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const Styles = require("../styles/index.module.scss")

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index: React.VFC = () => (
  <>
    <Seo
      title="ポートフォリオサイト"
    />

    <header className={Styles.header} id="header">
      <h2 className={Styles.headerSubTitle}>toriwatari</h2>
      <h1 className={Styles.headerTitle}>Portfolio Website</h1>
      <p>更新日 : <time>2021-10-20</time></p>

      <h3 className={Styles.message}>I <FontAwesomeIcon icon={faHeart} /> HTML & CSS</h3>

      <Link className={Styles.arrowContainer} to="#sec1">
        <div className={Styles.arrow}></div>
        <div className={Styles.arrow}></div>
        <div className={Styles.arrow}></div>
      </Link>
    </header> 

    <section className={`${Styles.section} ${Styles.sec1} sa sa--up`} id="sec1">
      <h2 className={`${Styles.sectionTitle} ${Styles.linksTitle}`}>Sample Pages</h2> 

      <div className={Styles.linksWrapper}>
        <Link
          className={`${Styles.linkItem} sa sa--up`}
          to="sample-page/sample1/"
        >
          <h3 className={`${Styles.title} ${Styles.linkTitle}`}>Sample1</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ1</p>
        </Link>

        <Link
          className={`${Styles.linkItem} sa sa--up`}
          to="sample-page/sample2/"
        >
          <h3 className={`${Styles.title} ${Styles.linkTitle}`}>Sample2</h3>
          <div className={Styles.nogi}></div>
          <p>サンプルページ2です。〇木坂46をテーマにページを作成しました。</p>
        </Link>

        <Link
          className={`${Styles.linkItem} sa sa--up`}
          to="sample-page/sample3/"
        >
          <h3 className={`${Styles.title} ${Styles.linkTitle}`}>Sample3</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ3</p>
        </Link>

        <Link
          className={`${Styles.linkItem} sa sa--up`}
          to="sample-page/sample4/"
        >
          <h3 className={`${Styles.title} ${Styles.linkTitle}`}>Sample4</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ4</p>
        </Link>
      </div>

      <div className="btn-wrapper sa sa--up">
        <Link to="#" className="link-btn">More</Link>
      </div>
    </section>

    <section className="section sec3 sa sa--up" id="sec3">
      <h2 className="section-title">CSS Animation & Tips</h2>

      <div className="section-wrapper">
        <p>ogehogeh</p>
        <StaticImage
          src="../images/css.svg"
          alt="CSSのイメージ画像"
          layout="fullWidth"
          className={Styles.imgWrapper}
        />
        <p>CSSで実現できるアニメーションや、ちょっとした小テクを紹介します。Nuxt.js + AWS Amplifyで構築しました。</p>
      </div>
      <div className="btn-wrapper">
        <a href="https://cssanimation.toriwatari.work/" className="link-btn" target="_blank">サイトを見る</a>
      </div>
    </section>
  </>
)

export default Index
