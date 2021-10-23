import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Button from "../components/button"

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
          to="samplepage/sample4"
        >
          <h3 className={`${Styles.title} ${Styles.linkTitle}`}>Sample4</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ4</p>
        </Link>
      </div>

      <Button
        path="samplepage"
        text="more"
      />
    </section>

    <section className={`${Styles.section} ${Styles.sec2} sa sa--up}`} id="sec3">
      <h2 className={Styles.sectionTitle}>CSS Animation & Tips</h2>

      <div className={Styles.sectionWrapper}>
        <StaticImage
          src="../images/css.png"
          alt="CSSのイメージ画像"
          layout="fullWidth"
          className={Styles.imgWrapper}
        />
        <p>CSSで実現できるアニメーションや、ちょっとした小テクを紹介します。Nuxt.js + AWS Amplifyで構築しました。</p>
      </div>
      <Button
        path="samplepage"
        text="more"
      />
    </section>

    <section className={`${Styles.section} sa sa--up`} id="sec4">
      <h2 className={Styles.sectionTitle}>Blog</h2>

      <div className={Styles.sectionWrapper}>
        <p>技術ネタや日記のためのブログ「鳥に生まれることができなかった人へ」を作りました。Gatsby + AWS Amplifyで構築しています。</p>
        <StaticImage
          src="../images/gatsby.png"
          alt="CSSのイメージ画像"
          layout="fullWidth"
          className={Styles.imgWrapper}
        />
      </div>

      <Button
        path="https://blog.toriwatari.work"
        text="more"
      />
    </section>
    
    <section className={`${Styles.section} ${Styles.sectionJamstack} sa sa--up`} id="sec5">
      <h2 className={Styles.sectionTitle}>JamstackなWebサイトを構築してみた</h2>
      <div className={Styles.sectionWrapper}>
        <div>
          <p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。</p>
          <p>2021年度中に10個作成するのが目標です。</p>
        </div>
        <StaticImage
          src="../images/static.png"
          alt="CSSのイメージ画像"
          layout="fullWidth"
          className={Styles.imgWrapper}
        />
      </div>

      <Button
        path="samplepage"
        text="more"
      />
    </section>
  </>
)

export default Index
