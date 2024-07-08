function login() {
  var pwd = document.getElementById("pwd").value;

  if (pwd == "") {
    alert("欄位不得為空");
    return false;
  } else if (pwd != "" && pwd == "test") {
    // alert("即將進入畫面");
    // var user = document.getElementById("user").value; //抓帳號輸入框的value
    // localStorage.setItem("user", user); //設定名為user的localStoragea存入帳號輸入框的value資料
    // var user = localStorage.getItem("user"); //抓名為user的localStoragea存入帳號輸入框的value資料
    // console.log(user);
    window.location.href = "front-index.html"; //跳轉到會員首頁
  } else {
    alert("password error");
  }
}
