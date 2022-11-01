const like = document.getElementById("like")
let firstLikeNumber = document.getElementById("like-number-first")
let likeNumber = 10
const share = document.getElementById("share")


like.addEventListener("click", function(){
    if (like.classList.contains("fa-regular")){
        like.classList.remove("fa-regular");
        like.classList.add("fas");
    increment()
    }
    else if (like.classList.contains("fas")){
        like.classList.remove("fas");
        like.classList.add("fa-regular");
        decrement()
    }
})

function increment(){
    likeNumber += 1
    firstLikeNumber.innerHTML = likeNumber + " likes"
}

function decrement() {
    likeNumber = likeNumber - 1
    firstLikeNumber.innerHTML = likeNumber + " likes"
}

share.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true})
})