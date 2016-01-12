$(document).ready(function(){
var curIndex = 0,
    imgLen       = $('.img').length;
console.log(imgLen);
$(".imglist div:not(:first-child)").hide();
// 自动切换时的定时器
var autoChange = setInterval(function(){
    if(curIndex < imgLen-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }

    //图片切换处理
    changeTo(curIndex);
}, 2500);

  //左箭头滑入滑出事件处理
  $("#prev").hover(function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  },function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  });
  //左箭头点击处理
  $("#prev").click(function(){ 
    //根据curIndex进行上一个图片处理
    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
    changeTo(curIndex);
  });

// 右键头点击
$("#next").hover(function(){
    //滑入清除定时器
    clearInterval(autoChange);
},function(){
    //滑出重置定时器
    autoChangeAgain();
});

$("#next").click(function(){
    curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
    changeTo(curIndex);
})

// 清除定时器时候重置定时器
function autoChangeAgain(){
    autoChange = setInterval(function(){
        if(curIndex < imgLen - 1){
            curIndex ++;
        }else{
            curIndex = 0;
        }

        //图片切换处理
        changeTo(curIndex);
    }, 2500);
}

function changeTo(num){
    //var goLeft = num*800;//alert(goLeft);
    //$(".imglist").animate({letf: "-" + goLeft + "px"},500);
    $(".imglist .img").filter(":visible").fadeOut(500).parent().children().eq(num).fadeIn(1000);
    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass('indexOn');
}

// 右下角按钮index进行事件处理
$(".indexList").find("li").each(function(item){
    $(this).hover(function(){
        clearInterval(autoChange);
        changeTo(item);
        curIndex = item;
    },function(){
        autoChangeAgain();
    })
})
});