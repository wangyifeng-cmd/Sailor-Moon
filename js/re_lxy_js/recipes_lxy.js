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
    //隐藏的目录下面的延时线
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
    setInterval(color, 100);

    function color() { //触发滚轮事件
        if (window.pageYOffset > 10) {
            head.style.height = 75 + "px";
            add.style.top = 22 + "px";
            head.style.backgroundColor = "#ffffff";
        } else {
            head.style.height = 104 + "px";
            add.style.top = 37 + "px";
            head.style.backgroundColor = "#ffffff";
        }
    }
    //相机定格字的延时
    setInterval(function() {
        wyf$("head").style.opacity = 1;
        wyf$("head").style.top = 0 + "px";
    }, 500);
    //menu的排他思想，按哪个哪个变红色
    var menu_wyf = wyf$("menu_wyf");
    var menu_wyf_liObjs = menu_wyf.getElementsByTagName("li");
    for (let i = 0; i < menu_wyf_liObjs.length; i++) {
        menu_wyf_liObjs[i].onclick = function() {
            for (let j = 0; j < menu_wyf_liObjs.length; j++) {
                menu_wyf_liObjs[j].className = "";
            }
            this.className = "active";
        }
    }
    var filter_item = wyf$("filter_item");
    var main_wyf_liObjs = filter_item.getElementsByTagName("li");
    for (let i = 0; i < main_wyf_liObjs.length; i++) {
        main_wyf_liObjs[i].onclick = function() {
            for (let j = 0; j < main_wyf_liObjs.length; j++) {
                main_wyf_liObjs[j].className = "";
            }
            this.className = "active";
        }
    }
}