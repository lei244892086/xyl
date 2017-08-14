$(function () {
    // 导航块消失隐藏
    $(".wts_buttonNav").hide().val("a");
    var btn=document.querySelector(".wts_button");
    $(function() {
        FastClick.attach(document.body);
    });
    btn.addEventListener("click",function(){
   if ($(".wts_buttonNav").val()=="a"){
       $(".wts_buttonNav").show(500).val("b");
   }
        else  if($(".wts_buttonNav").val()=="b"){
       $(".wts_buttonNav").hide(500).val("a");
   }


    });
    // 轮播图滑动
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    var carousel=$(".carousel");
    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            carousel.carousel('next');
        }
    });
    

})
