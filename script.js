function addOption() {
    const optionsDiv = document.getElementById("options");

    const div = document.createElement("div");
    div.classList.add("option");

    const inputOption = document.createElement("input");
    inputOption.type = "text";
    inputOption.placeholder = "選項";
    div.appendChild(inputOption);

    const inputProbability = document.createElement("input");
    inputProbability.type = "number";
    inputProbability.min = "0";
    inputProbability.max = "100";
    inputProbability.placeholder = "機率 (%)";
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
        document.getElementById("result").innerText = "Please select an option to remove!";
        return;
    }

    selectedOption.remove();
}

function drawWinner() {
    const options = document.querySelectorAll(".option");

    // 清除之前的選擇狀態
    options.forEach(option => option.classList.remove("selected"));

    const totalOptions = options.length;

    // 如果沒有選項，則顯示錯誤訊息並退出函數
    if (totalOptions === 0) {
        document.getElementById("result").innerText = "Please add options first!";
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
    document.getElementById("result").innerText = `Congratulations! ${optionName} is the winner!`;
}