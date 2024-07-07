//登出
// var logout1 = document.getElementById("logout");
// var logout2 = document.getElementById("logout1");  //平板RWD登出按鈕
var logout3 = document.getElementById("logout2");  //手機RWD登出按鈕
// logout1.addEventListener("click", logout);
// // logout2.addEventListener("click", logout);
// logout3.addEventListener("click", logout); 
//     function logout() {
//         if (confirm('確認要登出嗎？') == true) {
//             window.location.href = "../acu-front/login.html";
//             localStorage.clear();
//         } else {
//             return false;
//         }
//     }
    

    //登出---平板
    var logout11 = document.getElementById("logout1");
    var logout12 = document.getElementById("logout2");
    logout11.addEventListener("click", logout111);
    logout12.addEventListener("click", logout111);
        function logout111() {
            if (confirm('確認要重整答題記錄嗎？') == true) {
                alert("clear scussful")
                localStorage.clear();
            } else {
                return false;
            }
        }

        


    var center_box1 = document.getElementById("center-box1");
    var menubtn = document.getElementById("mm");
    center_box1.style.display = "none";
    menubtn.addEventListener("click", open);
    function open(){
        if(center_box1.style.display == "flex"){
            center_box1.style.display = "none"
        }else if(center_box1.style.display == "none"){
            center_box1.style.display = "flex"
        }
    }

