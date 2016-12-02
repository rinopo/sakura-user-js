# sakura-user-js

さくらのレンタルサーバのコントロールパネル用の tampermonkey / greasemonkey スクリプト

## 動作環境

動作確認は下記で行ってます：

- [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / Google Chrome 最新バージョン。
- さくらのレンタルサーバ スタンダード／プレミアム／ビジネス／ビジネスプロ／マネージド。


## sakura-menu.user.js

### インストール

Tampermonkey 機能拡張がインストールされた Chrome で、下記リンクをクリック。

[⏬インストール](https://github.com/rinopo/sakura-user-js/raw/master/sakura-menu.user.js)

### 概要

さくらのレンタルサーバのコントロールパネルのメニューで、よく使う［＊］項目を目立たせる。

何がどこにあるのか、わからなくなりがちなので。

![Install](https://raw.github.com/rinopo/sakura-user-js/master/images/menu-sample.png)

## sakura-db.user.js

### インストール

Tampermonkey 機能拡張がインストールされた Chrome で、下記リンクをクリック。

[⏬インストール](https://github.com/rinopo/sakura-user-js/raw/master/sakura-db.user.js)

### 概要

さくらのレンタルサーバのコントロールパネルの DB 作成画面で、よく使う値をデフォルトにする。

- よく使う［＊］DB 名をあらかじめ指定した DB 作成リンクを追加。
- デフォルトで utf-8 を選択。

![Install](https://raw.github.com/rinopo/sakura-user-js/master/images/db-sample.png)


＊：「よく使う」かどうかは独断と偏見です……。DB の命名規則については、[rinopo/sakura-init: さくらのレンタルサーバを借りたとき最初にすること](https://github.com/rinopo/sakura-init) を参照。

---

- この内容は非公式のものであり、さくらインターネット株式会社様とは一切関係ございません。
- 無保証です（[LICENSE](./LICENSE)）。
- Issue、PR、フォークは歓迎いたします。
