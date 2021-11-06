import React from "react"

const Styles = require("./scss/style.module.scss")

const Sample5 = () => (
	<>
	<nav className={Styles.nav}>
		<h1>Samaple5 Clinic</h1>
		<ul>
			<li>HOME</li>
			<li>NEWS</li>
			<li>EXAMINE</li>
			<li>MEMBER</li>
		</ul>
	</nav>

	<header className={Styles.header}>
		<div className={Styles.headerWrapper}>
			<h1>Sample5 Clinic</h1>
			<p>負けないよ 僕は生き物で 守りたい生き物を抱きしめてぬくもりを分けた 小さな星のすみっこ</p>
		</div>
	</header>

	<section className={`${Styles.section} ${Styles.sec1}`}>
		<h2 className={Styles.sectionTitle}>ごあいさつ</h2>

		<div className={Styles.textWrapper}>
			<div className={Styles.titleWrapper}>
				<div className={Styles.dot}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<h2 className={Styles.textTitle}>院長の筧です</h2>
			</div>
			<p>Sample5 Clinic院長の筧です。滋賀県草津市で歯科医院を開業し、10年目になります。</p>
			<p>従来の「痛い」「怖い」歯医者のイメージを変えるべく、クリーンで清潔感のある歯医者さんとなれるよう、スタッフ一同努力しています。</p>
			<a href="#" className={Styles.link}></a>
		</div>

		<div className={Styles.img}></div>

		<div className={Styles.box}></div>
	</section>

	<section className={`${Styles.section} ${Styles.sec2}`}>
		<h2 className={Styles.sectionTitle}>診察内容</h2>

		<div className={Styles.menuWrapper}>
			<div className={Styles.menu}>
				<div className={Styles.titleWrapper}>
					<div className={Styles.dot}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h2 className={Styles.textTitle}>院長の筧です</h2>
				</div>
				<a href="#" className={Styles.link}>aaa</a>
			</div>
			<div className={Styles.menu}>
				<div className={Styles.titleWrapper}>
					<div className={Styles.dot}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h2 className={Styles.textTitle}>院長の筧です</h2>
				</div>
				<a href="#" className={Styles.link}>aaa</a>
			</div>
			<div className={Styles.menu}>
				<div className={Styles.titleWrapper}>
					<div className={Styles.dot}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h2 className={Styles.textTitle}>院長の筧です</h2>
				</div>
				<a href="#" className={Styles.link}>aaa</a>
			</div>
			<div className={Styles.menu}>
				<div className={Styles.titleWrapper}>
					<div className={Styles.dot}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h2 className={Styles.textTitle}>院長の筧です</h2>
				</div>
				<a href="#" className={Styles.link}>aaa</a>
			</div>
			<div className={Styles.menu}>
				<div className={Styles.titleWrapper}>
					<div className={Styles.dot}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h2 className={Styles.textTitle}>院長の筧です</h2>
				</div>
				<a href="#" className={Styles.link}>aaa</a>
			</div>
			<div className={Styles.menu}>
				<div className={Styles.titleWrapper}>
					<div className={Styles.dot}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h2 className={Styles.textTitle}>院長の筧です</h2>
				</div>
				<a href="#" className={Styles.link}>aaa</a>
			</div>
		</div>
	</section>

	<section className="section sec2">
		<h2 className="section-title">医院案内</h2>
		<div className="menu-wrapper">
			<div className="menu">
				<div className="menu-wrapper">
					<div className="dot">
						<span></span> <span></span> <span></span> <span></span> <span></span>
					</div>
					<h3 className="menu-title">一般歯科</h3>
				</div>
				<a href="#" className="link">aaa</a>
			</div>
		</div>
	</section>
	</>
)

export default Sample5