import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Header } from "./components/header"
import { Footer } from "./components/footer"

import * as Styles from "./scss/style.module.scss"

const Content = () => (
  <div className={Styles.body}>
    <Header />

    <article className={Styles.entry}>
      <figure className={Styles.entryImg}>
        <StaticImage
          src="./images/service.jpg"
          alt="hoge"
        />
      </figure>

      <div className={Styles.wContainer}>
        <h1 className={Styles.headingDecoration}>サービス案内</h1>
        <p>Services</p>

        <div className={Styles.entryContainer}>
          <p>身近にあふれるたくさんの文具や事務用品。こうしたステーショナリーは仕事に欠かせないものであるのと同時に、毎日を楽しくしてくれるものであり、クリエイティブを刺激してくれるものでもあります。</p>
          <p>そして、デジタル化が進んだ現在では、スマートフォンやパソコンの中で便利な道具が必要とされるようになっています。</p>
          <p>Boadsではサブスクリプションの形式で、さまざまな道具の提供、販売、貸し出しなどのサービスを展開しています。</p>
          <p>主要都市にある工房スペースでは、最新の３Dプリンターやレーザーカッター、旋盤などの各種工具などもご利用いただけます。</p>
          <p>もちろん、オンライン上の便利な制作・管理ツールも取り揃えていますので、どんどん活用してください。</p>
        </div>
      </div>
    </article>

    <div className={Styles.plans}>
      <div className={Styles.wContainer}>
        <h2 className={Styles.heading}>
          Service Plans
          <span>サービスプラン</span>
        </h2>

        <div className={Styles.plansContainer}>
          <div className={Styles.plan}>
            <h3>Free</h3>
            <p className={Styles.desc}>無料プランです。</p>
            <p className={Styles.price}>無料</p>
            <a href="#" className={Styles.btn}>使ってみる</a>
          </div>

          <div className={Styles.plan}>
            <h3>Standard</h3>
            <p className={Styles.desc}>普通プランです。普通プランです。普通プランです。</p>
            <p className={Styles.price}>980円/月</p>
            <a href="#" className={`${Styles.btnAccent} ${Styles.btn}`}>使ってみる</a>
          </div>

          <div className={Styles.plan}>
            <h3>Pro</h3>
            <p className={Styles.desc}>特別プランです。特別プランです。特別プランです。特別プランです。特別プランです。</p>
            <p className={Styles.price}>2,800円/月</p>
            <a href="#" className={`${Styles.btnAccent} ${Styles.btn}`}>使ってみる</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Content
