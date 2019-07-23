//1. 获取元素节点
var currentAddr = document.getElementsByClassName('currentAddress')[0];
var select = document.getElementsByClassName('select')[0];

//获取内层列表中地址项
var address = select.children;
//为每一项添加点击事件
for(var i = 0; i < address.length; i ++){
    address[i].onclick = function(){
        //传值
        currentAddr.innerHTML = this.innerHTML;
    };
}
var banner = document.getElementsByClassName('wrapper')[0];
var imgs = banner.children; //图片数组
var imgNav = document.getElementsByClassName('imgNav')[0];
var imgIndex =0
var indexImg = document.getElementsByClassName("indexImg")[0];
var a = indexImg.children;
var timer;
timer = setInterval(autoPlay,1000)
function autoPlay(){
    imgs[imgIndex].style.display = "none";
    ++imgNav
    imgIndex = ++ imgIndex == imgs.length ? 0 : imgIndex;
    imgs[imgIndex].style.display = "block";
    
    for(var i = 0; i < a.length; i ++){
        a[i].style.background = "#eee";
    }
    a[imgIndex].style.background = "red";
}
banner.onmouseover = function(){
    clearInterval(timer);
}
banner.onmouseout = function(){
    timer = setInterval(autoPlay,1000)
}




