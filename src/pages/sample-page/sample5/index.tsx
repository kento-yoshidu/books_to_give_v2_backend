import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "./scss/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false
const Sample6 = () => (
  <div className={Styles.body}>
    <header className={Styles.header}>
      <div className={`${Styles.headerContainer} ${Styles.wContainer}`}>
          <a href="#">
            <StaticImage
              src="./images/logo.svg"
              alt="サイトアイコン"
              width={135}
              height={26}
            />
          </a>

        <button className={Styles.navBtn}>
          <FontAwesomeIcon
            icon={faBars}
            color="#aaa"
          />
        </button>
      </div>
    </header>

    <section className={Styles.hero}>
      <div className={`${Styles.heroContainer} ${Styles.wContainer}`}>
        <h1>Sample Page 5</h1>
        <p>毛の生えたＵＦＯは気狂◯帽子屋の親戚である眼球に恋文を送るのである</p>
        <Link
          to="#"
          className={Styles.btn}
        >
          無料で始める
        </Link>
      </div>
    </section>

    <section className={Styles.imgText}>
      <div className={`${Styles.imgTextContainer} ${Styles.wContainer}`}>
        <div className={Styles.text}>
          <h2 className={Styles.headingDecoration}>日常のツールたち</h2>
          <p>Conventions</p>
          <p>伝説によると、誕生日が歩行者信号と互換性のあるムカデの正体を暴くのである。</p>
        </div>

        <figure className={Styles.img}>
          <StaticImage
            src="./images/tool.jpg"
            alt="hoge"
            width={1600}
            height={1260}
          />
        </figure>
      </div>
    </section>

    <section className={Styles.imgText}>
      <div className={`${Styles.imgTextContainer} ${Styles.reverse} ${Styles.wContainer}`}>
        <div className={Styles.text}>
          <h2 className={Styles.headingDecoration}>効率化の手助け</h2>
          <p>Helpful</p>
          <p>伝説によると、誕生日が歩行者信号と互換性のあるムカデの正体を暴くのである。</p>
        </div>

        <figure className={Styles.img}>
          <StaticImage
            src="./images/helpful.jpg"
            alt="hoge"
            width={1600}
            height={1260}
          />
        </figure>
      </div>
    </section>

    <section className={Styles.posts}>
      <div className={Styles.wContainer}>
        <h2 className={Styles.heading}>News Release <span>最新情報</span></h2>

      <div className={Styles.postsContainer}>
        <article className={Styles.post}>
          <a href="#">
            <figure>
              <StaticImage
                src="./images/news01.jpg"
                alt=""
                width={1000}
                height={750}
              />
            </figure>

            <h3>スパンコール</h3>
            <p>じゃいｒｊがｐｊｖぱんｆが＠ｒｇじゃ；ｒがあんｋｇｒｇなｐｒがヴぁｋふぁｐぎじあｐｒｊが；ヴぁｋｆｇｒｊｐｒが＠</p>
          </a>
        </article>
        <article className={Styles.post}>
          <a href="#">
            <figure>
              <StaticImage
                src="./images/news02.jpg"
                alt=""
                width={1000}
                height={750}
              />
            </figure>

            <h3>スパンコール</h3>
            <p>じゃいｒｊがｐｊｖぱんｆが＠ｒｇじゃ；ｒがあんｋｇｒｇなｐｒがヴぁｋふぁｐぎじあｐｒｊが；ヴぁｋｆｇｒｊｐｒが＠</p>
          </a>
        </article>
        <article className={Styles.post}>
          <a href="#">
            <figure>
              <StaticImage
                src="./images/news03.jpg"
                alt=""
                width={1000}
                height={750}
              />
            </figure>

            <h3>スパンコール</h3>
            <p>じゃいｒｊがｐｊｖぱんｆが＠ｒｇじゃ；ｒがあんｋｇｒｇなｐｒがヴぁｋふぁｐぎじあｐｒｊが；ヴぁｋｆｇｒｊｐｒが＠</p>
          </a>
        </article>
        <article className={Styles.post}>
          <a href="#">
            <figure>
              <StaticImage
                src="./images/news04.jpg"
                alt=""
                width={1000}
                height={750}
              />
            </figure>

            <h3>スパンコール</h3>
            <p>じゃいｒｊがｐｊｖぱんｆが＠ｒｇじゃ；ｒがあんｋｇｒｇなｐｒがヴぁｋふぁｐぎじあｐｒｊが；ヴぁｋｆｇｒｊｐｒが＠</p>
          </a>
        </article>
        <article className={Styles.post}>
          <a href="#">
            <figure>
              <StaticImage
                src="./images/news05.jpg"
                alt=""
                width={1000}
                height={750}
              />
            </figure>

            <h3>スパンコール</h3>
            <p>じゃいｒｊがｐｊｖぱんｆが＠ｒｇじゃ；ｒがあんｋｇｒｇなｐｒがヴぁｋふぁｐぎじあｐｒｊが；ヴぁｋｆｇｒｊｐｒが＠</p>
          </a>
        </article>
        <article className={Styles.post}>
          <a href="#">
            <figure>
              <StaticImage
                src="./images/news06.jpg"
                alt=""
                width={1000}
                height={750}
              />
            </figure>

            <h3>スパンコール</h3>
            <p>じゃいｒｊがｐｊｖぱんｆが＠ｒｇじゃ；ｒがあんｋｇｒｇなｐｒがヴぁｋふぁｐぎじあｐｒｊが；ヴぁｋｆｇｒｊｐｒが＠</p>
          </a>
        </article>
      </div>
      </div>
    </section>
  </div>
)

export default Sample6