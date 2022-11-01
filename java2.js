let comments = []
const btn = document.getElementById("btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let commentsFromLocalStorage = JSON.parse(localStorage.getItem("comments"))

if (commentsFromLocalStorage) {
    comments = commentsFromLocalStorage
    render(comments)
}

function render(comments) {
    let listItems = ""
    for (let i = 0; i < comments.length; i++ ) {
        listItems += `<li> ${comments[i]}</li>`
    }
    ulEl.innerHTML = listItems
}


btn.addEventListener("click", function(){
    comments.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("comments",JSON.stringify(comments))
    render (comments)
})