var ppwd = localStorage.getItem("pwd"); //抓名為pwd的localStoragea存入pwd輸入框的value資料
if(ppwd != "test"){
    alert("ERROR");
    window.location.href = "login.html";
}


// //登出
// var logout1 = document.getElementById("logout");
// logout1.addEventListener("click", logout);
//     function logout() {
//         if (confirm('確認要登出嗎？') == true) {
//             window.location.href = "../acu-front/login.html";
//             localStorage.clear();
//         } else {

//         }
//     }


        //登出---平板
// var logout11 = document.getElementById("logout1");
// logout11.addEventListener("click", logout111);
//     function logout111() {
//         if (confirm('確認要重整答題記錄嗎？') == true) {
//             alert("clear scussful")
//             localStorage.clear();
//         } else {
//             return false;
//         }
//     }




   
     // 獲取 video 元素
     const video = document.getElementById('video');

     // 取得使用者的媒體裝置 (攝像頭)
     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
         navigator.mediaDevices.getUserMedia({ video: true })
             .then(function(stream) {
                 // 將媒體流傳送到 video 元素
                video.srcObject = stream;
                video.play();
                var point = document.getElementById("point");
                point.innerHTML="<iframe width='100%' height='100%' id='iframe' frameborder='0' scrolling='auto' src='./front-points-button.html' </iframe>";            
             })
             .catch(function(error) {
                 console.error("無法訪問攝像頭: ", error);
             });
     } else {
         alert("瀏覽器不支援攝像頭功能");
     }

