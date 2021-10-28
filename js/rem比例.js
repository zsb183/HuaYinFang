(function(doc, win) {
    // 根元素html
    var docEl = doc.documentElement,
        // orientationchange方向改变事件(横屏或者是竖屏)
        // 判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果。
            //docEl.style.fontSize = 100 * (调试设备宽度 / 设计图宽度) + 'px';
            // 在写页面的过程中保持 调试设备宽度 等于 设计图宽度 就可以。
            // 这样就又可以愉快的使用123px是1.23rem的计算了
            docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    //addEventListener事件方法接受三个参数：第一个是事件名称比如点击事件onclick，第二个是要执行的函数，第三个是布尔值
    win.addEventListener(resizeEvt, recalc, false);
    //绑定浏览器缩放与加载时间
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);