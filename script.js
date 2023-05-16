var questions =  new Array();
var answer =  new Array();
var type =  new Array();
var now = 0;
var max = 5;
var uans = new Array();
var uinp = new Array();
var correct = new Audio();
correct.src = "sound/correct.mp3";
var wrong = new Audio();
wrong.src = "sound/wrong.mp3";
window.onload = function() {
    //JSON始
    const mj = fetch('https://taikun24.github.io/tiriquiz/quiz.json')
        .then((response) => response.json())
        .then((data) => setjson(data));
    //下準備
    //const parsed = JSON.parse(json);
    var list = mj.quizs;
    //シャッフル
    list = arrayShuffle(list);
    //分解
    for (var i = 0; i < max; i++) {
        questions[i] = list[i].question;
        answer[i] = list[i].answer;
        type[i] = list[i].type;
    }
    setQuiz();
}
var btn = document.getElementById('exe_botan');
// Enterキー押下時、送信処理が実行する
window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
        if(document.getElementById('1').className=="button"){
            ans();
        }else if(document.getElementById('2').className=="button"){
            nxt();
        }
    }
}
function arrayShuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
function setQuiz(){
    let h1 = document.getElementById('quiz');
    h1.innerHTML = questions[now];
    let num = document.getElementById('number');
    num.innerHTML = (now +1) + "/" + questions.length;
}
function ans(){
    let answe = document.getElementById('input').value;
    let OK = document.getElementById('OK');
    let NG = document.getElementById('NG');
    if(answe == answer[now]){
        OK.className = "";
        uans[now] = true;
        correct.currentTime = 0;
        correct.play();
    }else{
        NG.className = "";
        uans[now] = false;
        wrong.currentTime = 0;
        wrong.play();
    }
    uinp[now] = answe;
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    one.className = "button hide";
    two.className = "button";
}
function nxt(){
    document.getElementById('OK').className = "hide";
    document.getElementById('NG').className = "hide";
    if(now+1 != max){
        now++;
        setQuiz();
        document.getElementById('input').value = "";
        document.getElementById('1').className = "button";
        document.getElementById('2').className = "button hide";
    }else{
        result();
    }
}
function result(){
    document.getElementById('1').className = "button hide";
    document.getElementById('2').className = "button hide";
    document.getElementById('input').className = "hide";
    document.getElementById('number').className = "hide";
    document.getElementById('quiz').className = "hide";

    document.getElementsByClassName('wrapper')[0].innerHTML = 
        "<h2>Result</h2>";
    var yes = 0;
    for (var i = 0; i < uans.length; i++) {
        if(uans[i]){yes++;}
    }
    document.getElementById('rsn').innerHTML = 
        yes + "/" +questions.length;
    document.getElementsByClassName('rs')[0].className = "rs";

    var detail = "";
    var color;var vw;
    for (var i = 0; i < questions.length; i++) {
        if(uans[i]){
            color = "red";vw = "○";
        }else{
            color = "blue";vw = "✖︎";
        }
        detail = detail + `
        <ul class="quizans">
            <nav style="display:flex;flex-direction: row;">
                <h3>`+(i+1)+"/"+questions.length+`</h3>
                <h3 style="padding-left: 20%;color: `+color+`;font-weight:bold">`+vw+`</h3>
            </nav>
            <h2>`+questions[i]+`</h2>
            <h2>your answer:`+uinp[i]+`</h2>
            <h2 style="border-bottom: 1px solid #999;">true answer:`+answer[i]+`</h2>
        </ul>
        `;
    }
    document.getElementById('detail').innerHTML = detail;
}