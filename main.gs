//WebHookのURLに書き換える
const WEBHOOK_URL = "XXXXXXXXXXXXXXXXXX" ;

function main() {
  var message = "**【定期ミーティングアラートBot】**\n" + "明日は午後８時から定期ミーティングが始まるよ～！\n" + "進捗報告や会議をしてチャレキャラ入賞目指して頑張ろう:sparkles:";
   let payload =
  {
    "content": message,
  };

  let options =
  {
    "method": "post",
    "payload": payload
  };

  UrlFetchApp.fetch(WEBHOOK_URL, options);
}

//main関数を実行するトリガーをセットする
function setTrigger(){
  //現在時刻を取得する
  const time = new Date();
  //main関数を実行する時間に設定する
  time.setHours(18);
  time.setMinutes(00);
  //設定した時間にmain関数を実行するトリガーをセットする
  ScriptApp.newTrigger('main').timeBased().at(time).create();
}

//setTrigger関数によってセットされたトリガーを削除する
function deleateTriggers(){
  //GASプロジェクトに設定したトリガーをすべて取得
  const triggers = ScriptApp.getProjectTriggers();
  //トリガー登録のforループを実行
  for(let i=0;i<triggers.length;i++){
    //取得したトリガーの関数がmainの場合、deleteTriggerで削除
    if(triggers[i].getHandlerFunction()==='main'){
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}
