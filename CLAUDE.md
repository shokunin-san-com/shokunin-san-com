# 職人さんドットコム 特定技能HP

## プロジェクト概要
株式会社職人さんドットコムの特定技能外国人材 紹介・受入れ支援サービスのコーポレートサイト。
静的HTML/CSSで構成。デザインは https://nano-global.jp/ を参考にしている。

## 会社情報
- **会社名**: 株式会社職人さんドットコム
- **代表取締役**: 岡部 洋佑
- **所在地**: 〒220-0004 神奈川県横浜市西区北幸2丁目10-28 むつみビル3F
- **TEL**: 03-6823-3524 / **FAX**: 03-6730-7966
- **Email**: info@shokunin-san.com
- **設立**: 2006年3月
- **資本金**: 10,000万円（資本準備金含む）
- **許認可**:
  - 特定募集情報等提供事業（51-募-001127）
  - 有料職業紹介事業（14-ユ-302439）
  - 労働者派遣事業（派14-303781）
- **登録支援機関登録番号**: 未確認（要確認）

## 技術構成
- **フレームワーク**: なし（静的HTML/CSS）
- **フォント**: Google Fonts（Noto Sans JP）
- **ホスティング**: Vercel
- **リポジトリ**: https://github.com/shokunin-san-com/shokunin-san-com
- **本番URL**: https://shokunin-san-com.vercel.app
- **GitHub組織**: shokunin-san-com（miyu-shokunin-SYS アカウントで管理）
- **Vercelチーム**: shokunin-san-syss-projects

## ファイル構成
```
index.html       - TOPページ
service.html     - サービス内容（特定技能制度説明・サービス一覧・利用の流れ・対応分野）
company.html     - 会社概要（会社情報テーブル・沿革・強み）
topics.html      - ニュース＆トピックス
qa.html          - よくあるご質問（FAQ 7問）
contact.html     - お問い合わせ（電話/メール情報・フォーム・Google Map）
style.css        - 共通CSS（レスポンシブ対応）
.gitignore       - .DS_Store, *.txt, .vercel を除外
```

元テキストファイル（*.txt）はgit管理外。

## デプロイ
- `main` ブランチへのプッシュで Vercel に自動デプロイされる
- Vercel の GitHub 連携済み

## 現在の状況（2026-04-02時点）

### 完了済み
- 全6ページの初期HTML/CSS作成
- GitHubリポジトリ作成（shokunin-san-com組織配下）
- Vercelデプロイ完了・自動デプロイ設定済み
- 会社情報の修正（代表者名: 岡部洋佑、正確な住所・許認可番号等を反映）

### 未対応（Issue管理中）
- **#1** ビジュアル強化（AI画像・イラスト追加、スクロールアニメーション）
- **#2** レスポンシブデザイン精査・ナビゲーション改善
- **#3** お問い合わせフォームのバックエンド実装（現在action="#"で送信不可）
- **#4** Google Map埋め込みURL修正（現在仮URL）
- **#5** SEO: OGPタグ・構造化データ・メタ情報整備
- **#6** SEO: sitemap.xml・robots.txt・GA4・Search Console
- **#7** Favicon・OGP画像・ロゴのアセット整備
- **#8** プライバシーポリシーページの追加
- **#9** カスタムドメインの設定

## 開発メモ
- プレビューサーバーは `python3 -m http.server 3000` で起動（npxが使えない環境）
- Vercel CLIは `/usr/local/bin` パスを通す必要あり（`export PATH="/usr/local/bin:$PATH"`）
- gh CLIも同様に `/usr/local/bin/gh`
