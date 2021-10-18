import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Styles = require("../styles/_index.module.scss")

const IndexPage = () => (
  <>
    <header className={Styles.test} id="header">
      <h2 className="header-sub-title">toriwatari</h2>
      <h1 className="header-title">Portfolio Web Site</h1>
      <p>更新日 : <time>2021-10-17</time></p>

      <a href="/skill/" className="my-skill">
        <h3 className="my-skill-title">I <i className="fas fa-heart"></i> HTML & CSS</h3>

        {/*
        <div className="skill-wrapper">
          <div>
            <p><i className="fab fa-html5"></i>HTML5</p>
            <p><i className="fab fa-css3"></i>CSS3</p>
            <p><i className="fab fa-js-square"></i>TypeScript</p>
          </div>
          <div>
            <p><i className="fab fa-node"></i>Node.js</p>
            <p><i className="fab fa-vuejs"></i>Vue.js</p>
            <p><i className="fab fa-js-square"></i>GatsbyJS</p>
          </div>
          <div>
            <p><i className="fas fa-database"></i>MongoDB</p>
            <p><i className="fab fa-docker"></i>Docker</p>
            <p><i className="fas fa-cloud"></i>AWS</p>
          </div>
        </div>
        */}
      </a>

      <a className="arrow-container" href="#sec1">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </a>
    </header> 

    <section className="section section-links sa sa--up" id="sec1">
      <h2 className="section-title links-title">Sample Pages</h2> 

      <div className="links-wrapper">
        <a
          className="link-item sa sa--up"
          href="sample-page/sample1/"
        >
          <h3 className="title link-title">Sample1</h3>
          <i className="fas fa-code"></i>
          <p>サンプルページ1</p>
        </a>

        <a
          className="link-item sa sa--up"
          href="sample-page/sample2/"
        >
          <h3 className="title link-title">Sample2</h3>
          <div className="nogi"></div>
          <p>サンプルページ2です。〇木坂46をテーマにページを作成しました。</p>
        </a>

        <a
          className="link-item sa sa--up"
          href="sample-page/sample3/"
        >
          <h3 className="title link-title">Sample3</h3>
          <i className="fas fa-code"></i>
          <p>サンプルページ3</p>
        </a>
      </div>

      <div className="links-wrapper">
        <a
          className="link-item sa sa--up"
          href="sample-page/sample4/"
        >
          <h3 className="title link-title">Sample4</h3>
          <i className="fas fa-code"></i>
          <p>サンプルページ4</p>
        </a>
      </div>

      <div className="btn-wrapper sa sa--up">
        <a href="#" className="link-btn">More</a>
      </div>
    </section>

    <section className="section sec3 sa sa--up" id="sec3">
      <h2 className="section-title">CSS Animation & Tips</h2>

      <div className="section-wrapper">
        <img src="./src/images/css.svg" className="img" />
        <p>CSSで実現できるアニメーションや、ちょっとした小テクを紹介します。Nuxt.js + AWS Amplifyで構築しました。</p>
      </div>
      <div className="btn-wrapper">
        <a href="https://cssanimation.toriwatari.work/" className="link-btn" target="_blank">サイトを見る</a>
      </div>
    </section>

    <section className="section sa sa--up" id="sec4">
      <h2 className="section-title">Blog</h2>

      <div className="section-wrapper">
        <p>技術ネタや日記のためのブログ「鳥に生まれることができなかった人へ」を作りました。Gatsby + AWS Amplifyで構築しています。</p>
        <img src="./src/images/gatsby.svg" className="img" />
      </div>

      <div className="btn-wrapper">
        <a href="https://blog.toriwatari.work" className="link-btn" target="_blank">サイトを見る</a>
      </div>
    </section>

    <section className="section section-jamstack sa sa--up" id="sec5">
      <h2 className="section-title">JamstackなWebサイトを構築してみた</h2>
      <div className="section-wrapper">
        <img src="./src/images/static.svg" className="img" />
          <div>
            <p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。</p>
            <p>2021年度中に10個作成するのが目標です。</p>
          </div>
          <img src="./src/images/jamstack.png" className="img" />
      </div>

      <div className="btn-wrapper">
        <a href="/jamstack/" className="link-btn">More</a>
      </div>
    </section>

    <section className="section progress-section sa sa--up">
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
