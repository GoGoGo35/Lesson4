/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */

//1 100列ランダム
var ROW="";
var MESSAGE="\n";
var pyramid=function(n){
  for(var i=0;i<n;i++){
    ROW+="SFC ";
    MESSAGE+=ROW+"\n";
  }
  pyramid(100);
  console.log(MESSAGE);
  
  //2 100列ランダム
  var ROW="";
  var RandomNumber;
  var Randominteger;
  var pyramid=function(n){
    for(var i=0;i<n;i++)[
      ROW+="SFC ";
      MESSAGE+=ROW+"\n";
      ]
      }
  Randomnumber=Math.random()*100;
  RandomNumber=Math.floor(RandomNumber)
  pyramid(Randominteger);
  console.log(Randominteger);
  console.log(MESSAGE);
  
  //3 100列ランダム+列３個
  var Row="";
  var MESSAGE="＼n";
  var counter=0;
  var pyramid=function(n){
  for(var i=0;i<n;i++){
    ROW+="SFC ";
    MESSAGE+=ROW+"\n";
  }
  }
  nRandomSFCPyramid=function(input){
    console.log("START");
    while(counter<input){
      counter++;
      RandomNumber=Math.random()*100;
      Randominteger=Math.floor(RandomNumber);
      pyramid(Randominteger);
      console.log(Randominteger);
      console.log(MESSAGE);
    }
    console.log("FINISH");
  }
  nRandomSFCPyramid(3);
  
  //4 中央揃え
  var ROW="";
  var MESSAGE="＼n";
  var counter-0;
  var blank;
  var counter2;
  var pyramid=function(n){
    for(var i=0;i<n;i++){
      x=n-i;
      counter =0;
      blank="";
      counter2=0;
      counter =x*2;//5列のピラミッドの１列目なら８
      //空間を作る
      while(counter2<counter){
        blank+=" ";
        counter2++;
      }
      ROW+="SFC ";
      MESSAGE+=blank+ROW+"\n";
    }
  }
  pyramid(5)
  console.log(MESSAGE);
    }
      
  
  
  
  