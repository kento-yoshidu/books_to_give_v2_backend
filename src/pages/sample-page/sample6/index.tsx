import React from "react"

const Styles = require("./scss/style.module.scss")

const Sample6 = () => (
	<div id="home" className="big-bg">
		<header className="page-header wrapper">
			<h1><img className="logo" src="images/logo.svg" alt="ホーム" /></h1>
			<nav>
				<ul className="main-nav">
					<li><a href="news.html">News</a></li>
					<li><a href="menu.html">Menu</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</header>

		<section className="home-content wrapper">
			<h2 className="page-title">We'll Make your day</h2>
			<p>幸運なことに、興奮したダチョウは掃除と互換性のあるトンネルを問い詰めるなんてことはない。</p>
			<a className="button" href="menu.html">メニューを見る</a>
		</section>
	</div>
)

export default Sample6