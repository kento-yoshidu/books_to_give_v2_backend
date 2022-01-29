import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./components/header"

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
  </div>
)

export default Content
