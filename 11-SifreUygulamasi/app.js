const leftTextArea = document.querySelector("#leftTextArea");
const rightTextArea = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");

runEventListeners();

function runEventListeners() {
  encodeButton.addEventListener("click", encode);
  decodeButton.addEventListener("click", decode);

}

function encode() {
      if(leftTextArea.value==""){
        alert("Lütfen Şifre Giriniz")
        return;
      }

  //     let password = leftTextArea.value;
  //    let encodePassword= window.btoa(password)
  //     rightTextArea.value=encodePassword

  //KISA YOL
  rightTextArea.value=window.btoa(leftTextArea.value)
  leftTextArea.value=""

}

function decode(){
    leftTextArea.value= window.atob(rightTextArea.value);
    rightTextArea.value=""

}
