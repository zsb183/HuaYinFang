window.onload = function() {
    function lode() {
        //先获取已加载区域的高度
        var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
        //屏幕的高度
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;

        var images = document.getElementsByClassName('img');
        for (var i = 0; i < images.length && images[i].getAttribute('data-realUrl'); i++) {
            if (scrollH + clientH >= images[i].offsetTop - 20) {
                //启动懒加载  替换图片
                var realUrl = images[i].getAttribute('data-realUrl');
                images[i].src = realUrl;

                //防止持续的加载已加载图片 所以已加载的图片 data-realUrl属性删除
                images[i].removeAttribute('data-realUrl');
            }
        }

    }
    lode();
    window.onscroll = lode;

}