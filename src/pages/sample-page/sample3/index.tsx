import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Particles from "react-tsparticles"

import * as Styles from "./scss/style.module.scss"

import ParticlesConfig from "../../../lib/Sample3/particles"

const Sample3 = () => (
  <>
    <header className={Styles.header} id="js-header">
      <Particles
        id="tsparticles"
        options={ParticlesConfig}
      />
      <div className={`${Styles.circle} ${Styles.circle1}`}></div>
      <div className={`${Styles.circle} ${Styles.circle2}`}></div>
      <div className={`${Styles.circle} ${Styles.circle3}`}></div>

      <div className={Styles.headerTextWrapper}>
        <h1 className={Styles.headerTitle}>
          Sample Page 3
        </h1>

        <h2 className={Styles.productTitle}>
          Sample Web Service
        </h2>

        <p className={Styles.headerText}>
          <span>静</span>
          <span>的</span>
          <span>ホ</span>
          <span>ス</span>
          <span>テ</span>
          <span>ィ</span>
          <span>ン</span>
          <span>グ</span>
        </p>

        <p className={Styles.headerText}>
          <span>自</span>
          <span>動</span>
          <span>デ</span>
          <span>プ</span>
          <span>ロ</span>
          <span>イ</span>
        </p>

        <p className={Styles.headerText}>
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

        <p className={Styles.headerText}>
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
      <section className={Styles.contentsSection}>
        <h2 className={Styles.sectionTitle}>Contents</h2>

        <section className={Styles.contents1}>
          <div className={Styles.contentsSectionWrapper}>
            <div className={Styles.contentsIntroduction}>
              <div className={Styles.contentsNumbering}>01</div>
              <h2 className={`${Styles.title} ${Styles.contentsTitle}`}>CSS Animation & Tips</h2>
              <p className={Styles.contentsText}>CSSのみで実現できるアニメーションや、様々なTipsを紹介します。Gatsbyで構築しています。</p>
            </div>

            <StaticImage
              src="./svg/section1-bg.svg"
              alt="hoge"
              className={Styles.contentsImage}
            />
          </div>

          <div className={Styles.btnWrapper}>
            <a
              href="https://cssanimation-and-tips.netlify.app/"
              className={Styles.btn}
              target="_blank"
              rel="noreferrer"
            >
              詳しく見る
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </section>

        <section className={Styles.contents2}>
          <div className={Styles.contentsSectionWrapper}>
            <StaticImage
              src="./svg/section2-bg.svg"
              alt="hoge"
              className={Styles.contentsImage}
            />

            <div className={Styles.contentsIntroduction}>
              <div className={Styles.contentsNumbering}>02</div>
              <h2 className={`${Styles.title} ${Styles.contentsTitle}`}>Blog</h2>
              <p className={Styles.contentsText}>技術・日記をつづるためのブログ「鳥に生まれることができなかった人へ」です。</p>
              <p className={Styles.contentsText}>静的サイトジェネレーターのGatsbyを使用しています。AWSでホスティングしています。</p>
            </div>
          </div>

          <div className={Styles.btnWrapper}>
            <a
              href="https://blog.toriwatari.work/page/1/"
              className={Styles.btn}
              target="_blank"
              rel="noreferrer"
            >
              詳しく見る <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </section>
      </section>

      <section className={Styles.sec3}>
        <div className={Styles.sec3SectionWrapper}>
          <div className={Styles.sec3Introduction}>
            <div className={Styles.sec3Inner}>
              <h2 className={`${Styles.title} ${Styles.sec3SectionTitle}`}>JamstackなWebサイトを構築してみた</h2>
              <p>Jamstack構成のWebサイト構築が面白いと感じ、サンプルで色々なサイトを作成しています。</p>
              <p>2021年度中に10個作成するのが目標です。</p>
            </div>
          </div>

          <div className={`${Styles.btnWrapper} ${Styles.sec3BtnWrapper}`}>
            <a
              href="https://ps.toriwatari.work/Jamstack/"
              className={Styles.btn}
            >
              詳しく見る
            </a>
          </div>
        </div>
      </section>

      <section className={Styles.sec4}>
        <h2 className={Styles.sectionTitle}>導入事例 - お客様からの声 - </h2>

        <div className={`${Styles.board} ${Styles.board1}`}>
          <div className={Styles.boardIndex}>01</div>
          <h3 className={Styles.boardTitle}>幽霊が出るお店として恐れられていたのに…</h3>
          <StaticImage
            src="./svg/sec4-1.svg"
            className={Styles.boardIconWrapper}
            alt="hoge"
          />
          <p className={Styles.boardText}>AI技術で幽霊を検知し、その怨念をクラウドストレージ上に逃がすシステムを導入していただきました。</p>
          <p className={Styles.boardText}>おかげさまで逃げていた客足も戻り、大変忙しくされていただいております。</p>
          <p className={Styles.boardText}>インスタンスの自動スケーリングにも対応しており、突発的な幽霊増にも安心です。</p>
          <p className={Styles.boardClient}>株式会社 黒毛牧場</p>
        </div>

        <div className={`${Styles.board} ${Styles.board2}`}>
          <div className={Styles.boardIndex}>02</div>
          <h3 className={Styles.boardTitle}>精度の高い嘘判定機</h3>
          <StaticImage
            src="./svg/sec4-2.svg"
            className={Styles.boardIconWrapper}
            alt="hoge"
          />
          <p className={Styles.boardText}>前評判通り、ユーザ登録から5分も立たずにサービスを利用できることに驚きました。</p>
          <p className={Styles.boardText}>とある新興宗教の教祖をやっているんですが、信者たちがどれほどの忠誠心を持っているかの判定にこの嘘判定システムはぴったりです。</p>
          <p className={Styles.boardText}>無料プランでここまでできるんだから驚きです。</p>
          <p className={Styles.boardClient}>宗教法人 ハッピーホームラン代表</p>
        </div>

        <div className={`${Styles.board} ${Styles.board3}`}>
          <div className={Styles.boardIndex}>03</div>
          <h3 className={Styles.boardTitle}>ဒီ site သည်အယောင်ဆောင်ပြီး</h3>
          <StaticImage
            src="./svg/sec4-3.svg"
            className={Styles.boardIconWrapper}
            alt="hoge"
          />
          <p className={Styles.text}>ထိုကဲ့သို့ site ောဆိုဒ်များနှင့်ထုတ်ကုန်မတည်ရှိပါဘူး။</p>
          <p className={Styles.text}>သတိပေးချက်အနေဖြင့် ကျေးဇူးပြု၍ မေးမြန်းခြင်းမပြုပါနှင့် 😜</p>
          <p className={Styles.client}>ကုမ္ပဏီလီမိတက်။ အနာဂတ််ေ</p>
        </div>
      </section>

      <section className={Styles.sec5}>
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
            <div className={Styles.icon}></div>
            <p className={Styles.title}>有料会員</p>
            <p className={Styles.fee}>\<span>28,000</span>/月</p>

            <dl className={Styles.planSpecific}>
              <div className={Styles.list}>
                <dt>インスタンス稼働時間</dt>
                <dl>5000時間/月</dl>
              </div>
              <div className={Styles.list}>
                <dt>クラウドストレージ</dt>
                <dl>100GB</dl>
              </div>
              <div className={Styles.list}>
                <dt>同時稼働コンテナ数</dt>
                <dl>15</dl>
              </div>
              <div className={Styles.list}>
                <dt>各種APIコール数</dt>
                <dl>20000回/日</dl>
              </div>
              <div className={Styles.list}>
                <dt>各種インスタンス<br />DB</dt>
                <dl>フルマネージド</dl>
              </div>
              <div className={Styles.list}>
                <dt>ホスティング</dt>
                <dl>世界中に分散</dl>
              </div>
            </dl>
            <a href="#" className={Styles.btn}>登録する！</a>
          </div>

          <div className={Styles.introduction}>
            <p className={Styles.title}>無料会員と有料会員</p>
            <p>まずは<span className={Styles.span1}>無料会員</span>に登録し導入を検討してください。利用制限を超えるとサービスは停止しますが、料金は一切かかりません。</p>
            <p>本格的な運用には<span className={Styles.span2}>有料会員</span>に登録してください。料金はかかりますが、基本料金の範囲で多くのことが可能です。超えた分は従量課金となります。</p>
          </div>
        </div>
      </section>

      <footer className={Styles.footer} id="footer">
        <div className={Styles.footerWrapper}>
          <div className={Styles.footerInfo}>
            <h2 className={Styles.footerTitle}>Sample Web Service</h2>
            <address className={Styles.address}>
              <p className={Styles.company}>toriwatari net app Ltd.</p>
              <p className={Styles.address}>滋賀県 草津市 追分南 x-xx-xxxx</p>
              <p className={Styles.address}><a href="/" target="_blink">作者ポートフォリオサイト</a></p>
            </address>
          </div>
          <div className={Styles.listBlock}>
            <div className={Styles.listColumn}>
              <a href="#footer">Sample Web Serviceについて</a>
              <a href="#footer">Sample Web Service API</a>
              <a href="#footer">料金プラン</a>
            </div>
            <div className={Styles.listColumn}>
              <a href="#footer">リファレンス</a>
              <a href="#footer">開発者ブログ</a>
              <a href="#footer">コミュニティ</a>
            </div>
            <div className={Styles.listColumn}>
              <a href="#footer">お知らせ</a>
              <a href="#footer">FAQ</a>
              <a href="#footer">お問い合わせ</a>
            </div>
          </div>
        </div>
        <hr />
        <p className={Styles.refer}>このページは<a href="https://api.ce-cotoha.com/contents/index.html" target="_blank" rel="noreferrer">こちらのWebサイト</a>を参考にしました。</p>
      </footer>
    </main>
  </>
)

export default Sample3
