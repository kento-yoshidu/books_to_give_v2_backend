import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Styles = require("./styles/sample1.module.scss")
const Navi = require("./styles/navi.module.scss")

const Sample1: React.VFC = () => (
  <>
    <nav className={Navi.globalNav} id="js-global-nav">
      <h1 className={`${Navi.title} ${Navi.navTitle}`}>Sample1</h1>
      <ul className={Navi.navList}>
        <li className={Navi.navItem}><a href="#">HOME</a></li>
        <li className={Navi.navItem}><a href="#about">About</a></li>
        <li className={Navi.navItem}><a href="#article">Article</a></li>
        <li className={Navi.navItem}><a href="#photograph">Photograph</a></li>
      </ul>
    </nav>

    <header className={Styles.header}>
      <h1 className={`${Styles.title} ${Styles.headerTitle}`}>Sample1</h1>
      <StaticImage
        src="./images/top.webp"
        alt="ヒーロー画像"
        className={Styles.imgWrapper}
      />
    </header>

    <main className={Styles.main}>

      <section className={`${Styles.section} ${Styles.sec1}`} id="about">
        <div className={Styles.sectionTitleParent} id="js-trigger">
          <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>About</h2>
        </div>
        <div className={Styles.intro}>
          <p className={Styles.introText}>神に見放された喪服がハングアップするのだから、パイプを搭載した軍手は骨つき肉を食べるべきだ。わかりやすく言えば、巨大な愚か者は回転する空缶と互換性のある内臓が誕生するということである。今、階段が鋲の打たれた蛍を発明するのだろう。堕落したドラキュラが宇宙旅行をするのだから、いつの日にか、虫歯とも呼ばれる豚肉が消化器を買収するだろう。</p>
          <p className={Styles.introText}>橋は脱皮したばかりの偉大であるかも知れない。実際、戦艦としてのネオンライトが水墨画の上で動作する火力発電の真理を発見するのだから、トンボを内蔵した郵便ポストは眼帯のようにも見えることもある。鉛でできた数学者は大木に感動することもある。そして次の朝、韓国とも呼ばれる道頓堀の食い倒れ人形は石鹸の一部である石灰を問い詰めるのである。</p>
        </div>
      </section>

      <section className={`${Styles.section} ${Styles.sec2}`} id="article">
        <div className={Styles.sectionTitleParent}>
          <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>Artcile</h2>
        </div>

        <div className={Styles.wrapper}>
          <div className={Styles.topic}>
            <h2 className={`${Styles.title} ${Styles.topicTitle}`}>初めてのHTML & CSS</h2>
            <i className="topic-icon fab fa-html5"></i>
            <p className={Styles.topicText}>前提知識はほとんどなくてOKです。HTMLとCSSを使用してWebページを作成します。</p>
            <a className={Styles.topicBtn} href="https://blog.toriwatari.work/series/HelloWeb/page/1/" target="_blink">more</a>
          </div>

          <div className={Styles.topic}>
            <h2 className={`${Styles.title} ${Styles.topicTitle}`}>Git中級者を目指す</h2>
            <i className="topic-icon fab fa-git-square"></i>
            <p className={Styles.topicText}>Gitの入門書を読み終わった人向けの、さらなるステップへ進むためのGit講座です。</p>
            <a className={Styles.topicBtn} href="https://blog.toriwatari.work/series/GitAdvance/page/1/" target="_blink">more</a>
          </div>

          <div className={Styles.topic}>
            <h2 className={`${Styles.title} ${Styles.topicTitle}`}>日記</h2>
            <i className="topic-icon fas fa-book"></i>
            <p className={Styles.topicText}>プログラミング以外のことを記事にしています。</p>
            <a className={Styles.topicBtn} href="https://blog.toriwatari.work/series/Diary/page/1/" target="_blink">more</a>
          </div>
        </div>
        <div className="btn-wrapper"><a href="https://blog.toriwatari.work/page/1/" className="btn" target="_blink">read more</a></div>
      </section>
        
      <section className="section photo-section" id="photograph">
        <div className="section-title-parent">
          <h2 className="title section-title">Photograph</h2>
        </div>
        <div className="photo-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet="./src/images/pc/image01.webp"
              media="(min-width: 768px)"
              width="300px"
              height="200px"
            />
            <source
              type="image/webp"
              srcSet="./src/images/mobi/image01_mobi.webp"
              media="(max-width: 767px)"
              width="160px"
            />
            <img
              src="src/images/pc/image02.jpg"
              alt="トップ画像"
            />
          </picture>

          <picture>
            <source
              type="image/webp"
              srcSet="./src/images/pc/image02.webp"
              media="(min-width: 768px)"
              width="300px"
              height="200px"
            />
            <source
              type="image/webp"
              srcSet="./src/images/mobi/image02_mobi.webp"
              media="(max-width: 767px)"
              width="160px"
            />
            <img
              src="./src/images/pc/image02.jpg"
              alt="トップ画像"
            />
          </picture>

          <picture>
            <source
              type="image/webp"
              srcSet="./src/images/pc/image03.webp"
              media="(min-width: 768px)"
              width="300px"
              height="200px"
            />
            <source
              type="image/webp"
              srcset="./src/images/mobi/image03_mobi.webp"
              media="(max-width: 767px)"
              width="160px"
            />
            <img
              src="./src/images/pc/image03.jpg"
              alt="トップ画像"
            />
          </picture>

          <picture>
            <source
              type="image/webp"
              srcset="./src/images/pc/image04.webp"
              media="(min-width: 768px)"
              width="300px"
              height="200px"
            />
            <source
              type="image/webp"
              srcset="./src/images/mobi/image04_mobi.webp"
              media="(max-width: 767px)"
              width="160px"
            />
            <img
              src="./src/images/pc/image04.jpg"
              alt="トップ画像"
            />
          </picture>
        </div>
      </section>
    </main>

    <footer className="footer">
      <h2 className="title footer-title">Toriwatari Portfolio</h2>
      <div className="footer-wrapper">
        <section className="footer-section">
          <h3 className="title section-title">Sample Page</h3>
          <ul className="footer-list">
            <li className="list-item"><a href="https://potsunen.info/sample-page/sample2/">Sample2</a></li>
            <li className="list-item"><a href="https://potsunen.info/sample-page/sample3/">Sample3</a></li>
          </ul>
        </section>
        <section className="footer-section">
          <h3 className="title section-title">Techs</h3>
          <ul className="footer-list">
            <li className="list-item"><a href="https://cssanimation.toriwatari.work/" target="_blink">CSS Animation & Tips</a></li>
          </ul>
        </section>
        <section className="footer-section">
          <h3 className="title section-title">Blog</h3>
          <ul className="footer-list">
            <li className="list-item"><a href="https://blog.toriwatari.work/page/1/" target="_blink">鳥に生まれることができなかった人へ</a></li>
          </ul>
        </section>
      </div>

      <p className="copyright">Copyright © 2020 <a href="https://potsunen.info">toriwatari</a></p>
    </footer>
  </>
)

export default Sample1