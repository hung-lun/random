//登出
var logout1 = document.getElementById("logout");
logout1.addEventListener("click", logout);
    function logout() {
        if (confirm('確認要登出嗎？') == true) {
            window.location.href = "../acu-front/login.html";
            localStorage.clear();
        } else {
            return false;
        }
    }

    //登出---平板
var logout11 = document.getElementById("logout1");
logout11.addEventListener("click", logout111);
    function logout111() {
        if (confirm('確認要重整答題記錄嗎？') == true) {
            alert("clear scussful")
            localStorage.clear();
        } else {
            return false;
        }
    }