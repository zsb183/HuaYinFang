var  hh =document.getElementsByTagName('article')[0];
var hh1_ = document.getElementsByClassName('like')[0];
var body_ = document.getElementsByTagName('body')[0];
var img_ = document.getElementsByClassName('love3')[0];
var input_ = document.getElementsByTagName('input')[0];
hh1_.addEventListener('click',function(){
    hh.style.left = '0';
});
touch.on(body_,'swipeleft',function(){
    hh.style.left = '-'+'150'+'rem';
   
});
img_.addEventListener('tap',function(){
    input_.style.display = 'block'
})
var video = document.getElementById('audio');
var jp_play = document.getElementsByClassName('zt-bof-go')[0];//播放按钮
var jp_pause = document.getElementsByClassName('zt-go')[0];//暂停按钮
var jp_duration = document.getElementsByClassName('jp-duration')[0];//总时间
var jp_current_time = document.getElementsByClassName('jp-current-time')[0];//当前时间
var jp_play_bar = document.getElementsByClassName('jdt')[0];//当前进度条
var jp_seek_bar = document.getElementsByClassName('jdk')[0];//进度条

// 点击播放
video.addEventListener('canplay', function () {
    //点击按钮播放
    jp_play.addEventListener('click', function () {
        video.play();
        // this.style.display = 'none';
        // jp_pause.style.display = 'block';
    });

    //点击暂停
    jp_pause.addEventListener('click', function () {
        video.pause();
        // this.style.display = 'none';
        // jp_play.style.display = 'block';
    });

    //显示总的时长
    jp_duration.innerHTML = format_time(video.duration);



    // 时间更新
    video.addEventListener('timeupdate', function () {
        //显示当前播放的时间
        jp_current_time.innerHTML = format_time(video.currentTime);

        //根据百分比设置进度条的值
        jp_play_bar.style.width = (video.currentTime / video.duration) * 100 + '%';
    });


    //点击拖拽进度条
    jp_seek_bar.addEventListener('click',function(e){
        e = e|| window.event;
        var width = jp_seek_bar.offsetWidth;//元素的宽度
        var small = e.offsetX;
        var b = small / width;

        //设置进度条内容
        jp_play_bar.style.width = (b*100+'%');
        //根据比例来设置当前的时间
        jp_current_time.innerHTML = format_time(b * video.duration);
        //设置播放的位置
        video.currentTime = b * video.duration;
    });

    
    //设置quanp
    jp_full_screen.addEventListener('click',function(){
        video.webkitRequestFullScreen();
    });

    //格式化时间
    function format_time(time) {
        var m = Math.floor(time / 60);//得到分钟
        m > 10 ? m : m = ('0' + m);
        var s = Math.floor(time % 60);//秒
        s > 10 ? s : s = ('0' + s);

        return m + ':' + s;
    }

});