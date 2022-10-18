import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Button from "../components/button"
import intersectionObserver from "../lib/intersectionObserver"

import Header from "../components/header"
import SamplePage from "../components/samplePage"
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

        <div className={`${Styles.linksWrapper} ${Styles.sa} ${Styles.saUp}`}>
          <SamplePage
            path="https://toriwatari-sample1.netlify.app/"
            title="Sample1"
            text="サンプルページ1です。"
          />

          <SamplePage
            path="sample2"
            title="Sample2"
            text="サンプルページ2です。"
          />

          <SamplePage
            path="sample3"
            title="Sample3"
            text="サンプルページ3です。"
          />

          <SamplePage
            path="sample4"
            title="Sample4"
            text="サンプルページ4です。"
          />

          <SamplePage
            path="sample5"
            title="Sample5"
            text="サンプルページ5です。"
          />
        </div>

        <Button path="sample-page" text="more" />
      </section>

      <section className={`${Styles.section} ${Styles.sec1}`} id="sec1">
        <h2 className={`${Styles.sectionTitle} ${Styles.linksTitle}`}>
          Apps
        </h2>

        <div className={`${Styles.linksWrapper} ${Styles.sa} ${Styles.saUp}`}>
          <SamplePage
            path="https://bookstogive-kento-yoshidu.vercel.app/"
            title="BooksToGive"
            text="読み終わって誰かにあげたい本をリストアップ。"
          />
        </div>
      </section>

      <section
        className={`${Styles.section} ${Styles.sa} ${Styles.saUp}`}
        id="sec3"
      >
        <h2 className={Styles.sectionTitle}>CSS Animation & Tips</h2>

        <div className={Styles.sectionWrapper}>
          <StaticImage
            src="../images/css.png"
            alt="CSSのイメージ画像"
            layout="fullWidth"
            className={Styles.imgWrapper}
          />
          <p>
            CSSで実現できるアニメーションや、ちょっとした小テクを紹介します。Gatsby
            + MDXファイル + Netlifyで構築しました。
          </p>
        </div>
        <Button path="https://cssanimation-and-tips.netlify.app" text="more" />
      </section>

      <section
        className={`${Styles.section} ${Styles.sa} ${Styles.saUp}`}
        id="sec4"
      >
        <h2 className={Styles.sectionTitle}>Blog</h2>

        <div className={Styles.sectionWrapper}>
          <p>
            技術ネタや日記のためのブログ「鳥に生まれることができなかった人へ」を作りました。Gatsby
            + MDファイル + AWS Amplifyで構築しています。
          </p>
          <StaticImage
            src="../images/gatsby.png"
            alt="CSSのイメージ画像"
            layout="fullWidth"
            className={Styles.imgWrapper}
          />
        </div>

        <Button path="https://blog.toriwatari.work" text="more" />
      </section>

      <section
        className={`${Styles.section} ${Styles.sa} ${Styles.saUp}`}
        id="sec5"
      >
        <h2 className={Styles.sectionTitle}>
          JamstackなWebサイトを構築してみた
        </h2>
        <div className={Styles.sectionWrapper}>
          <p>
            Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。2021年度中に10個作成するのが目標です。
          </p>
          <StaticImage
            src="../images/static.png"
            alt="CSSのイメージ画像"
            layout="fullWidth"
            className={Styles.imgWrapper}
          />
        </div>

        <Button path="Jamstack" text="more" />
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
          <Card color="#04fc43" num="50" text="Jamstackサイトを10個作る" />

          <Card color="#06ccff" num="50" text="AWS認定資格を2つ以上取る" />

          <Card color="#ff00be" num="45" text="サンプルWebサイトを10個作る" />

          <Card color="#fee800" num="20" text="最新のCSSを学習する" />
        </div>
      </section>

      <footer className={Styles.footer}>
        <h2 className={Styles.footerTitle}>Developed by Gatsby</h2>
      </footer>
    </>
  )
}

export default Index
