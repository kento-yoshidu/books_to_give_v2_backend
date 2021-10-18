import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Styles = require("../styles/_index.module.scss")

const IndexPage = () => (
  <>
    <header className={Styles.header} id="header">
      <h2 className={Styles.headerSubTitle}>toriwatari</h2>
      <h1 className={Styles.headerTitle}>Portfolio Web Site</h1>
      <p>更新日 : <time>2021-10-17</time></p>

      <a href="/skill/" className={Styles.mySkill}>
        <h3 className={Styles.mySkillTitle}>I <i className="fas fa-heart"></i> HTML & CSS</h3>
      </a>

      <a className={Styles.arrowContainer} href="#sec1">
        <div className={Styles.arrow}></div>
        <div className={Styles.arrow}></div>
        <div className={Styles.arrow}></div>
      </a>
    </header> 

    <section className={`${Styles.section} ${Styles.sec1} sa sa--up`} id="sec1">
      <h2 className={Styles.sectionTitle}>Sample Pages</h2> 

      <div className={Styles.linksWrapper}>
        <a
          className={`${Styles.linkItem} ${Styles.sa} ${Styles.saUp}`}
          href="sample-page/sample1/"
        >
          <h3 className={Styles.linkTitle}>Sample1</h3>
          <i className="fas fa-code"></i>
          <p>サンプルページ1</p>
        </a>

        <a
          className={`${Styles.linkItem} ${Styles.sa} ${Styles.saUp}`}
          href="sample-page/sample2/"
        >
          <h3 className={Styles.linkTitle}>Sample2</h3>
          <div className={Styles.nogi}></div>
          <p>サンプルページ2です。〇木坂46をテーマにページを作成しました。</p>
        </a>

        <a
          className={`${Styles.linkItem} ${Styles.sa} ${Styles.saUp}`}
          href="sample-page/sample3/"
        >
          <h3 className={Styles.linkTitle}>Sample3</h3>
          <i className="fas fa-code"></i>
          <p>サンプルページ3</p>
        </a>

        <a
          className={`${Styles.linkItem} ${Styles.sa} ${Styles.saUp}`}
          href="sample-page/sample4/"
        >
          <h3 className={Styles.linkTitle}>Sample4</h3>
          <i className="fas fa-code"></i>
          <p>サンプルページ4</p>
        </a>
      </div>

      <div className="btn-wrapper sa sa--up">
        <a href="#" className="link-btn">More</a>
      </div>
    </section>

    <section className={`${Styles.section} sec3 sa sa--up`} id="sec3">
      <h2 className={Styles.sectionTitle}>CSS Animation & Tips</h2>

      <div className={Styles.sectionWrapper}>
        <img src="./src/images/css.svg" className="img" />
        <p>CSSで実現できるアニメーションや、ちょっとした小テクを紹介します。Nuxt.js + AWS Amplifyで構築しました。</p>
      </div>
      <div className="btn-wrapper">
        <a href="https://cssanimation.toriwatari.work/" className="link-btn" target="_blank">サイトを見る</a>
      </div>
    </section>

    <section className={`${Styles.section} sa sa--up`} id="sec4">
      <h2 className={Styles.sectionTitle}>Blog</h2>

      <div className={Styles.sectionWrapper}>
        <p>技術ネタや日記のためのブログ「鳥に生まれることができなかった人へ」を作りました。Gatsby + AWS Amplifyで構築しています。</p>
        <img src="./src/images/gatsby.svg" className={Styles.img} />
      </div>

      <div className="btn-wrapper">
        <a href="https://blog.toriwatari.work" className="link-btn" target="_blank">サイトを見る</a>
      </div>
    </section>

    <section className={`${Styles.section} section-jamstack sa sa--up`} id="sec5">
      <h2 className={Styles.sectionTitle}>JamstackなWebサイトを構築してみた</h2>
      <div className={Styles.sectionWrapper}>
        <img src="./src/images/static.svg" className={Styles.img} />
          <div>
            <p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。</p>
            <p>2021年度中に10個作成するのが目標です。</p>
          </div>
          <img src="./src/images/jamstack.png" className={Styles.img} />
      </div>

      <div className="btn-wrapper">
        <a href="/jamstack/" className="link-btn">More</a>
      </div>
    </section>

    <section className={`${Styles.section} progress-section sa sa--up`}>
      <h2 className="section-title">2021年度の個人タスク</h2>

      <div className="wrapper">
        <div className="running">
          <h3>Running...<span className="emoji">️🏃️💨</span></h3>

          <div className="progressbar-wrapper">
            <h4>サンプルWebサイトを20個作る</h4>
            <span>45%</span>
            <div className="progressbar">
              <div className="side">
                <div className="bar bar-sample"></div>
              </div>
            </div>
          </div>

          <div className="progressbar-wrapper">
            <h4>Jamstackなサイトを10個作る</h4>
            <span>40%</span>
            <div className="progressbar">
              <div className="side">
                <div className="bar bar-jam"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hurry-up">
          <h3>Hurry Up‍<span className="emoji">️🏇️💦</span></h3>

          <div className="progressbar-wrapper">
            <h4>ECMAScript2021を全部読む</h4>
            <span>1%</span>
            <div className="progressbar">
              <div className="side">
                <div className="bar bar-ecma"></div>
              </div>
            </div>
          </div>
          <div className="progressbar-wrapper">
            <h4>Vue.js + GraphQL + MongoDBで何か作る</h4>
            <span>0%</span>
            <div className="progressbar">
              <div className="side">
                <div className="bar bar-app"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="finished">
          <h3><span className="emoji">️🚀</span>Finished‍<span className="emoji">️🚀</span></h3>

          <ul className="finished-list">
            <div className="progressbar-wrapper">
              <h4>🎊中小企業診断士 1次試験合格🎊</h4>
              <br />
              <h4>🎊GatsbyBlogの完成度を上げる🎊</h4>
            </div>
          </ul>
        </div>
      </div>
    </section>

    <footer className="footer">
      <h2 className="footer-title">toriwatari Portfolio Web Site</h2>
      <p className="copyright">toriwatari @2021</p>
    </footer>
  </>
)

export default IndexPage
