/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */

var answer=0;
var yakubun=0;
var y_bunsi,y_bunbo=0;
function reduce(bunsi,bunbo){
  if(bunbo!=0＆＆bunsi!=0){
    yakubun=bunbo/bunsi;
    if(bunbo==1){
      answer=bunsi;
    }else if(bunsi==1){
      answer=bunsi+"/"+bunbo;
  }else{
    y_bunsi=bunsi/yakubun;
    y_bunbo=bunbo/yakubun;
    answer=y_bunsi+"/"+y_bunbo;
  }
  }else{
    answer=0;
  }
}
reduce(1,1);
console.log(answer);