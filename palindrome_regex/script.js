const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const resultContainer = document.querySelector(".result-container");

const EMPTY_STR = "Please input a value";



function handleClick(val) {
    const isStrEmpty = val.trim() === "";
    if(isStrEmpty) {
        alert(EMPTY_STR);
        return;
    }

    const normalizeVal = val.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

    const palindrome = normalizeVal === [...normalizeVal].reverse().join("");

    result.innerHTML = `<strong>${val}</strong> ${palindrome ? "is a palindrome" : "is not a palindrome"}`;
    textInput.value = "";

}



checkBtn.addEventListener("click", () => handleClick(textInput.value));
