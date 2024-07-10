function login() {
  var pwd = document.getElementById("pwd").value;

  if (pwd == "") {
    alert("欄位不得為空");
    return false;
  } else if (pwd != "" && pwd == "test") {
    // alert("即將進入畫面");
    var pwd = document.getElementById("pwd").value; //抓pwd輸入框的value
    localStorage.setItem("pwd", pwd); //設定名為pwd的localStoragea存入pwd輸入框的value資料
    var ppwd = localStorage.getItem("pwd"); //抓名為pwd的localStoragea存入pwd輸入框的value資料
    // console.log(ppwd);
    window.location.href = "front-index.html"; //跳轉到會員首頁
  } else {
    alert("password error");
  }
}
