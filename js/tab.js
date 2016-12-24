/**
 * Created by Kathy on 2016/11/21.
 */
//轮播图部分
var oDiv=document.getElementById('pic');
var inBox=document.getElementById('inbox');
var aDiv=inBox.getElementsByTagName('div');
var aImg=oDiv.getElementsByTagName('img');
var oUl=oDiv.getElementsByTagName('ul')[0];
var aLi=oUl.getElementsByTagName('li');
var aLeft=oDiv.getElementsByClassName('left')[0];
var aRight=oDiv.getElementsByClassName('right')[0];
var n=-1;

//1.图片渐隐渐现，2.焦点自动轮播，3.鼠标移入停止移出继续，4.点击焦点切换，5.点击a按钮切换

clearInterval(timer);
var timer=setInterval(autoMove,2000);
overOut();
handleChange();
leftRight();

function autoMove() {
    if(n>=$(aDiv).length-1){
        n=-1;
    }
    n++;
    setBanner();
}
function setBanner() {
    $.each($(aDiv),function (index,item){
        if(index==n){
            $(item).css('zIndex',1).siblings().css('zIndex',0);
            $(item).animate({opacity:1},function () {
                $(item).siblings().animate({opacity:0});
            })
        }
    });
    bannerTip();
}
function bannerTip(){
    for(var i=0; i<aLi.length; i++){
        aLi[i].className=i==n?'light':null;
    }
}
function overOut() {
    oDiv.onmouseover=function () {
        clearInterval(timer);
        aLeft.style.display=aRight.style.display='block';
    };
    oDiv.onmouseout=function () {
        timer=setInterval(autoMove,2000);
        aLeft.style.display=aRight.style.display='none';
    };
}
function handleChange() {
    for(var i=0;i<aLi.length;i++){
        (function (index) {
            aLi[index].onclick=function () {
                n=index;
                setBanner();
            };
        })(i);
    }
}
function leftRight() {
    aRight.onclick = autoMove;
    aLeft.onclick = function () {
        if (n <= 0) {
            n = aDiv.length;
        }
        n--;
        setBanner();
    }
}












