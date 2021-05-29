window.onload = function() {
    var add = wyf$("add");
    var shu = wyf$("shu");
    var heng = wyf$("heng");
    var special = wyf$("special");
    var event = wyf$("event");
    var k = 0;
    // setInterval(function() {
    //     console.log(window.pageYOffset);
    // }, 1000);
    //调出目录
    add.onclick = function() {
            if (k == 0) {
                shu.style.transform = "translate(1px, 1px) rotate(45deg)";
                heng.style.transform = "translate(1.6px, 4.4px) rotate(135deg)";
                special.style.display = "block";
                var block = setInterval(block, 100);
                k = 1;
            } else {
                shu.style.transform = "translate(0px, -0.2px) translate(0, -1.2px)";
                heng.style.transform = "translate(1.5px, 0.3px) rotate(90deg)";
                special.style.opacity = "0";
                var none = setInterval(none, 100);
                k = 0;
            }

            function block() {
                clearInterval(block);
                clearInterval(none);
                special.style.opacity = "0.93";
            }

            function none() {
                clearInterval(block);
                clearInterval(none);
                special.style.display = "none";
            }
        }
        //上面目录下面的延时线
    var changes = document.getElementsByClassName("change");
    for (let i = 0; i < changes.length; i++) {
        changes[i].parentElement.onmouseover = function() {
            changes[i].style.width = "100%";
        }
        changes[i].parentElement.onmouseout = function() {
            changes[i].style.width = "0%";
        }
    }
    //大照片的轮换
    var pic = wyf$("pic");
    var imgObjs = pic.getElementsByTagName("img");
    var index = 1;
    imgObjs[0].style.opacity = "1";
    var chan = setInterval(cha, 6000);

    function cha() {
        // clearInterval(chan);
        if (index <= 7) {
            for (let i = 0; i < imgObjs.length; i++) {
                imgObjs[i].style.opacity = "0";
            }
            imgObjs[index].style.opacity = "1";
            index++;
        } else {
            imgObjs[7].style.opacity = "0";
            imgObjs[0].style.opacity = "1";
            index = 1;
        }
    }
    //隐藏目录下面的延时线
    var special_div = document.getElementsByClassName("special_div");
    var before = document.getElementsByClassName("before");
    for (let i = 0; i < special_div.length; i++) {
        special_div[i].onmouseover = function() {
            before[i].style.width = "100%";
        }
        special_div[i].onmouseout = function() {
            before[i].style.width = "0%";
        }
    }
    //head的演示显示和隐藏
    var head = wyf$("head");
    var logo = wyf$("logo");
    var logo = wyf$("scroll");
    var logo = wyf$("arrow");
    var hei = logo.getAttribute("height");
    setInterval(color, 100);

    function color() { //触发滚轮事件
        if (window.pageYOffset > 10) {
            head.style.height = 75 + "px";
            add.style.top = 22 + "px";
            head.style.backgroundColor = "#ffffff";
        } else {
            head.style.height = 104 + "px";
            add.style.top = 37 + "px";
            head.style.backgroundColor = "#ffaa0000";
        }
    }
    //相机定格字的延时
    setInterval(function() {
        wyf$("head").style.opacity = 1;
        wyf$("head").style.top = 0 + "px";
    }, 500);
    setInterval(function() {
        wyf$("text_1").style.top = 18 + "%";
        wyf$("text_1").style.opacity = 1;
    }, 100);
    setInterval(function() {
        wyf$("text_2").style.top = 18 + "%";
        wyf$("text_2").style.opacity = 1;
    }, 400);
    setInterval(function() {
        wyf$("text_3").style.top = 18 + "%";
        wyf$("text_3").style.opacity = 1;
    }, 700);
    setInterval(function() {
        wyf$("text_4").style.top = 18 + "%";
        wyf$("text_4").style.opacity = 1;
    }, 1000);
    setInterval(function() {
        wyf$("text_5").style.top = 18 + "%";
        wyf$("text_5").style.opacity = 1;
    }, 1300);
    setInterval(function() {
        wyf$("sun").style.top = 50 + "%";
        wyf$("sun").style.opacity = 1;
    }, 1600);
    setInterval(function() {
        wyf$("scroll").style.top = 79 + "%";
        wyf$("scroll").style.opacity = 1;
    }, 1900);
    setInterval(function() {
        wyf$("arrow").style.top = 85 + "%";
        wyf$("arrow").style.opacity = 1;
    }, 2200);
    //next
    var next_div = wyf$('next_div');
    var next = wyf$('next');
    next_div.onmouseover = function() {
        clearInterval(chan);
    }
    next_div.onmouseout = function() {
        chan = setInterval(cha, 6000);
    }
    next_div.onclick = cha;
    // 鼠标向下滑动判断时div逐渐显示
    var information_div = wyf$("information_div");
    setInterval(function() {}, 1000);
    setInterval(function() {
        if (window.pageYOffset > 90 && window.pageYOffset < 800) {
            information_div.style.top = 0 + "px";
            information_div.style.opacity = 1;
        } else if (window.pageYOffset > 800 && window.pageYOffset < 1700) {
            event.style.top = 90 + "px";
            event.style.opacity = 1;
        }
    }, 1);
    //平移的封装函数
    function animate(element, target) {
        //每次执行都清除定时器，以防按多次按钮加速
        clearInterval(element.timeId);
        //把定时器名字设置为element的定时器，防止每次执行func都开一个定时器
        element.timeId = setInterval(function() {
            var current = element.offsetLeft;
            //控制平移的快慢
            var step = 5;
            //判断当前位置和目标位置的关系从而决定正反方向平移
            step = current < target ? step : -step;
            //每一次走一步
            current += step;
            //正常情况的每次平移
            if (Math.abs(current - target) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                //最后一步的平移
                clearInterval(element.timeId);
                element.style.left = target + "px";
            }
        }, 1);
    }
    var event_list = wyf$("event_list");
    var next_page_left = wyf$("next_page_left");
    var next_page_right = wyf$("next_page_right");
    var event_list_list = wyf$("event_list_list");
    var list = document.getElementsByClassName("event_list_list");
    var index_this = 0;
    var list_width = event_list_list.offsetWidth;
    // 点向左键
    next_page_left.onclick = function() {
            if (index_this == 0) {
                index_this = list.length - 3;
                event_list.style.left = -index_this * list_width + "px";
            }
            index_this--;
            animate(event_list, -index_this * list_width + 70);
        }
        // 点向右键
    next_page_right.onclick = list_right;

    function list_right() {
        if (index_this == list.length - 3) {
            index_this = 0;
            event_list.style.left = 70 + "px";
        }
        index_this++;
        animate(event_list, -index_this * list_width + 70);
    }
    // list自动四秒点一下向右键
    var evet_img_timeId = setInterval(list_right, 6000);
    next_page_left.onmouseover = function() {
        clearInterval(evet_img_timeId);
    }
    next_page_left.onmouseout = function() {
        evet_img_timeId = setInterval(list_right, 6000);
    }
    next_page_right.onmouseover = function() {
        clearInterval(evet_img_timeId);
    }
    next_page_right.onmouseout = function() {
            evet_img_timeId = setInterval(list_right, 6000);
        }
        //three中的left下拉变为flex布局停住
    var education_left_content_float = wyf$("education_left_content_float");
    setInterval(function() {
        if (window.pageYOffset > 2840 && window.pageYOffset < 6205) {
            education_left_content_float.style.position = "fixed";
            education_left_content_float.style.top = 125 + "px";
            education_left_content_float.style.left = 85 + "px";
        } else if (window.pageYOffset < 2840) {
            education_left_content_float.style.position = "absolute";
            education_left_content_float.style.top = 0 + "px";
            education_left_content_float.style.left = 0 + "px";
        } else if (window.pageYOffset > 6205) {
            education_left_content_float.style.position = "absolute";
            education_left_content_float.style.top = 3350 + "px";
            education_left_content_float.style.left = 0 + "px";
        }
    }, 1);
    //窗帘
    var empty_left = wyf$("empty_left");
    var empty_right = wyf$("empty_right");
    setInterval(function() {
        if (window.pageYOffset < 1983) {
            empty_left.style.position = "absolute";
            empty_left.style.top = 0 + "px";
            empty_right.style.position = "absolute";
            empty_right.style.top = 0 + "px";

        } else if (window.pageYOffset > 1983 && window.pageYOffset < 6205) {
            empty_left.style.position = "fixed";
            empty_left.style.top = 75 + "px";
            empty_right.style.position = "fixed";
            empty_right.style.top = 75 + "px";
        } else {
            empty_left.style.position = "absolute";
            empty_left.style.top = 4200 + "px";
            empty_right.style.position = "absolute";
            empty_right.style.top = 4200 + "px";
        }
    }, 1);
    //家长学堂中的选择栏
    var education_left_content_float = wyf$("education_left_content_float");
    var education_left_liObjs = education_left_content_float.getElementsByTagName("li");
    // console.log(education_left_liObjs);
    for (let i = 0; i < education_left_liObjs.length; i++) {
        education_left_liObjs[i].onclick = function() {
            for (let j = 0; j < education_left_liObjs.length; j++) {
                education_left_liObjs[j].className = "";
            }
            this.className = "education_current";
        }
    }
    //随滚轮向下划，左边的列表随着匹配
    setInterval(function() {
        if (window.pageYOffset > 2553 && window.pageYOffset < 3153) {
            for (let i = 0; i < education_left_liObjs.length; i++) {
                for (let j = 0; j < education_left_liObjs.length; j++) {
                    education_left_liObjs[j].className = "";
                }
                education_left_liObjs[0].className = "education_current";
            }
        } else if (window.pageYOffset > 3253 && window.pageYOffset < 3953) {
            for (let i = 0; i < education_left_liObjs.length; i++) {
                for (let j = 0; j < education_left_liObjs.length; j++) {
                    education_left_liObjs[j].className = "";
                }
                education_left_liObjs[1].className = "education_current";
            }
        } else if (window.pageYOffset > 4153 && window.pageYOffset < 4853) {
            for (let i = 0; i < education_left_liObjs.length; i++) {
                for (let j = 0; j < education_left_liObjs.length; j++) {
                    education_left_liObjs[j].className = "";
                }
                education_left_liObjs[2].className = "education_current";
            }
        } else if (window.pageYOffset > 5053 && window.pageYOffset < 5653) {
            for (let i = 0; i < education_left_liObjs.length; i++) {
                for (let j = 0; j < education_left_liObjs.length; j++) {
                    education_left_liObjs[j].className = "";
                }
                education_left_liObjs[3].className = "education_current";
            }
        } else if (window.pageYOffset > 5853 && window.pageYOffset < 6453) {
            for (let i = 0; i < education_left_liObjs.length; i++) {
                for (let j = 0; j < education_left_liObjs.length; j++) {
                    education_left_liObjs[j].className = "";
                }
                education_left_liObjs[4].className = "education_current";
            }
        }
    }, 1);
    //切换背景
    var wallpaper1 = wyf$("wallpaper1");
    var wallpaper2 = wyf$("wallpaper2");
    setInterval(function() {
        if (window.pageYOffset < 7200) {
            wallpaper1.style.zIndex = -6;
        } else if (window.pageYOffset > 7200 && window.pageYOffset < 8896) {
            wallpaper1.style.zIndex = -8;
        }
    }, 1);
    //学费的模糊
    var four_center_left = wyf$("four_center_left");
    var four_div = four_center_left.getElementsByTagName("div");
    var four_listObjs = four_center_left.getElementsByTagName("span");
    for (let i = 0; i < four_div.length; i++) {
        four_div[i].onmouseover = function() {
            four_listObjs[i].style.filter = "blur(0px)";
            this.style.backgroundColor = "#00000020";
        }
        four_div[i].onmouseout = function() {
            four_listObjs[i].style.filter = "blur(8px)";
            this.style.backgroundColor = "#00000000";
        }
    }
    //最下面的右边栏的延时线
    var five_class = document.getElementsByClassName("five_class");
    var five_before = document.getElementsByClassName("five_before");
    for (let i = 0; i < five_class.length; i++) {
        five_class[i].onmouseover = function() {
            five_before[i].style.width = "100%";
        }
        five_class[i].onmouseout = function() {
            five_before[i].style.width = "0%";
        }
    }
}