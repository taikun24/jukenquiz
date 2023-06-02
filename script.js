var questions =  new Array();
var answer =  new Array();
var type =  new Array();
var now = 0;
var max = 20;
var uans = new Array();
var uinp = new Array();
var correct = new Audio();
correct.src = "sound/correct.mp3";
var wrong = new Audio();
wrong.src = "sound/wrong.mp3";
window.onload = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    console.log(params);
    if(params.get("nof")!=undefined){
        console.log(params.get("nof"));
        max = params.get("nof");
    }
    
    //JSON
    const json = `{
        "quizs":
            [
                {"question":"北海道で最も長い河川は？","answer":"石狩川","type":"川"},
{"question":"石狩川は日本で（　）番目の長さを持つ。","answer":"3","type":"川"},
{"question":"石狩川の上流には（　）盆地がある。","answer":"上川","type":"川"},
{"question":"石狩川の下流には（　）平野が広がっている。","answer":"石狩","type":"川"},
{"question":"石狩平野は農業に向かない（　）地だった。","answer":"泥炭","type":"川"},
{"question":"石狩平野は（　）を行うことで日本有数の米作地帯となった。","answer":"客土","type":"川"},
{"question":"北海道の畑作の中心は（　）平野となっている。","answer":"十勝","type":"川"},
{"question":"北海道東部の（　）台地では酪農がさかん。","answer":"根釧","type":"川"},
{"question":"函館市は（　）半島にある。","answer":"渡島","type":"川"},
{"question":"札幌市の緯度（北緯）は？","answer":"43","type":"川"},
{"question":"日本でもっとも透明度が高い湖は？","answer":"摩周湖","type":"川"},
{"question":"2008年に主要国首脳会議（サミット）が開かれた湖は？","answer":"洞爺湖","type":"川"},
{"question":"北海道で最も大きく、日本でも三番目の大きさの湖は？","answer":"サロマ湖","type":"川"},
{"question":"北海道の道庁所在地は？","answer":"札幌市","type":"川"},
{"question":"岩手県の県庁所在地は？","answer":"盛岡市","type":"川"},
{"question":"宮城県の県庁所在地は？","answer":"仙台市","type":"川"},
{"question":"日本で二番目に面積が大きい都道府県は？","answer":"岩手県","type":"川"},
{"question":"日本で三番目に面積が大きい都道府県は？","answer":"福島県","type":"川"},
{"question":"東北地方の太平洋側に夏に吹く北東の冷たい風は？","answer":"やませ","type":"川"},
{"question":"東北地方の背骨ともいえる山脈は？","answer":"奥羽山脈","type":"川"},
{"question":"日本で最も深い湖は？","answer":"田沢湖","type":"川"},
{"question":"東北地方を流れている日本三大急流のひとつは？","answer":"最上川","type":"川"},
{"question":"青森県と秋田県の県境に広がる山地は？","answer":"白神山地","type":"川"},
{"question":"最上川の下流域に広がる平野は？","answer":"庄内平野","type":"川"},
{"question":"青森県北部の太平洋に面した半島は？","answer":"下北半島","type":"川"},
{"question":"青森県北部の日本海に面した半島は？","answer":"津軽半島","type":"川"},
{"question":"青森県の２つの半島に囲まれた湾は？","answer":"陸奥湾","type":"川"},
{"question":"盛岡市が含まれる岩手県の盆地は？","answer":"北上盆地","type":"川"},
{"question":"秋田県の日本海に突き出した半島は？","answer":"男鹿半島","type":"川"},
{"question":"安積疏水はどこから引かれているか？※湖","answer":"猪苗代湖","type":"川"},
{"question":"関東地方に広がる黒土を（　）層という。","answer":"関東ローム","type":"川"},
{"question":"流域面積が日本一の河川は？","answer":"利根川","type":"川"},
{"question":"日本で二番目に面積が大きい湖は？","answer":"霞ヶ浦","type":"川"},
{"question":"冬に関東内陸部で吹く冷たく乾燥した北西風を（　）風という。","answer":"からっ","type":"川"},
{"question":"茨城県の県庁所在地は？","answer":"水戸市","type":"川"},
{"question":"栃木県の県庁所在地は？","answer":"宇都宮市","type":"川"},
{"question":"群馬県の県庁所在地は？","answer":"前橋市","type":"川"},
{"question":"千葉県南部の半島の名称は？","answer":"房総半島","type":"川"},
{"question":"神奈川県南東部の半島の名称は？","answer":"三浦半島","type":"川"},
{"question":"東京湾に面した東京、川崎、横浜に広がっている工業地帯は？","answer":"京浜工業地帯","type":"川"},
{"question":"東京湾の千葉県側に広がっている工業地域は？","answer":"京葉工業地域","type":"川"},
{"question":"信濃川下流域に広がる平野は？","answer":"越後平野","type":"川"},
{"question":"越後平野を流れ、新潟水俣病が発生した河川は？","answer":"阿賀野川","type":"川"},
{"question":"沖縄本島の次に大きい新潟県の島は？","answer":"佐渡島","type":"川"},
{"question":"日本で一番長い河川は？","answer":"信濃川","type":"川"},
{"question":"信濃川の長野県での呼び名は？","answer":"千曲川","type":"川"},
{"question":"（　）山脈を北アルプスという。","answer":"飛騨","type":"川"},
{"question":"（　）山脈を中央アルプスという。","answer":"木曽","type":"川"},
{"question":"（　）山脈を南アルプスという。","answer":"赤石","type":"川"},
{"question":"石川県にある日本海に突き出した半島は？","answer":"能登半島","type":"川"},
{"question":"扇状地での果樹栽培が盛んな山梨県の盆地は？","answer":"甲府盆地","type":"川"},
{"question":"長野県から静岡県にかけて流れる日本三大急流のひとつは？","answer":"富士川","type":"川"},
{"question":"静岡県に広がるお茶の生産で有名な台地は？","answer":"牧之原台地","type":"川"},
{"question":"長良川など木曽三川の下流域に広がる平野は？","answer":"濃尾平野","type":"川"},
{"question":"豊川用水が流れる愛知県の半島は？","answer":"渥美半島","type":"川"},
{"question":"うなぎの養殖で有名な静岡県の湖は？","answer":"浜名湖","type":"川"},
{"question":"原子力発電所が集中している福井県の湾は？","answer":"若狭湾","type":"川"},
{"question":"石川県の県庁所在地は？","answer":"金沢市","type":"川"},
{"question":"山梨県の県庁所在地は？","answer":"甲府市","type":"川"},
{"question":"愛知県の県庁所在地は？","answer":"名古屋市","type":"川"}
            ]
        }`;
    
    //下準備
    const parsed = JSON.parse(json);
    var list = parsed.quizs;
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
        var tans = document.getElementById('tans');
        tans.className = "";
        tans.innerHTML = answer[now];
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
    var tans = document.getElementById('tans');
    tans.className = "hide";
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
            detail = detail + `
        <ul class="quizans">
            <nav style="display:flex;flex-direction: row;">
                <h3>`+(i+1)+"/"+questions.length+`</h3>
                <h3 style="padding-left: 20%;color: `+color+`;font-weight:bold">`+vw+`</h3>
            </nav>
            <h2>`+questions[i]+`</h2>
            <h2>answer:`+answer[i]+`</h2>
        </ul>
        `;
        }else{
            color = "blue";vw = "✖︎";detail = detail + `
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
        
    }
    document.getElementById('detail').innerHTML = detail;
}