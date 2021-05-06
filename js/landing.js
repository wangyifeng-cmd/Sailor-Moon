window.onload = function() {
    document.onmousemove = function(e) {
        setTimeout(function() {
            wyf$("fly").style.left = e.clientX + 12 + "px";
            wyf$("fly").style.top = e.clientY + 12 + "px";
        }, 100);
    }
    var login = wyf$("login");
    var register = wyf$("register");
    var form = wyf$("form");
    var phone = wyf$("Phone");
    var username = wyf$("Username");
    var password = wyf$("Password");
    var repeat = wyf$("Repeat");
    var button = wyf$("button");
    //phone和repeat注册的时候才用，让他两兄弟消失
    phone.style.opacity = "0";
    repeat.style.opacity = "0";
    phone.style.height = "0px";
    repeat.style.height = "0px";
    //login的点击事件
    login.onclick = function() {
            // login的颜色点击后变蓝
            this.style.color = "#99C5C9";
            //login变大
            this.style.fontSize = 2.5 + "em";
            //register的颜色变灰
            register.style.color = "#CDCBCE";
            //register变小
            register.style.fontSize = 2 + "em";
            //phone和repeat消失
            phone.style.opacity = "0";
            repeat.style.opacity = "0";
            phone.style.height = "0px";
            repeat.style.height = "0px";
            button.innerText = "LOGIN";
        }
        // register的点击事件
    register.onclick = function() {
            // register的颜色点击后变蓝
            this.style.color = "#99C5C9";
            //register变大
            this.style.fontSize = 2.5 + "em";
            //login的颜色变灰
            login.style.color = "#CDCBCE";
            //login变小
            login.style.fontSize = 2 + "em";
            //phone和repeat显示
            phone.style.opacity = "1";
            repeat.style.opacity = "1";
            phone.style.height = "35px";
            repeat.style.height = "35px";
            button.innerText = "REGISTER";
        }
        //获取四个input
    var inputObjs = [phone, username, password, repeat];
    //四个input获取焦点和失去焦点事件
    for (let i = 0; i < inputObjs.length; i++) {
        inputObjs[i].onfocus = function() {
            if (this.placeholder == this.getAttribute("id")) {
                this.placeholder = "";
            }
        }
        inputObjs[i].onblur = function() {
            if (this.placeholder == "") {
                this.placeholder = this.getAttribute("id");
            }
        }
    }
    const buttons = document.querySelectorAll("a");
    buttons.forEach(btn => {
        button.addEventListener("click", function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement("span");
            ripples.style.left = x - 134 + "px";
            ripples.style.top = y - 75 + "px";
            this.appendChild(ripples);
            setTimeout(() => {
                ripples.remove()
            }, 600);
        })
    })
}