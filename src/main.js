import './style.css'

const onClickAdd = () =>{
    //テキストボックスの値を取得し、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //未完了リストに追加
    createIncompleteTodo(inputText);
}

//渡された引数を基に未完了のTODOを作成
const createIncompleteTodo = (todo) =>{
    //li作成
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    //button(完了)タグ作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    //button(削除)タグ作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    console.log(div);



    //liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);

}

document.getElementById("add-button").addEventListener("click",onClickAdd);