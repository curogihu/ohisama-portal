Feature: Googleへのアクセス確認

  Scenario: Googleのトップページにアクセスして"google"の文字があるか確認する
    Given ブラウザを起動する
    When "https://www.google.co.jp"にアクセスする
    Then ステータスコードが200である