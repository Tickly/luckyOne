!(function () {
    'use strict';


    function random(max) {
        return Math.ceil(Math.random() * max)
    }


    var photo_num = 43;
    var gallery = $('#gallery');


    const Control = {
        interval: null,
        init() {
            // 初始化图片列表
            for (var i = 1; i <= photo_num; i++) {

                let src = `./photo/${i}.jpg`

                var img = document.createElement('img');
                var link = document.createElement('a');
                var li = document.createElement('li');

                link.href = 'javascript:;';
                link.appendChild(img);
                li.appendChild(link);
                li.classList.add('loaded');

                gallery[0].appendChild(li);


                img.src = src;
            }
        },
        start() {
            this.interval = setInterval(() => {
                this.show(random(photo_num - 1))
            }, 100)
        },
        stop() {
            clearInterval(this.interval);
            this.interval = null;

            this.luckyone();
        },
        luckyone() {
            // this.show(2);
        },
        show(i) {
            gallery.find('li.hover').removeClass('hover');
            gallery.find('li').eq(i).addClass('hover');
        }
    }


    Control.init();



    $(document).keypress(function (event) {
        if (event.which == 13 || event.which == 32) {
            $('#action').click();
        }
    });

    $('#action').click(function () {
        // 有计时器，表示点击了开始
        if (Control.interval) {
            $(this).html('Go');
            Control.stop();
        } else {
            $(this).html('Stop');
            Control.start();
        }
    });
})();