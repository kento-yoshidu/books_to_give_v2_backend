import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Particles from "react-tsparticles";

const Styles = require("./scss/style.module.scss")

const Sample3 = () => (
	<>
		<header className={Styles.header} id="js-header">
			<Particles
				id="tsparticles"
				//init={particlesInit}
				//loaded={particlesLoaded}
				options={{
					/*
					background: {
						color: {
							value: "#0d47a1",
						},
					},
					*/
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
							enable: false,
							//mode: "push",
						},
						onHover: {
							enable: false,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						bubble: {
						distance: 400,
						duration: 2,
						opacity: 0.8,
						size: 40,
					},
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enable: true,
				},
				move: {
					direction: "top-right",
					enable: true,
					outMode: "out",
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						value_area: 800,
					},
					value: 75,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					random: true,
					value: 5,
				},
			},
			detectRetina: true,
      }}
    />
		<div className={`${Styles.circle} ${Styles.circle1}`}></div>
		<div className={`${Styles.circle} ${Styles.circle2}`}></div>
		<div className={`${Styles.circle} ${Styles.circle3}`}></div>

		<div className={Styles.textWrapper}>
			<h1 className={Styles.headerTitle}>
				Sample Page 3
			</h1>
			<h2 className={Styles.productTitle}>
				Sample Web Service
			</h2>
			<p className={Styles.text}>
				<span>静</span>
				<span>的</span>
				<span>ホ</span>
				<span>ス</span>
				<span>テ</span>
				<span>ィ</span>
				<span>ン</span>
				<span>グ</span>
			</p>
			<p className={Styles.text}>
				<span>自</span>
				<span>動</span>
				<span>デ</span>
				<span>プ</span>
				<span>ロ</span>
				<span>イ</span>
			</p>
			<p className={Styles.text}>
				<span>ロ</span>
				<span>ー</span>
				<span>ド</span>
				<span>バ</span>
				<span>ラ</span>
				<span>ン</span>
				<span>シ</span>
				<span>ン</span>
				<span>グ</span>
			</p>
			<p className={Styles.text}>
				<span>マ</span>
				<span>イ</span>
				<span>ク</span>
				<span>ロ</span>
				<span>サ</span>
				<span>ー</span>
				<span>ビ</span>
				<span>ス</span>
			</p>
		</div>
	</header>

	<main className={Styles.main}>
	<section className={`${Styles.section} ${Styles.contentsSection}`}>
		<h2 className={Styles.sectionTitle}>Contents</h2>

		<section className={Styles.contents1}>
			<div className={Styles.sectionWrapper}>
				<div className={Styles.introduction}>
					<div className={Styles.numbering}>01</div>
					<h2 className={`${Styles.title} ${Styles.contentsTitle}`}>CSS Animation & Tips</h2>
					<p className={Styles.text}>CSSのみで実現できるアニメーションや、様々なTipsを紹介します。Nuxt.jsで構築しています。</p>
				</div> 

        <StaticImage
          src="./svg/section1-bg.svg"
          alt="hoge"
          className={Styles.sectionImage}
          imgClassName={Styles.svgImage}
        />
			</div>

			<div className={Styles.btnWrapper}>
				<a href="https://cssanimation-and-tips.netlify.app/" className="link-btn" target="_blank">詳しく見る <i className="fas fa-external-link-alt"></i></a>
			</div>
		</section>

		<section className={Styles.contents2}>
			<div className={Styles.sectionWrapper}>
        <StaticImage
          src="./svg/section2-bg.svg"
          alt="hoge"
          className={Styles.sectionImage}
          imgClassName={Styles.svgImage}
        />

				<div className={Styles.introduction}>
					<div className={Styles.numbering}>02</div>
					<h2 className={`${Styles.title} ${Styles.contentsTitle}`}>Blog</h2>
					<p className={Styles.text}>技術・日記をつづるためのブログ「鳥に生まれることができなかった人へ」です。</p>
					<p className={Styles.text}>静的サイトジェネレーターのGatsbyを使用しています。AWSでホスティングしています。</p>
				</div>
			</div>

			<div className={Styles.btnWrapper}>
				<a href="https://blog.toriwatari.work/page/1/" className="link-btn" target="_blank">詳しく見る <i className="fas fa-external-link-alt"></i></a>
			</div>
		</section>
	</section>

	<section className={`${Styles.section} ${Styles.sec3}`}>
		<div className={Styles.sectionWrapper}>
			<div className={Styles.introduction}>
				<div className={Styles.inner}>
					<h2 className={`${Styles.title} ${Styles.sectionTitle}`}>JamstackなWebサイトを構築してみた</h2>
					<p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。</p>
					<p>2021年度中に10個作成するのが目標です。</p>
				</div>
			</div>

			<div className={Styles.btnWrapper}>
				<a
          href="https://ps.toriwatari.work/Jamstack/"
          className={Styles.linkBtn}
        >
          詳しく見る
        </a>
			</div>
		</div>
	</section>

	<section className={`${Styles.section} ${Styles.sec4}`}>
		<h2 className={Styles.sectionTitle}>導入事例 - お客様からの声 - </h2>

		<div className={`${Styles.board} ${Styles.board1}`}>
			<div className={Styles.index}>01</div>
			<h3 className={Styles.title}>幽霊が出るお店として恐れられていたのに…</h3>
			<StaticImage
        src="./svg/sec4-1.svg"
        className={Styles.iconWrapper}
        alt="hoge"
      />
			<p className={Styles.text}>AI技術で幽霊を検知し、その怨念をクラウドストレージ上に逃がすシステムを導入していただきました。</p>
			<p className={Styles.text}>おかげさまで逃げていた客足も戻り、大変忙しくされていただいております。</p>
			<p className={Styles.text}>インスタンスの自動スケーリングにも対応しており、突発的な幽霊増にも安心です。</p>
			<p className={Styles.client}>株式会社 黒毛牧場</p>
		</div>

		<div className={`${Styles.board} ${Styles.board2}`}>
			<div className={Styles.index}>02</div>
			<h3 className={Styles.title}>精度の高い嘘判定機</h3>
			<StaticImage
        src="./svg/sec4-2.svg"
        className={Styles.iconWrapper}
        alt="hoge"
      />
			<p className={Styles.text}>前評判通り、ユーザ登録から5分も立たずにサービスを利用できることに驚きました。</p>
			<p className={Styles.text}>とある新興宗教の教祖をやっているんですが、信者たちがどれほどの忠誠心を持っているかの判定にこの嘘判定システムはぴったりです。</p>
			<p className={Styles.text}>無料プランでここまでできるんだから驚きです。</p>
			<p className={Styles.client}>宗教法人 ハッピーホームラン代表</p>
		</div>

		<div className={`${Styles.board} ${Styles.board3}`}>
			<div className={Styles.index}>03</div>
			<h3 className={Styles.title}>ဒီ site သည်အယောင်ဆောင်ပြီး</h3>
			<StaticImage
        src="./svg/sec4-3.svg"
        className={Styles.iconWrapper}
        alt="hoge"
      />
			<p className={Styles.text}>ထိုကဲ့သို့ site ောဆိုဒ်များနှင့်ထုတ်ကုန်မတည်ရှိပါဘူး။</p>
			<p className={Styles.text}>သတိပေးချက်အနေဖြင့် ကျေးဇူးပြု၍ မေးမြန်းခြင်းမပြုပါနှင့် 😜</p>
			<p className={Styles.client}>ကုမ္ပဏီလီမိတက်။ အနာဂတ််ေ</p>
		</div>
	</section>

	<section className={`${Styles.section} ${Styles.sec5}`}>
		<h2 className={Styles.sectionTitle}>料金プラン</h2>

		<div className={Styles.wrapper}>
			<div className={Styles.freeMember}>
				<div className={Styles.icon}></div>
				<p className={Styles.title}>無料会員</p>
				<p className={Styles.fee}>\<span>0</span>/月</p>

				<dl className={Styles.planSpecific}>
					<div className={Styles.list}>
						<dt>インスタンス稼働時間</dt>
						<dl>750時間/月</dl>
					</div>
					<div className={Styles.list}>
						<dt>クラウドストレージ</dt>
						<dl>10GB</dl>
					</div>
					<div className={Styles.list}>
						<dt>同時稼働コンテナ数</dt>
						<dl>3</dl>
					</div>
					<div className={Styles.list}>
						<dt>各種APIコール数</dt>
						<dl>1000回/日</dl>
					</div>
				</dl>
				<a href="#" className={Styles.btn}>無料で試す！</a>
			</div>

			<div className={Styles.paidMember}>
				<div className="icon"></div>
				<p className="title">有料会員</p>
				<p className="fee">\<span>28,000</span>/月</p>

				<dl className="plan-specific">
					<div className="list">
						<dt>インスタンス稼働時間</dt>
						<dl>5000時間/月</dl>
					</div>
					<div className="list">
						<dt>クラウドストレージ</dt>
						<dl>100GB</dl>
					</div>
					<div className="list">
						<dt>同時稼働コンテナ数</dt>
						<dl>15</dl>
					</div>
					<div className="list">
						<dt>各種APIコール数</dt>
						<dl>20000回/日</dl>
					</div>
					<div className="list">
						<dt>各種インスタンス<br />DB</dt>
						<dl>フルマネージド</dl>
					</div>
					<div className="list">
						<dt>ホスティング</dt>
						<dl>世界中に分散</dl>
					</div>
				</dl>
				<a href="#" className="btn">登録する！</a>
			</div>

			<div className="introduction">
				<p className="title">無料会員と有料会員</p>
				<p>まずは<span className="span1">無料会員</span>に登録し導入を検討してください。利用制限を超えるとサービスは停止しますが、料金は一切かかりません。</p>
				<p>本格的な運用には<span className="span2">有料会員</span>に登録してください。料金はかかりますが、基本料金の範囲で多くのことが可能です。超えた分は従量課金となります。</p>
			</div>
		</div>
	</section>

	<footer className="footer" id="footer">
		<div className="wrapper">
			<div className="info">
				<h2 className="footer-title">Sample Web Service</h2>
				<address>
					<p className="company">toriwatari net app Ltd.</p>
					<p className="address">滋賀県 草津市 追分南 x-xx-xxxx</p>
					<p className="address"><a href="/" target="_blink">作者ポートフォリオサイト</a></p>
				</address>
			</div>
			<div className="list-block">
				<div className="list-column">
					<a href="#footer">Sample Web Serviceについて</a>
					<a href="#footer">Sample Web Service API</a>
					<a href="#footer">料金プラン</a>
				</div>
				<div className="list-column">
					<a href="#footer">リファレンス</a>
					<a href="#footer">開発者ブログ</a>
					<a href="#footer">コミュニティ</a>
				</div>
				<div className="list-column">
					<a href="#footer">お知らせ</a>
					<a href="#footer">FAQ</a>
					<a href="#footer">お問い合わせ</a>
				</div>
			</div>
		</div>
		 <hr />
		<p className="refer">このページは<a href="https://api.ce-cotoha.com/contents/index.html" target="_blank">こちらのWebサイト</a>を参考にしました。</p>
	</footer>

  </main>

	</>
)

export default Sample3