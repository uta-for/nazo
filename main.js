window.onload = function() {
    alert("制限時間は10分です。\n※PC推奨");
    countdown(); // アラートを閉じたタイミングでカウントダウンを開始
}

const timer = document.getElementsByClassName('timer')[0];
window.count = 600; // 10分（600秒）
var countdown = function(){
    timer.textContent = count.toString();
    if(count > 0) {
        count -- ;
        setTimeout(countdown, 1000);
    } else {
        timer.textContent = "0"; // 0を表示し続ける
        setTimeout(function() {
            alert("10分経過しました。解けていない場合はリロードして再挑戦してください。\n\n(devツールのコンソールに'count = 数字;'を入れて好きに変えてもいいよ^^)");
        }, 1000); // 1秒後にアラートを表示
    }
    if(count < 450 && count > 0) { // 7分30秒未満
        timer.classList.add('t450');
    }
    if(count < 300 && count > 0) { // 5分未満
        timer.classList.remove('t450');
        timer.classList.add('t300');
    }
    if(count < 150 && count > 0) { // 2分30秒未満
        timer.classList.remove('t300');
        timer.classList.add('t150');
    }
}