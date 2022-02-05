let lunbotu = document.getElementsByClassName("lunbotu")

let lunbotuBtn = document.getElementsByClassName("lunbotu-btn")

//设置index
let index = 0;

//清除active属性
let clearActive = function(){
    for(let i=0;i<lunbotu.length;i++){
        lunbotu[i].className = 'lunbotu';
        lunbotuBtn[i].className = 'lunbotu-btn';
    }
}

//添加active属性
let goActive = function(){
    clearActive();
    lunbotu[index].className = 'lunbotu active';
    lunbotuBtn[index].className = 'lunbotu-btn active';
}

//编写goNext函数
let goNext = function () {
    if(index==lunbotu.length-1){
        index=0;
        goActive();
    } else {
        index++;
        goActive();
    }
}

//获取data-point属性
for(let i=0;i<lunbotuBtn.length;i++){
    lunbotuBtn[i].addEventListener('click',function(){
        let activePoint=this.getAttribute("data-point");
        index = activePoint;
        goActive();
    })
}

//设置定时器
setInterval(() => {
    goNext();
}, 6000);

//实现弹幕功能
// let member01 = document.getElementById("thefifthBigBox-middle-right-toRight-member-01")
// setInterval(() => {
//     member01.style.left += '10px';
//     console.log(member01.style.left);
// }, 2000);