$('.main_ul>li').click(function() {

    //获取图片路径
    var imgsrc = $(".img").attr("src");
    // console.log(imgsrc);
    var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg changeImg" src="' + imgsrc + '"></div>';
    $(document.body).append(opacityBottom);
    toBigImg(); //变大函数

});


// $('img').on("tap", function(e) {
//     //获取图片路径
//     var imgsrc = $(this).attr("src"););
//     var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg" src="' + imgsrc + '"></div>';
//     $(document.body).append(opacityBottom);
//     toBigImg(); //变大函数
// })

function toBigImg() {
    $(".opacityBottom").addClass("opacityBottom"); //添加遮罩层
    $(".opacityBottom").show();
    // $(".bigImg").addClass("bigImg"); //添加图片样式
    // $(".opacityBottom").click(function() { //点击关闭
    //     // $("html,body").removeClass("none-scroll");
    //     $(".opacityBottom").remove();
    // });
    $(".opacityBottom").on("tap", function(e) {
        $("html,body").removeClass("none-scroll");
        $(".opacityBottom").remove();
    })



}