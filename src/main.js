import './style.css'

const onClickAdd = () =>{
    //テキストボックスの値を取得し、初期化
    const inputText = document.getElementById("add-text").value;
    console.log(inputText);
    document.getElementById("add-text").value = "";
}

document.getElementById("add-button").addEventListener("click",onClickAdd);