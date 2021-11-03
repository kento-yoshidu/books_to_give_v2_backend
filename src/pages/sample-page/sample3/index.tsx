import React from "react"

const Sample3 = () => (
	<>
	<header className="header" id="js-header">
		<div className="circle circle1"></div>
		<div className="circle circle2"></div>
		<div className="circle circle3"></div>

		<div className="text-wrapper">
			<h1 className="header-title">
				Sample Page 3
			</h1>
			<h2 className="product-title">
				Sample Web Service
			</h2>
			<p className="text">
				<span>静</span>
				<span>的</span>
				<span>ホ</span>
				<span>ス</span>
				<span>テ</span>
				<span>ィ</span>
				<span>ン</span>
				<span>グ</span>
			</p>
			<p className="text">
				<span>自</span>
				<span>動</span>
				<span>デ</span>
				<span>プ</span>
				<span>ロ</span>
				<span>イ</span>
			</p>
			<p className="text">
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
			<p className="text">
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

	<section className="section contents-section">
		<h2 className="section-title">Contents</h2>

		<section className="contents-01">
			<div className="section-wrapper">
				<div className="introduction">
					<div className="numbering">01</div>
					<h2 className="title contents-title">CSS Animation & Tips</h2>
					<p className="text">CSSのみで実現できるアニメーションや、様々なTipsを紹介します。Nuxt.jsで構築しています。</p>
				</div> 

				<div className="section-image">
					<div className="svg-image"></div>
				</div>
			</div>

			<div className="btn-wrapper">
				<a href="https://cssanimation.toriwatari.work/" className="link-btn" target="_blank">詳しく見る <i className="fas fa-external-link-alt"></i></a>
			</div>
		</section>

		<section className="contents-02">
			<div className="section-wrapper">
				<div className="introduction">
					<div className="numbering">02</div>
					<h2 className="title contents-title">Blog</h2>
					<p className="text">技術・日記をつづるためのブログ「鳥に生まれることができなかった人へ」です。</p>
					<p className="text">静的サイトジェネレーターのGatsbyを使用しています。AWSでホスティングしています。</p>
				</div>

				<div className="section-image">
					<div className="svg-image"></div>
				</div>
			</div>

			<div className="btn-wrapper">
				<a href="https://blog.toriwatari.work/page/1/" className="link-btn" target="_blank">詳しく見る <i className="fas fa-external-link-alt"></i></a>
			</div>
		</section>
	</section>

	<section className="section sec3">
		<div className="section-wrapper">
			<div className="introduction">
				<div className="inner">
					<h2 className="title section-title">JamstackなWebサイトを構築しました</h2>
					<p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。</p>
					<p>2021年度中に10個作成するのが目標です。</p>
				</div>
			</div>

			<div className="btn-wrapper">
				<a href="https://potsunen.info/css-animation/" className="link-btn">詳しく見る</a>
			</div>
		</div>
	</section>

	<section className="section sec4">
		<div id="js-sec4"></div>

		<h2 className="section-title">導入事例 - お客様からの声 - </h2>

		<div className="board board-1">
			<div className="index">01</div>
			<h3 className="title">幽霊が出るお店として恐れられていたのに…</h3>
			<img src="src/svg/sec4-1.svg" className="icon" />
			<p className="text">AI技術で幽霊を検知し、その怨念をクラウドストレージ上に逃がすシステムを導入していただきました。</p>
			<p className="text">おかげさまで逃げていた客足も戻り、大変忙しくされていただいております。</p>
			<p className="text">インスタンスの自動スケーリングにも対応しており、突発的な幽霊増にも安心です。</p>
			<p className="client">株式会社 黒毛牧場</p>
		</div>
		<div className="board board-2">
			<div className="index">02</div>
			<h3 className="title">精度の高い嘘判定機</h3>
			<img src="src/svg/sec4-2.svg" className="icon" />
			<p className="text">前評判通り、ユーザ登録から5分も立たずにサービスを利用できることに驚きました。</p>
			<p className="text">とある新興宗教の教祖をやっているんですが、信者たちがどれほどの忠誠心を持っているかの判定にこの嘘判定システムはぴったりです。</p>
			<p className="text">無料プランでここまでできるんだから驚きです。</p>
			<p className="client">宗教法人 ハッピーホームラン代表</p>
		</div>
		<div className="board board-3">
			<div className="index">03</div>
			<h3 className="title">ဒီ site သည်အယောင်ဆောင်ပြီး</h3>
			<img src="src/svg/sec4-3.svg" className="icon" />
			<p className="text">ထိုကဲ့သို့ site ောဆိုဒ်များနှင့်ထုတ်ကုန်မတည်ရှိပါဘူး။</p>
			<p className="text">သတိပေးချက်အနေဖြင့် ကျေးဇူးပြု၍ မေးမြန်းခြင်းမပြုပါနှင့် 😜</p>
			<p className="client">ကုမ္ပဏီလီမိတက်။ အနာဂတ််ေ</p>
		</div>
	</section>

	<section className="section sec5">
		<h2 className="section-title">料金プラン</h2>

		<div className="wrapper">
			<div className="free-member">
				<div className="icon"></div>
				<p className="title">無料会員</p>
				<p className="fee">\<span>0</span>/月</p>

				<dl className="plan-specific">
					<div className="list">
						<dt>インスタンス稼働時間</dt>
						<dl>750時間/月</dl>
					</div>
					<div className="list">
						<dt>クラウドストレージ</dt>
						<dl>10GB</dl>
					</div>
					<div className="list">
						<dt>同時稼働コンテナ数</dt>
						<dl>3</dl>
					</div>
					<div className="list">
						<dt>各種APIコール数</dt>
						<dl>1000回/日</dl>
					</div>
				</dl>
				<a href="#" className="btn">無料で試す！</a>
			</div>

			<div className="paid-member">
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

	</>
)

export default Sample3