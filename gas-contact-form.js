/**
 * Google Apps Script - お問い合わせフォーム受信スクリプト
 *
 * 【セットアップ手順】
 * 1. Google Apps Script (https://script.google.com) で新規プロジェクト作成
 * 2. このコードを貼り付け
 * 3. TO_EMAIL を受信先メールアドレスに変更
 * 4. 「デプロイ」→「新しいデプロイ」→ 種類:「ウェブアプリ」
 *    - 実行するユーザー: 自分
 *    - アクセス: 全員
 * 5. 表示されたURLを contact.html の GAS_URL に設定
 */

const TO_EMAIL = 'info01@shokunin-san.com';
const SUBJECT_PREFIX = '【お問い合わせ】';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const { company, name, email, tel, industry, message } = data;

    // バリデーション
    if (!company || !name || !email || !message) {
      return jsonResponse({ success: false, error: '必須項目を入力してください。' });
    }

    // メール本文
    const body = [
      '【ウェブサイトからのお問い合わせ】',
      '',
      '会社名: ' + company,
      'ご担当者名: ' + name,
      'メールアドレス: ' + email,
      '電話番号: ' + (tel || '未入力'),
      '業種: ' + (industry || '未選択'),
      '',
      '--- お問い合わせ内容 ---',
      message,
      '',
      '---',
      '※ このメールはウェブサイトのお問い合わせフォームから自動送信されています。',
    ].join('\n');

    // HTML版メール本文
    const htmlBody = `
      <h2 style="color:#0f4c81;">ウェブサイトからのお問い合わせ</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f0f5fa;width:140px;">会社名</td><td style="padding:10px;border:1px solid #ddd;">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f0f5fa;">ご担当者名</td><td style="padding:10px;border:1px solid #ddd;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f0f5fa;">メールアドレス</td><td style="padding:10px;border:1px solid #ddd;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f0f5fa;">電話番号</td><td style="padding:10px;border:1px solid #ddd;">${escapeHtml(tel || '未入力')}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f0f5fa;">業種</td><td style="padding:10px;border:1px solid #ddd;">${escapeHtml(industry || '未選択')}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f0f5fa;">お問い合わせ内容</td><td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:16px;">※ このメールはウェブサイトのお問い合わせフォームから自動送信されています。</p>
    `;

    // メール送信
    GmailApp.sendEmail(TO_EMAIL, SUBJECT_PREFIX + company + ' ' + name + '様より', body, {
      htmlBody: htmlBody,
      replyTo: email,
    });

    return jsonResponse({ success: true, message: 'お問い合わせを受け付けました。' });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, error: 'メールの送信に失敗しました。' });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
