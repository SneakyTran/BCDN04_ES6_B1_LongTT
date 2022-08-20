import Validation from "./Validation.js";
const validation = new Validation();
const ELE_BUTTON_ID = "btnKhoi1";
const MARK_1_CLASS_TEXT = "mark1";
const MARK_2_CLASS_TEXT = "mark2";
const RESULT_SPAN_1 = "tbKhoi1";
const RESULT_SPAN_2 = "tbKhoi2";
let buttonId = "";
let res = 0;
let calcAverage = () => {
    res = 0;
    let markType = "";
    let spanRes = "";
    if (buttonId === ELE_BUTTON_ID) {
        markType = MARK_1_CLASS_TEXT;
        spanRes = RESULT_SPAN_1;
    } else {
        markType = MARK_2_CLASS_TEXT;
        spanRes = RESULT_SPAN_2;
    }
    let isValid = true;
    let listInpELE = document.querySelectorAll(`.row .${markType} input`);
    for (let i = 0; i < listInpELE.length; i++) {
        let { value } = listInpELE[i];
        isValid &=
            !validation.checkEmpty(value) && validation.isValidNumber(value);
    }
    if (!isValid) {
        alert(
            "Điểm không hợp lệ, phải là số và chứa nhiều nhất 2 số thập phân!!!"
        );
        clearForm();
    } else {
        for (let i = 0; i < listInpELE.length; i++) {
            let { value } = listInpELE[i];
            sum(Number(value));
        }
        res /= listInpELE.length;
        document.querySelector(`#${spanRes}`).innerHTML =
            "Điểm trung bình: " + Number.parseFloat(res).toFixed(2);
    }
};

let clearForm = () => {
    let listInpELE = document.querySelectorAll(`.row input`);
    for (let i = 0; i < listInpELE.length; i++) {
        listInpELE[i].value = "";
    }
    document.querySelector("#tbKhoi1").innerHTML = "";
    document.querySelector("#tbKhoi2").innerHTML = "";
};

let sum = (...inputList) => {
    inputList.map((item) => {
        res += item;
    });
};

document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        buttonId = btn.getAttribute("id");
    });
});
document.querySelector("#btnKhoi1").onclick = calcAverage;
document.querySelector("#btnKhoi2").onclick = calcAverage;

// let validateInput = () => {
//     let isValid = validation.checkEmpty() &= validation.isValidNumber();
// };
