var time3=0,hour3=0,minute3=0,second3=0,milli3=0,tih=0,tim=0;
var n = new Date()
var time0 = n.getHours() * 3600 +n.getMinutes() * 60 +n.getSeconds()* 1 +n.getMilliseconds()/ 1000

function timeX(){
 n = new Date()
 time0 = n.getHours() * 3600 +n.getMinutes() * 60 +n.getSeconds()* 1 +n.getMilliseconds()/ 1000
}

function currentTTime() {
    var time3 = new Date()
        hour3 = time3.getHours()
        minute3 = time3.getMinutes()
        second3 = time3.getSeconds()
        milli3 = time3.getMilliseconds()
        tih=0
        tim=0;

}


var c = document.getElementById("timer"), cxt = c.getContext("2d");
value1=500;
//$("#timer").css("width",value1).css("height",value1)
const t = { x: c.width/2, y:c.width/2};
/*
function getP(r, ao) {
    x = t.x + r * Math.cos(ao * Math.PI / 180)
    y = t.y + r * Math.sin(ao * Math.PI / 180)
    p = x + "," + y;
    return p
}
*/
//p1 = getP(c1m.i, t1m.b), p2 = getP(c1m.i, t1m.e);
c1 = $(".c1").css("color"),
c2 = $(".c2").css("color");

va=0.1;
hv=0,va1=0;
ml = (time0/60+va) % 60;
hl = (((time0+va*60)%(24*60*60*60)/60/60)-12)*5;
//const u={1:300,2:}
const sd = {1:14,2:0}
r1=360, rl=50, rl2=8;
r2=r1-rl, r3=r2-rl2;


const t1m = {b:-90, e:6*ml-90}, c1m = {i:r2, o:r1}
const t2m = {b:-90, e:6*hl-90}, c2m = {i:0, o:r3}

//x=500
$(".c1").html(hour3+"<br>"+hl+"<br>"+"<br>");

function hf() {
    if (va1 != 0 || hv1 != 0) {
    //if (ml = 1) { va = 60 }else{
        va = va1 + (hv1) * 60
    }
    //ml = (time0/60+va) % 60;
    ml=va
    hl = (((time0+va*60)%(24*60*60*60)/60/60)-12)*5;
    //hcl=1;
    //t1m.e = 6*ml-90,
    //t1m.b=6*ml-90,
    t2m.e=6*hl-90;
    c1 = $(".c1").css("color"),
    c2 = $(".c2").css("color");
}
function hc(){
    cxt.clearRect(0,0,c.width,c.height);
    cxt.fillStyle = c1; cxt.strokeStyle = "blue";
    cxt.beginPath();
    cxt.arc(t.x, t.y, c1m.o, (Math.PI / 180) * t1m.b, (Math.PI / 180) * t1m.e, 0);
    cxt.arc(t.x, t.y, c1m.i, (Math.PI / 180) * t1m.e, (Math.PI / 180) * t1m.b, 1);
    cxt.closePath();
    cxt.fill();//cxt.stroke();
    cxt.fillStyle = c2; cxt.strokeStyle = "blue";
    cxt.beginPath();
    cxt.arc(t.x, t.y, c2m.o, (Math.PI / 180)*t2m.b, (Math.PI / 180) * t2m.e, 0);
    cxt.arc(t.x, t.y, c2m.i, (Math.PI / 180)*t2m.e, (Math.PI / 180) * t2m.b, 1);
    cxt.closePath();
    cxt.fill();
}

function drawHC() {
    tg=time0+va*60;
    //if(tg==spent){t1m.e = 6*ml-90+10;}
    if(tg<spent){
        c1=c2="#aaaaaa";
        $("body").css("background","rgb(134, 22, 22)");
        $(".second-hand, .digital").css("opacity","0");
    }else{
        t1m.e = 6*ml-90;
    }
    ml = ((va*60-spent+time0)/60)%60;
    hl = ((spent%(24*60*60*60) / 60/60) -12)* 5;
    
//  t1m.b=6*ml-90,
    t1m.e = 6*ml-90; /// 2
    t2m.b=6*hl-90;
    hc();
}
function inf(){
    $("body").css("background","black");
    $(".second-hand, .digital").css("opacity","1");
}


var clock = document.querySelector('#utility-clock'), digital=document.getElementsByClassName('digital')
utilityClock(clock)

if (clock.parentNode.classList.contains('fill')) autoResize(clock, 800)
//295 + 32)
//autoResize(digital[0],295 + 32), 
//autoResize(digital[1],295 + 32)
$(".digital").css("transform","scale(2.44)")
var time3=0,hour3=0,minute3=0,second3=0,milli3=0,tih=0,tim=0;
window.onkeydown=function(event){var e=event;
    inf();
    if(e.keyCode==50){currentTTime();tih=2;tim=0;timeX();time0=7200;va=180;hf();hc();};
    if(e.keyCode==51){$(".second-hand").css("display","none")};
    if(e.keyCode==52){$(".second-hand").css("display","initial")};
    if(e.keyCode==57){currentTTime();tih=8;tim=30;$("div").css("filter",": invert(100%)");timeX();time0=30600;va=180;hf();hc();}
    if(e.keyCode==49){time3=0;hour3=0;minute3=0;second3=0;milli3=0;tih=0;tim=0;hv1=va1=0;va=0.1;timeX();hf();hc();}
}


function utilityClock(container) {
    var dynamic = container.querySelector('.dynamic')
    var hourElement = container.querySelector('.hour')
    var minuteElement = container.querySelector('.minute')
    var secondElement = container.querySelector('.second')
    var timerElement = container.querySelector('#timer')
    var minute = function(n) {
        return n % 5 == 0 ? minuteText(n) : minuteLine(n)
    }
    var minuteText = function(n) {
        var element = document.createElement('div')
        element.className = 'minute-text m'+n
        element.innerHTML = (n < 10 ? '0' : '') + n
        position(element, n / 60, 135)
        dynamic.appendChild(element)
    }
    var minuteLine = function(n) {
        var anchor = document.createElement('div')
        anchor.className = 'anchor'
        var element = document.createElement('div')
        element.className = 'element minute-line'
        rotate(anchor, n)
        anchor.appendChild(element)
        dynamic.appendChild(anchor)
    }
    var hour = function(n) {
        var element = document.createElement('div')
        element.className = 'hour-text hour-' + n+" h"+n
        element.innerHTML = n
        position(element, n / 12, 105)
        dynamic.appendChild(element)
    }
    var position = function(element, phase, r) {
        var theta = phase * 2 * Math.PI
        element.style.top = (-r * Math.cos(theta)).toFixed(1) + 'px'
        element.style.left = (r * Math.sin(theta)).toFixed(1) + 'px'
    }
    var rotate = function(element, second) {
        element.style.transform = element.style.webkitTransform = 'rotate(' + (second * 6) + 'deg)'
    }
    var animate = function() {
        var now = new Date()
        var time = (now.getHours()-hour3+tih) * 3600 +
                    (now.getMinutes()-minute3+tim) * 60 +
                    (now.getSeconds()-second3)* 1 +
                    (now.getMilliseconds()-milli3) / 1000
        rotate(secondElement, time);spent=time;drawHC()
        $("#t33").html(spent+"<br/>"+time0+"<br>"+t2m.b+"<br>"+t1m.e)
        rotate(minuteElement, time / 60)
        rotate(hourElement, time / 60 / 12)
        requestAnimationFrame(animate)
    }
    for (var i = 1; i <= 60; i ++) minute(i)
    for (var i = 1; i <= 12; i ++) hour(i)
    animate()
    
}
$(".minute-text").click(function(){timeX();hv=0;va1=parseInt($(this).text());hf();hc()})
$(".hour-text").click(function(){timeX();va1=0;hv=parseInt($(this).text());hv1=hv;hf();hc()})

function autoResize(element, nativeSize) {
    var update = function() {
        var scale = Math.min(window.innerWidth, window.innerHeight) / nativeSize
        element.style.transform = element.style.webkitTransform = 'scale(' + scale.toFixed(3) + ')'
    }
    update()
    window.addEventListener('resize', update)
}
