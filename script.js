var count = 14;
// const test = document.getElementById(count+"aa");
// console.log(test);
// console.log(count);
// test.addEventListener('click',searchOnGoogleMap(count));


var set_btn = document.getElementById("imgsrc3");
var set_btn_1= document.getElementById("imgsrc3_1");
var set_menu = document.getElementById("set_menu");

document.getElementById("set_btn_1").style.display = "none";
set_btn.addEventListener("click",
function opensetmnu(){
    document.getElementById("set_btn_1").style.display = "block";
    document.getElementById("set_btn").style.display = "none";
    // if(document.getElementById("set_menu").style.display != "block"){
        document.getElementById("set_menu").style.display = "block";
    // }else if(document.getElementById("set_menu").style.display == "block"){
    //     document.getElementById("set_menu").style.display = "none";
    // }
}
)

set_btn_1.addEventListener("click",
function opensetmnu(){
    document.getElementById("set_btn").style.display = "block";
    document.getElementById("set_btn_1").style.display = "none";
    document.getElementById("set_menu").style.display = "none";
}
)
function turn() {
    window.location.reload();
    console.log('螢幕刷新');
}

function setup() {
    alert("※開發中，功能未完成...");
}

function about() {
    alert("design by 'LUN' in 2024  \n\nversion  v1.4.0    \n●系統尚在開發階段\n1.本次新增倒數頁");
}



function addOption() {
    count++;
    const optionsDiv = document.getElementById("options");

    const div = document.createElement("div");
    div.classList.add("option");

    const inputOption = document.createElement("input");
    inputOption.type = "text";
    inputOption.placeholder = "選項";
    inputOption.id = count;
    div.appendChild(inputOption);

    const inputProbability = document.createElement("input");
    inputProbability.type = "button";
    inputProbability.value = "選單";
    inputProbability.id = count+"aa";
    inputProbability.disabled = "disabled";
   
    
    div.appendChild(inputProbability);

    div.onclick = function() {
        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
        } else {
            const selectedOptions = document.querySelectorAll(".option.selected");
            selectedOptions.forEach(option => option.classList.remove("selected"));
            this.classList.add("selected");
        }
    };
    optionsDiv.appendChild(div);
} 





function removeOption() {
    const selectedOption = document.querySelector(".option.selected");

    if (!selectedOption) {
        document.getElementById("result").innerText = "alert:只能刪除綠框的選項!";
        alert("錯誤 只能刪除綠框的選項!");
        return;
    }

    selectedOption.remove();
    document.getElementById("result").innerText = "";
}


function drawWinner() {
    const options = document.querySelectorAll(".option");

    // 清除之前的選擇狀態
    options.forEach(option => option.classList.remove("selected"));

    const totalOptions = options.length;

    // 如果沒有選項，則顯示錯誤訊息並退出函數
    if (totalOptions === 0) {
        document.getElementById("result").innerText = "alert:請先新增選項!";
        alert("錯誤 請先新增選項!");
        return;
    }

    // 從所有選項中隨機選擇一個
    const randomIndex = Math.floor(Math.random() * totalOptions);
    const selectedOption = options[randomIndex];

    // 標記中獎者
    selectedOption.classList.add("selected");

    // 獲取中獎選項的名稱
    const optionName = selectedOption.querySelector("input[type='text']").value;

    // 顯示中獎訊息
    document.getElementById("result").innerText = `恭喜! 選到了 " ${optionName}" !`;
}



function searchOnGoogleMap(inputid) {
    // 获取输入框中的值
    var searchValue = document.getElementById(inputid).value;
    
    // 检查是否有输入
    if (searchValue.trim() !== '') {
        // 将搜索值编码为 URI 组件
        var encodedSearchValue = encodeURIComponent(searchValue);
        
        // 使用 Google 地图的 URL 格式进行搜索
        var googleMapURL = 'https://www.google.com/maps/search/?api=1&query=' + encodedSearchValue;
        
        // 在新窗口中打开 Google 地图搜索页面
        window.open(googleMapURL, '_self');
    } else {
        alert('請输入搜索内容！');
    }
}