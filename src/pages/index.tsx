import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Button from "../components/button"
import intersectionObserver from "../lib/intersectionObserver"

import Header from "../components/header"
import SamplePage from "../components/samplePage"

import * as Styles from "../styles/index.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index: React.VFC = () => {
  useEffect(() => {
    intersectionObserver()
  }, [])

  return (
    <>
      <Seo
        title="ポートフォリオサイト"
      />

      <div className={Styles.sa}>
        <Header />
      </div>

      <section className={`${Styles.section} ${Styles.sec1}`} id="sec1">
        <h2 className={`${Styles.sectionTitle} ${Styles.linksTitle}`}>Sample Pages</h2>

        <div className={`${Styles.linksWrapper} ${Styles.sa} ${Styles.saUp}`}>

          <SamplePage
            path="sample1"
            title="Sample1"
            icon={faCode}
            text="サンプルページ1です。"
          />

          {/*
          <Link
            className={Styles.linkItem}
            to="sample-page/sample2/"
          >
            <h3 className={`${Styles.linkTitle}`}>Sample2</h3>
            <div className={Styles.nogi}></div>
            <p>サンプルページ2です。〇木坂46をテーマにページを作成しました。</p>
          </Link>
          */}

          <SamplePage
            path="sample2"
            title="Sample2"
            icon={faCode}
            text="サンプルページ2です。"
          />

          <SamplePage
            path="sample3"
            title="Sample3"
            icon={faCode}
            text="サンプルページ3です。"
          />

          <SamplePage
            path="sample4"
            title="Sample4"
            icon={faCode}
            text="サンプルページ4です。"
          />

          <SamplePage
            path="sample5"
            title="Sample5"
            icon={faCode}
            text="サンプルページ5です。"
          />
        </div>

        <Button
          path="sample-page"
          text="more"
        />
      </section>

      <section className={`${Styles.section} ${Styles.sa} ${Styles.saUp}`} id="sec3">
        <h2 className={Styles.sectionTitle}>CSS Animation & Tips</h2>

        <div className={Styles.sectionWrapper}>
          <StaticImage
            src="../images/css.png"
            alt="CSSのイメージ画像"
            layout="fullWidth"
            className={Styles.imgWrapper}
          />
          <p>CSSで実現できるアニメーションや、ちょっとした小テクを紹介します。Gatsby + MDXファイル + Netlifyで構築しました。</p>
        </div>
        <Button
          path="https://cssanimation-and-tips.netlify.app"
          text="more"
        />
      </section>

      <section className={`${Styles.section} ${Styles.sa} ${Styles.saUp}`} id="sec4">
        <h2 className={Styles.sectionTitle}>Blog</h2>

        <div className={Styles.sectionWrapper}>
          <p>技術ネタや日記のためのブログ「鳥に生まれることができなかった人へ」を作りました。Gatsby + MDファイル + AWS Amplifyで構築しています。</p>
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

      <section className={`${Styles.section} ${Styles.sa} ${Styles.saUp}`} id="sec5">
        <h2 className={Styles.sectionTitle}>JamstackなWebサイトを構築してみた</h2>
        <div className={Styles.sectionWrapper}>
          <p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。2021年度中に10個作成するのが目標です。</p>
          <StaticImage
            src="../images/static.png"
            alt="CSSのイメージ画像"
            layout="fullWidth"
            className={Styles.imgWrapper}
          />
        </div>

        <Button
          path="Jamstack"
          text="more"
        />
      </section>

      <section className={`${Styles.section} ${Styles.sec5} progress-section sa sa--up`}>
        <h2 className={Styles.sectionTitle}>2022年度の個人タスク</h2>

        <div className={Styles.wrapper}>
          <div className={Styles.running}>
            <h3>Running...<span className={Styles.emoji}>️🏃️💨</span></h3>

            <div className={Styles.progressbarWrapper}>
              <h4>Jamstackなサイトを10個作る</h4>
              <span>50%</span>
              <div className={Styles.progressbar}>
                <div className={Styles.side}>
                  <span style={{ "--i": "50%" }}></span>
                </div>
              </div>
            </div>

            <div className={Styles.progressbarWrapper}>
              <h4>サンプルWebサイトを20個作る</h4>
              <span>45%</span>
              <div className={Styles.progressbar}>
                <div className={Styles.side}>
                  <span style={{ "--i": "45%" }}></span>
                </div>
              </div>
            </div>

            <div className={Styles.progressbarWrapper}>
              <h4>最新のCSSを学習する</h4>
              <span>20%</span>
              <div className={Styles.progressbar}>
                <div className={Styles.side}>
                  <span style={{ "--i": "20%" }}></span>
                </div>
              </div>
            </div>

            <div className={Styles.progressbarWrapper}>
              <h4>AWS認定資格を2つ以上取る</h4>
              <span>0%</span>
              <div className={Styles.progressbar}>
                <div className={Styles.side}>
                  <span style={{ "--i": "0" }}></span>
                </div>
              </div>
            </div>
          </div>

          {/*
          <div className={Styles.hurryUp}>
            <h3>Hurry Up‍<span className={Styles.emoji}>️🏇️💦</span></h3>

            <div className={Styles.progressbarWrapper}>
              <h4>ECMAScript2021を全部読む</h4>
              <span>1%</span>
              <div className={Styles.progressbar}>
                <div className={Styles.side}>
                  <div className={`${Styles.bar} ${Styles.barEcma}`}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.finished}>
            <h3><span className={Styles.emoji}>️🚀</span> Finished&nbsp;‍<span className="emoji">️🚀</span></h3>

            <ul className={Styles.finishedList}>
              <div className={Styles.progressbarWrapper}>
                <h4>🎊中小企業診断士 1次試験合格🎊</h4>
                <br />
                <h4>🎊GatsbyBlogの完成度を上げる🎊</h4>
              </div>
            </ul>
          </div>
          */}
        </div>
      </section>

      <footer className={Styles.footer}>
        <h2 className={Styles.footerTitle}>Developed by Gatsby</h2>
      </footer>
    </>
  )
}

export default Index
