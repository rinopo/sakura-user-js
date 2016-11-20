// ==UserScript==
// @name         sakura control panel menu tweaks
// @namespace    https://github.com/rinopo/sakura-user-js
// @version      0.1
// @description  さくらのレンタルサーバのコントロールパネルのメニューでよく使う項目を目立たせる。
// @author       rinopo
// @match        https://secure.sakura.ad.jp/rscontrol/rs/*
// @match        https://secure.sakura.ad.jp/rscontrol/main/*
// @match        https://secure.sakura.ad.jp/rscontrol/ms/*
// @exclude        https://secure.sakura.ad.jp/rscontrol/ms/monitoring
// @grant        none
// @require        https://code.jquery.com/jquery-3.1.1.min.js
// @icon        https://secure.sakura.ad.jp/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

	// style 要素を追加しておく。
    $('head').append('<style id="tm-style" />');
	var $style = $('#tm-style');


	// よく使う項目の背景色をハイライト。
	var pathname = window.location.pathname;

	var path;
	if (pathname.includes('/rs/')) {
		// スタンダード、プレミアム
		path = 'rs';
	} else if (pathname.includes('/main/')) {
		// ビジネス、ビジネスプロ
		path = 'main';
	} else if (pathname.includes('/ms/')) {
		// マネージド
		path = 'ms';
	}

	if (path==='rs') {
		$('.mail, .settings, .domain, .db, .phpini, .ml, .crontab, .resource').addClass('tm-highlight');
	} else if (path==='main' || path==='ms') {
		$('.user, .settings, .domain, .db, .php, .ml, .crontab, .resource').addClass('tm-highlight');
	}

	$style.append('.tm-highlight { background-color: #c1ffe6 !important; }');


	// よく使う下層の機能をメニューに追加
	$('td.logging').parent().after('\
		<tr>\
		<td align="left" class="errorlog tm-highlight">\
		&nbsp;<img src="/rscontrol/images/icon_sq10x10.gif" width="10" height="10">\
		<a href="https://secure.sakura.ad.jp/rscontrol/'+path+'/errorlog" target="blank">エラーログの表示</a>\
		</td>\
		</tr>\
	');

	$('td.domain').parent().after('\
		<tr>\
		<td align="left" class="domainadd tm-highlight">\
		&nbsp;<img src="/rscontrol/images/icon_sq10x10.gif" width="10" height="10">\
		<a href="https://secure.sakura.ad.jp/rscontrol/'+path+'/domainadd-other">他社ドメインの追加</a>\
		</td>\
		</tr>\
	');


	// リンクの下線を無くす。
	$style.append('a { text-decoration: none; }');


	// メニューにアイコンを追加。
	$style.append('.menubox td { line-height: 18px; }');
	$style.append('.tm-highlight a::before { margin-right: 3px; font-size: 18px; vertical-align: middle; color: #000; }');

	$style.append('.mail.tm-highlight a::before { content: "✉️"; }');
	$style.append('.user.tm-highlight a::before { content: "✉️"; }');
	$style.append('.settings.tm-highlight a::before { content: "ℹ️"; }');
	$style.append('.domain.tm-highlight a::before { content: "⭐️"; }');
	$style.append('.domainadd.tm-highlight a::before { content: "🌟"; }');
	$style.append('.db.tm-highlight a::before { content: "🗄"; }');
	$style.append('.php.tm-highlight a::before { content: "🐘"; }');
	$style.append('.phpini.tm-highlight a::before { content: "🐘"; }');
	$style.append('.ml.tm-highlight a::before { content: "📨"; }');
	$style.append('.crontab.tm-highlight a::before { content: "⏱"; }');
	$style.append('.resource.tm-highlight a::before { content: "📈"; }');
	$style.append('.errorlog.tm-highlight a::before { content: "😱"; }');

})();