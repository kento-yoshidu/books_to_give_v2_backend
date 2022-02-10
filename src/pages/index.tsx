import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Button from "../components/button"
import IO from "../lib/IO"

import * as Styles from "../styles/index.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index: React.VFC = () => {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    IO() 

    setWindowSize(window.screen.width)
  },[]);

  return (
  <>
    <Seo
      title="ポートフォリオサイト"
    />

    <header className={Styles.header} id="header">
      <div className={Styles.sa}>
        <h2 className={Styles.headerSubTitle}>toriwatari</h2>
        <h1 className={Styles.headerTitle}>Portfolio Website</h1>
        <h3 className={Styles.message}>I <FontAwesomeIcon icon={faHeart} /> HTML & CSS</h3>
        <p>更新日 : <time>2022-02-10</time></p>

        { windowSize }

        <Link className={Styles.arrowContainer} to="#sec1">
          <div className={Styles.arrow}></div>
          <div className={Styles.arrow}></div>
          <div className={Styles.arrow}></div>
        </Link>
      </div>
    </header> 

    <section className={`${Styles.section} ${Styles.sec1}`} id="sec1">
      <h2 className={`${Styles.sectionTitle} ${Styles.linksTitle}`}>Sample Pages</h2> 

      <div className={`${Styles.linksWrapper} ${Styles.sa} ${Styles.saUp}`}>
        <Link
          className={Styles.linkItem}
          to="sample-page/sample1/"
        >
          <h3 className={`${Styles.linkTitle}`}>Sample1</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ1</p>
        </Link>

        <Link
          className={Styles.linkItem}
          to="sample-page/sample2/"
        >
          <h3 className={`${Styles.linkTitle}`}>Sample2</h3>
          <div className={Styles.nogi}></div>
          <p>サンプルページ2です。〇木坂46をテーマにページを作成しました。</p>
        </Link>

        <Link
          className={Styles.linkItem}
          to="sample-page/sample3/"
        >
          <h3 className={`${Styles.linkTitle}`}>Sample3</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ3</p>
        </Link>

        <Link
          className={Styles.linkItem}
          to="sample-page/sample4"
        >
          <h3 className={`${Styles.linkTitle}`}>Sample4</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ4</p>
        </Link>

        <Link
          className={Styles.linkItem}
          to="sample-page/sample5"
        >
          <h3 className={`${Styles.linkTitle}`}>Sample5</h3>
          <FontAwesomeIcon icon={faCode} />
          <p>サンプルページ5</p>
        </Link>
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
      <h2 className={Styles.sectionTitle}>2021年度の個人タスク</h2>

      <div className={Styles.wrapper}>
        <div className={Styles.running}>
          <h3>Running...<span className={Styles.emoji}>️🏃️💨</span></h3>

          <div className={Styles.progressbarWrapper}>
            <h4>Jamstackなサイトを10個作る</h4>
            <span>50%</span>
            <div className={Styles.progressbar}>
              <div className={Styles.side}>
                <div className={`${Styles.bar} ${Styles.barJam}`}></div>
              </div>
            </div>
          </div>

          <div className={Styles.progressbarWrapper}>
            <h4>サンプルWebサイトを20個作る</h4>
            <span>45%</span>
            <div className={Styles.progressbar}>
              <div className={Styles.side}>
                <div className={`${Styles.bar} ${Styles.barSample}`}></div>
              </div>
            </div>
          </div>
        </div>

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
          <h3><span className={Styles.emoji}>️🚀</span> Finished ‍<span className="emoji">️🚀</span></h3>

          <ul className={Styles.finishedList}>
            <div className={Styles.progressbarWrapper}>
              <h4>🎊中小企業診断士 1次試験合格🎊</h4>
              <br />
              <h4>🎊GatsbyBlogの完成度を上げる🎊</h4>
            </div>
          </ul>
        </div>
      </div>
    </section>

    <footer className={Styles.footer}>
      <h2 className={Styles.footerTitle}>Developed by Gatsby</h2>
    </footer>
  </>
  )
}

export default Index
