import React from "react"

const Styles = require("./scss/style.module.scss")

const Sample4 = () => (
	<>
<header className={Styles.header} id="js-header">
	<h1 className={Styles.headerTitle}>
		<a href="/">
			Sample4 Web Site
		</a>
	</h1>
</header>

<main className={Styles.main}>
	<section className={Styles.hero}>
		<h2 className={Styles.heroTitle}>Sample Web Site 4</h2>
		<h2 className={Styles.heroText}>めぐり逢いはただ、あくびもらった後の 両目閉じる感じの下手なウインクからどれくらい？</h2>
		<div className={Styles.btnWrapper}>
			<a className={`${Styles.btn} ${Styles.heroBtn}`} href="#">View</a>
		</div>
	</section>

	<section className={`${Styles.section} ${Styles.sec1}`}>
		<div className={Styles.wrapper}>
			<div className={Styles.titleWrapper}>
				<h2 className={Styles.sectionTitle}>Product</h2>
				<p className={Styles.subTitle}>製品情報</p>
			</div>

			<div className={Styles.image}></div>

			<div className={Styles.back}></div>

			<div className={Styles.text}>
				<p>誇り高きあのオパビニアの子孫</p>
				<p>俺は生きていた 妄想から覚めてここにいた</p>
				<p>意味はないのかもね だけど幸せ 繋がった時には</p>

				<div className={Styles.btnWrapper}>
					<a className={`${Styles.btn} ${Styles.sec1Btn}`} href="#">View</a>
				</div>
			</div>


		</div>
	</section>

	<section className={`${Styles.section} ${Styles.sec2}`}>
		<div className={Styles.wrapper}>
			<div className={Styles.titleWrapper}>
				<h2 className={Styles.sectionTitle}>Technorogy</h2>
				<p className="sub-title">技術</p>
			</div>

			<div className="box-wrapper">
				<div className="box box-1">
					<div className="img"></div>
					<div className="text">
						<h3 className="box-title">最先端の技術</h3>
						<p>デートにむかない坂道を君の手を引いて駆け上がり</p>
						<p>恋も希望も取り返す ばれたって構わない</p>
						<p>穴あきの服で風を感じた日々が</p>
						<p>砂埃の中もがいてた日々が色づいた</p>
					</div>
				</div>

				<div className="box box-2">
					<div className="img"></div>
					<div className="text">
						<h3 className="box-title">最先端の技術</h3>
						<p>デートにむかない坂道を君の手を引いて駆け上がり</p>
						<p>恋も希望も取り返す ばれたって構わない</p>
						<p>穴あきの服で風を感じた日々が</p>
						<p>砂埃の中もがいてた日々が色づいた</p>
					</div>
				</div>

				<div className="box box-3">
					<div className="img"></div>
					<div className="text">
						<h3 className="box-title">最先端の技術</h3>
						<p>デートにむかない坂道を君の手を引いて駆け上がり</p>
						<p>恋も希望も取り返す ばれたって構わない</p>
						<p>穴あきの服で風を感じた日々が</p>
						<p>砂埃の中もがいてた日々が色づいた</p>
					</div>
				</div>
			</div>

			<div className="btn-wrapper">
				<a className="btn sec2-btn" href="#">View</a>
			</div>

			<div className="back"></div>

		</div>

	</section>

	<section className="sec3">
		<div className="wrapper">
			<div className="title-wrapper">
				<h2 className="section-title">About Us</h2>
				<p className="sub-title">企業情報</p>
			</div>

			<dl className="information">
				<dt>会社名</dt>
				<dd>Sample Web Site株式会社</dd>

				<dt>創業</dt>
				<dd>1966年（昭和41年）1月31日</dd>

				<dt>本社所在地</dt>
				<dd>滋賀県草津市追分南●●　100-100-1</dd>

				<dt>従業員数</dt>
				<dd>44,805名（2021年3月31日時点）</dd>
				
				<dt>資本金</dt>
				<dd>630億円（2020年6月20日より）</dd>

				<dt>取締役</dt>
				<dd>代表取締役　誇り高きイワシ恒夫<br />
						取締役　糖質制限孝明<br />
						社外取締役　木の机の暖かみ菊子</dd>
			</dl>

		</div>
	</section>
</main>
</>
)

export default Sample4

{/*https://dhf.co.jp/-->

<!--https://www.mitsuoka-motor.com/lineup/viewtnostalgia/-->
*/}