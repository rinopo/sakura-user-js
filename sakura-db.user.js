// ==UserScript==
// @name         sakura control panel db tweaks
// @namespace    https://github.com/rinopo/sakura-user-js
// @version      0.1
// @description  さくらのレンタルサーバのDB作成画面で、よく使う項目をデフォルトにする。
// @author       rinopo
// @match        https://secure.sakura.ad.jp/rscontrol/main/db*
// @match        https://secure.sakura.ad.jp/rscontrol/rs/db*
// @grant        none
// @require        https://code.jquery.com/jquery-3.1.1.min.js
// @icon        https://secure.sakura.ad.jp/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

	// DB名をあらかじめ指定したDB作成リンクを追加。
	var env = ['prd','stg','dev','old','test'];
	var app = ['mt','wp'];

	var quicklink;
	var quicklink_lines = [];

	app.forEach(function(app_val){
		var a_elements = [];
		env.forEach(function(env_val){
			var env_app = env_val + '_' + app_val;
			var elem = '<a href="dbcreate?db_name=' + env_app + '">' + env_app + '</a>';
			a_elements.push(elem);
		});
		quicklink_lines.push(a_elements.join(' / '));
	});

	quicklink = quicklink_lines.join('<br>\n');

	$('h3.t1').before(quicklink);


	// クエリ文字列からDB名を取得して挿入。
	var query = new URLSearchParams(window.location.search);
	var dbName = query.get('db_name');
	$('[name="db_namepart"]').attr('value', dbName);


	// utf-8 をデフォルトで選択。
	$('[name="db_charset"]').find('[value=utf8]').attr('selected','selected');

})();