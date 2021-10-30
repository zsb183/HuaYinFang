$('.main_ul>li').on("tap", function(e) {

    //获取图片路径
    var index = $(this).index();
    var imgsrc = $(this).find(".img").attr("src");
    // console.log(imgsrc);
    var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg changeImg" src="' + imgsrc + '"></div>';
    $(document.body).append(opacityBottom);
    toBigImg(index); //变大函数



});


// $('img').on("tap", function(e) {
//     //获取图片路径
//     var imgsrc = $(this).attr("src"););
//     var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg" src="' + imgsrc + '"></div>';
//     $(document.body).append(opacityBottom);
//     toBigImg(); //变大函数
// })

function toBigImg(index) {


    $(".opacityBottom").addClass("opacityBottom"); //添加遮罩层
    $(".opacityBottom").show();
    // $(".bigImg").addClass("bigImg"); //添加图片样式
    // $(".opacityBottom").click(function() { //点击关闭
    //     // $("html,body").removeClass("none-scroll");
    //     $(".opacityBottom").remove();
    // });
    $(".opacityBottom").on("tap", function(e) {
        // $("html,body").removeClass("none-scroll");
        $(".opacityBottom").remove();


    })

    $(".opacityBottom").on("swiperight", function() {
        if (index > 0) {
            $(".opacityBottom").remove();
        } else {
            alert("亲！已经是第一张了！")
        }

        var imgsrc = $('.main_ul>li').eq(index - 1).find(".img").attr("src");
        var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg changeImg" src="' + imgsrc + '"></div>';
        $(document.body).append(opacityBottom);
        var res = $('.main_ul>li').length;
        if (index > 0) {
            toBigImg(index - 1);
        } else {
            return false;
        }
    });

    $(".opacityBottom").on("swipeleft", function() {
        var res = $('.main_ul>li').length;
        if (index < res - 1) {
            $(".opacityBottom").remove();
        } else {
            alert("亲！已经是最后一张了！")
        }
        var imgsrc = $('.main_ul>li').eq(index + 1).find(".img").attr("src");
        var opacityBottom = '<div class="opacityBottom" style = "display:none"><img class="bigImg changeImg" src="' + imgsrc + '"></div>';
        $(document.body).append(opacityBottom);
        if (index < res - 1) {
            toBigImg(index + 1);
        } else {
            return false;
        }
    });
    touchScale();

}

function touchScale() {
    var startX, endX, scale, x1, x2, y1, y2, imgLeft, imgTop, imgWidth, imgHeight,
        one = false,


        $touch = $(".opacityBottom img"), //选择放大缩小的元素
        originalWidth = $touch.width(),
        originalHeight = $touch.height(),
        baseScale = parseFloat(originalWidth / originalHeight),
        imgData = [],
        bgTop = parseInt($(".opacityBottom img").css('top'));

    function siteData(name) {
        imgLeft = parseInt(name.css('left'));
        imgTop = parseInt(name.css('top'));
        imgWidth = name.width();
        imgHeight = name.height();
    }
    $(document).on('touchstart touchmove touchend', $(".opacityBottom img"), function(event) {

        var $me = $(".opacityBottom img");

        touch1 = event.originalEvent.targetTouches[0], // 第一根手指touch事件

            touch2 = event.originalEvent.targetTouches[1], // 第二根手指touch事件

            fingers = event.originalEvent.touches.length; // 屏幕上手指数量

        //手指放到屏幕上的时候，还没有进行其他操作
        if (event.type == 'touchstart') {
            if (fingers == 2) {
                // 缩放图片的时候X坐标起始值
                startX = Math.abs(touch1.pageX - touch2.pageX);
                one = false;
            } else if (fingers == 1) {
                x1 = touch1.pageX;
                y1 = touch1.pageY;
                one = true;
            }
            //siteData($me);
        }
        //手指在屏幕上滑动
        else if (event.type == 'touchmove') {
            if (fingers == 2) {
                // 缩放图片的时候X坐标滑动变化值
                endX = Math.abs(touch1.pageX - touch2.pageX);
                scale = endX - startX;

                $me.css({
                    'width': originalWidth + scale,
                    // 'height': originalWidth + scale　　 //如果图片被拉伸了可以把这句去掉，让图片自适应
                });

            } else if (fingers == 1) {
                x2 = touch1.pageX;
                y2 = touch1.pageY;
                //                     if (one) {
                //                          $me.css({
                //                          'left' : imgLeft + (x2 - x1),
                //                           'top' : imgTop + (y2 - y1)
                //                          });
                //                      }
            }
        }
        //手指移开屏幕
        else if (event.type == 'touchend') {
            // 手指移开后保存图片的宽
            originalWidth = $touch.width(),
                siteData($me);
            imgData = [
                [imgLeft, imgTop - bgTop, imgWidth, imgHeight],
                [0, 0, 2000, 2000]
            ];
        }
    });
    var getData = function() {
        return imgData;
    };
    return {
        imgData: getData
    }
}