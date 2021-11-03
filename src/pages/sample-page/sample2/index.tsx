import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Styles = require("./styles/style.module.scss")
const Drawer = require("./styles/_drawer.module.scss")
const GlobalNav = require("./styles/_globalNav.module.scss")

const Sample2 = () => (
	<>

		<input type="checkbox" className={Drawer.check} id="checked" />
		<label className={Drawer.menuBtn} htmlFor="checked">
			<span className={`${Drawer.bar} ${Drawer.barTop}`}></span>
			<span className={`${Drawer.bar} ${Drawer.barMiddle}`}></span>
			<span className={`${Drawer.bar} ${Drawer.barBottom}`}></span>
		</label>

		<label className={Drawer.closeMenu} htmlFor="checked"></label>
		<nav className={Drawer.drawerMenu}>
			<ul className={Drawer.drawerList}>
				<li className={Drawer.drawerItem}>Navi</li>
				<li className={Drawer.drawerItem}><a href="#" className={Drawer.drawerLink}>TOP</a></li>
				<li className={Drawer.drawerItem}><a href="#intro" className={Drawer.drawerLink}>What's potsunen47?</a></li>
			</ul>
		</nav>

		<nav className={GlobalNav.globalNav}>
			<ul className={GlobalNav.links}>
				<li>hoge</li>
				<li>hoge</li>
				<li>hoge</li>
				<li>hoge</li>
				<li>hoge</li>
			</ul>

			<ul className={GlobalNav.siteNav}>
				<li className={GlobalNav.navItem}><a href="#intro">What's potsunen47?</a></li>
				<li className={GlobalNav.navItem}><a href="#newRelease">New Release</a></li>
				<li className={GlobalNav.navItem}><a href="#contents">Contents</a></li>
				<li className={GlobalNav.navItem}><a href="#member">Member</a></li>
			</ul>
		</nav>

		<main className={Styles.main} role="main">

		<header className={Styles.header}>
			<div className={Styles.headerTitleWrapper}>
				<div className={Styles.headerNogi}></div>
				<h2 className={`${Styles.title} ${Styles.headerTitle}`}>Potsunen47<br />Official Web Site</h2>
			</div>

			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide slide-1">
						<h3 className="slide-title">Live Photograph 1</h3>
						<p className="slide-text">2019.01.01 Tokyo Dome Live</p>
					</div>
					<div className="swiper-slide slide-2">
						<h3 className="slide-title">Live Photograph 2</h3>
						<p className="slide-text">2019.01.03 Nagoya Dome Live</p>
					</div>
					<div className="swiper-slide slide-3">
						<h3 className="slide-title">Live Photograph 3</h3>
						<p className="slide-text">2019.01.09 Osaka Dome Live</p>
					</div>
				</div>
				<div className="swiper-pagination"></div>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</div>
		</header>

		<section className={`${Styles.section} ${Styles.introSection}`} id="intro">
			<h2 className={`${Styles.title} ${Styles.sectionTitle}`}>What's Potsunen47?</h2>
			<p><span className={Styles.purple}>彼女たちが走り抜けた<strong>先</strong>に待っているもの、それは—</span></p>
			<p>時々、半透明なとうもろこしは目覚まし時計と相性がよくない。総理大臣が先を尖らせて近づいてくると思われる。厳密に言えば、ウィルスは最新鋭の警察官を搭載するのだろう。</p>
			<p>証拠は無いが、<span className={Styles.purple}>防犯カメラを代表する<strong>魚雷</strong></span>がボクサーの一部になる。情報によれば、アンモナイトとも呼ばれる結婚式が知られざる野球に憎悪を抱く気がする。</p>
			<p>戦艦は宇宙人を見て絶望すると聞いたことがある。そして次の朝、花火が使いやすい。道頓堀の食い倒れ人形は膨張するのであるが、青い教会が柱時計の血をすするかも知れない。</p>
			<p>軍手のような恐山が苦戦すると思われるが、その一方では、老婆の一部である草食系男子が飛行船にも似た満員電車に打ち負かされると同時に、恐るべき伊勢海老は危ない見込みである。</p>
			<p>よりによって、<span className={Styles.purple}>ダチョウにも似た木の葉</span>は思想を問い詰めるだろうし、海亀は洗濯機の独自規格であるニンジャに変身する気がした。</p>
		</section>

		<section className={`${Styles.section} ${Styles.discSection} ${Styles.sa} ${Styles.saUp}`} id="newRelease">
			<h2 className={`${Styles.title} ${Styles.sectionTitle}`}>New R<span className={Styles.purple}>el</span>ease</h2>
			<div className={Styles.wrapper}>
				<div className={Styles.thumList}>
					<StaticImage src="./src/images/disc/01.jpg" className={Styles.thum} data-id="one" alt="hoge" />
					<StaticImage src="./src/images/disc/02.jpg" className={Styles.thum} data-id="two" alt="hoge" />
					<StaticImage src="./src/images/disc/03.jpg" className={Styles.thum} data-id="three" alt="joeg" />
        </div>

        <div className={Styles.detail}>
          <div className={`${Styles.item} ${Styles.isActive}`} id="one">
            <p>2020.11.01 New Single</p>
            <p className={Styles.title}>死ぬまで<span className={Styles.purple}>愛</span>して Type-A</p>
            <div className={Styles.wrapper}>
              <StaticImage src="./src/images/disc/01.jpg" alt="hoge" />
              <ol>
                <li><p className={Styles.info}>PTNN38887-1022</p></li>
                <li><p className={Styles.info}>税込 : 1,895円</p></li>
                <li>1. 死ぬまで愛して</li>
                <li>2. ギャラクティカ銀河</li>
                <li>3. アイスホッケーの恋</li>
                <li>4. OL人生</li>
              </ol>
            </div>
          </div>

          <div className={Styles.item} id="two">
            <p>2020.11.01 New Single</p>
            <p className={Styles.title}>死ぬまで<span className={Styles.purple}>愛</span>して Type-B</p>
            <div className={Styles.wrapper}>
              <StaticImage
                src="./src/images/disc/02.jpg"
                alt="hoge"
              />
              <ol>
                <li><p className={Styles.info}>PTNN38887-1023</p></li>
                <li><p className={Styles.info}>税込 : 1,895円</p></li>
                <li>1. 死ぬまで愛して</li>
                <li>2. ロマンス浮船</li>
                <li>3. 朝ごはんを食べよう</li>
                <li>4. ピンクの画鋲</li>
              </ol>
            </div>
          </div>

          <div className={`${Styles.item}`} id="three">
            <p>2020.11.01 New Single</p>
            <p className={Styles.title}>死ぬまで<span className={Styles.purple}>愛</span>して Type-C</p>
            <div className={Styles.wrapper}>
              <StaticImage
                src="./src/images/disc/03.jpg"
                alt="hoge"
              />
              <ol>
                <li><p className={Styles.info}>PTNN38887-1024</p></li>
                <li><p className={Styles.info}>税込 : 1,895円</p></li>
                <li>1. 死ぬまで愛して</li>
                <li>2. 私の父は結界師</li>
                <li>3. 朝ごはんを食べよう</li>
                <li>4. </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={`${Styles.section} ${Styles.contentsSection}`} id="contents">
      <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>Contents</h2>
      <a
        className={Styles.contents}
        href="https://blog.toriwatari.work/series/GitAdvance/page/1/"
        target="_blank"
      >
        <StaticImage
          src="src/images/news/news1.jpg"
          alt="hoge"
        />
        <div className={Styles.contentsWrapper}>
          <div className={Styles.titleWrapper}>
            <p className={Styles.contentsTitle}>Git中級者を目指す</p>
            <time>2020.12.03</time>
          </div>
          <div className={Styles.contentsText}>
            <p>Gitの入門書を読み終わった人向けの、さらなるステップへ進むためのGit講座です。</p>
            <p>例えば、「git rebaseを使いこなせるようになる」、「git logの出力結果を自分好みにカスタマイズする」、「.gitフォルダの中身を知る」といった題材を用意しています。</p>
          </div>
        </div>
      </a>

      <div className={`${Styles.contentsContainer} ${Styles.container2}`}>
        <a
          className={Styles.contents}
          href="https://blog.toriwatari.work/series/HelloWeb/page/1/"
          target="_blank"
        >
          <StaticImage
            src="src/images/news/news2.jpg"
            alt="Hoge"
          />
          <div className="contents-wrapper">
          <div className={Styles.titleWrapper}>
              <p className="contents-title">初めてのHTML & CSS</p>
              <time>2019.1.26</time>
            </div>
            <p className="contents-text">HTMLとCSSはIT技術の入門に最適だと考えています。これらの言語を用い簡単なWebページを作成し、Webページの仕組みを学びます。<br />環境構築で躓くことはありません。今すぐ始められます。</p>
          </div>
        </a>
        <a className="contents" href="#">
          <img src="src/images/news/news3.jpg" />
          <div className="contents-wrapper">
              <div className={Styles.titleWrapper}>
              <p className="contents-title">Flexboxをマスターする</p>
              <time>2019.1.26</time>
            </div>
            <p className="contents-text">理想の毛虫は視聴率を見るのであったが、木の葉が乾いた眠ることがある。歯磨きが縄で吊り下げられた蝶の進化した姿であるのだった。</p>
          </div>
        </a>
      </div>

	<div className="contents-container container-4">
		<a className="contents" href="#">
			<img src="src/images/news/news4.jpg" />
			<div className="contents-wrapper">
				<div className="title-wrapper">
					<p className="contents-title">柱時計と互換性のある電子</p>
					<time>2019.1.26</time>
				</div>
				<p className="contents-text">実は、女はクォークの兄弟である雪だるまの秘密を知る予定である。</p>
			</div>
		</a>
		<a className="contents" href="#">
			<img src="src/images/news/news5.jpg" />
			<div className="contents-wrapper">
				<div className="title-wrapper">
						<p className="contents-title">伊勢海老とは似ても似つかない月</p>
						<time>2019.1.26</time>
				</div>
				<p>read more...</p>
			</div>
		</a>
		<a className="contents" href="#">
			<img src="src/images/news/news6.jpg" />
			<div className="contents-wrapper">
				<div className="title-wrapper">
					<p className="contents-title">新進気鋭の正義の味方</p>
					<time>2019.1.26</time>
				</div>
				<p>read more...</p>
			</div>
		</a>
	</div>

	<div className="btn-wrapper"><a href="#" className="btn">More</a></div>
</section>

<section className="section member-section" id="member">
	<h2 className="title section-title member-section-title">Member</h2>
	<div className="flex">
		<a href="" className="member">
			<img src="src/images/member/member1.jpg" className="member-img" />
			<div className="mask">
					<p>nanase</p>
			</div>
		</a>
		<a href="" className="member">
			<img src="src/images/member/member2.jpg" className="member-img" />
			<div className="mask">
					<p>nanami</p>
			</div>
		</a>
		<a href="" className="member">
			<img src="src/images/member/member3.jpg" className="member-img" />
			<div className="mask">
					<p>mai</p>
			</div>
		</a>
		<a href="" className="member">
			<img src="src/images/member/member4.jpg" className="member-img" />
			<div className="mask">
					<p>sayuri</p>
			</div>
		</a>
	</div>
	<div className="flex">
		<a href="" className="member">
			<img src="src/images/member/member5.jpg" className="member-img" />
			<div className="mask">
					<p>rina</p>
			</div>
		</a>
		<a href="" className="member">
			<img src="src/images/member/member6.jpg" className="member-img" />
			<div className="mask">
				<p>mai</p>
			</div>
		</a>
		<a href="" className="member">
			<img src="src/images/member/member7.jpg" className="member-img" />
			<div className="mask">
					<p>erika</p>
			</div>
		</a>
		<a href="" className="member">
			<img src="src/images/member/member8.jpg" className="member-img" />
			<div className="mask">
					<p>manatsu</p>
			</div>
		</a>
	</div>
	
	<div className="btn-wrapper">
		<a href="#" className="btn">More</a>
	</div>
</section>

</main>

<footer className="footer">
	<div className="footer-nogi sa"></div>
	<h2 className="footer-title title sa">Potsunen 47 Official Web Site</h2>

	<div className="wrapper sa">

		<div className="border"></div>

		<div className="list">
			<h3 className="list-title">Sample Pages</h3>
			<ul>
				<li><i className="fas fa-caret-right"></i><a href="https://potsunen.info/sample-page/sample1/">Sample1</a></li>
				<li><i className="fas fa-caret-right"></i><a href="https://potsunen.info/sample-page/sample2/">Sample2</a></li>
				<li><i className="fas fa-caret-right"></i><a href="https://potsunen.info/sample-page/sample3/">Sample3</a></li>

			</ul>
		</div>

		<div className="border"></div>

		<div className="list">
			<h3 className="list-title">Contents</h3>
			<ul>
				<li><i className="fas fa-caret-right"></i><a href="https://potsunen.info/css-animation/">CSS Animation & Tips</a></li>
			</ul>
		</div>

		<div className="border"></div>

		<div className="list">
			<h3 className="list-title">Blog</h3>
			<ul>
				<li><i className="fas fa-caret-right"></i><a href="https://potsunen-blog.netlify.com/">鳥に生まれることが出来なかった人へ</a></li>
			</ul>
		</div>

		<div className="border"></div>
	</div>
	<div className="hoge"></div>
		<ul className="link">
			<li><a href="/">HOME</a></li>
			<li><a href="/">サイトマップ</a></li>
			<li><a href="/">プライバシーポリシー</a></li>
			<li><a href="/">お問い合わせ</a></li>
		</ul>
    <p className="copyright">Copyright © 2020 <a href="https://potsunen.info">potsunen</a></p>
	</footer>

	</>
)

export default Sample2