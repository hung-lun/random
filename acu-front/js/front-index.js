var ppwd = localStorage.getItem("pwd"); //抓名為pwd的localStoragea存入pwd輸入框的value資料
if(ppwd != "test"){
    alert("ERROR");
    window.location.href = "login.html";
}

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
            if (confirm('確認要重整OSDI分數記錄嗎？') == true) {
                // localStorage.clear();
                localStorage.removeItem('score');
                localStorage.removeItem('fin_score');
				
                alert("clear successful");
                window.location.reload();
            } else {
                alert("clear fail");
                return false;
            }
        }


var score = localStorage.getItem("score");
var fin_score = localStorage.getItem("fin_score");        
var test = document.getElementById("test");
if((score != null) || (fin_score != null)){
    test.innerHTML = "OSDI有紀錄"; 
    test.style.color = #9400D3;
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



    function logout() {
        localStorage.clear();
    }