const timer = document.getElementsByClassName('timer')[0];
var count = 60;
var countdown = function(){
    timer.textContent = count.toString();
    count -- ;
    var id = setTimeout(countdown, 1000);
    if(count < 45) {
        timer.classList.add('t45');
    }
    if(count < 30) {
        timer.classList.remove('t45');
        timer.classList.add('t30');
    }
    if(count < 15) {
        timer.classList.remove('t30');
        timer.classList.add('t15');
    }
    if(count < 0){
        clearTimeout(id);
    }
}
countdown();