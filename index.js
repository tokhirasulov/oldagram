let firstPhoto = document.getElementById("first-photo")
let secondPhoto = document.getElementById("second-photo")
let thirdPhoto = document.getElementById("third-photo")
let tokhirPhoto = document.getElementById("Tokhir-photo")
const likeFirst = document.getElementById("like-first")
let firstLikeNumber = document.getElementById("like-number-first")
let likeNumberFirst = 945
const likeSecond = document.getElementById("like-second")
let secondLikeNumber = document.getElementById("like-number-second")
let likeNumberSecond = 777
const likeThird = document.getElementById("like-third")
let thirdLikeNumber = document.getElementById("like-number-third")
let likeNumberThird = 503
const likeTokhir = document.getElementById("like-Tokhir")
let tokhirLikeNumber = document.getElementById("like-number-Tokhir")
let likeNumberTokhir = 999

firstPhoto.addEventListener("dblclick", function(){
    if (likeFirst.classList.contains("fa-regular")){
        likeFirst.classList.remove("fa-regular");
        likeFirst.classList.add("fas");
    increment()
    }
    else if (likeFirst.classList.contains("fas")){
        likeFirst.classList.remove("fas");
        likeFirst.classList.add("fa-regular");
        decrement()
    }

})

secondPhoto.addEventListener("click", function(){
    if (likeSecond.classList.contains("fa-regular")){
        likeSecond.classList.remove("fa-regular");
        likeSecond.classList.add("fas");
    incrementSecond()
    }
    else if (likeSecond.classList.contains("fas")){
        likeSecond.classList.remove("fas");
        likeSecond.classList.add("fa-regular");
        decrementSecond()
    }
})

thirdPhoto.addEventListener("click", function(){
    if (likeThird.classList.contains("fa-regular")){
        likeThird.classList.remove("fa-regular");
        likeThird.classList.add("fas");
    incrementThird()
    }
    else if (likeThird.classList.contains("fas")){
        likeThird.classList.remove("fas");
        likeThird.classList.add("fa-regular");
        decrementThird()
    }
})


tokhirPhoto.addEventListener("click", function(){
    if (likeTokhir.classList.contains("fa-regular")){
        likeTokhir.classList.remove("fa-regular");
        likeTokhir.classList.add("fas");
    incrementTokhir()
    }
    else if (likeTokhir.classList.contains("fas")){
        likeTokhir.classList.remove("fas");
        likeTokhir.classList.add("fa-regular");
        decrementTokhir()
    }
})





likeFirst.addEventListener("click", function(){
    if (likeFirst.classList.contains("fa-regular")){
        likeFirst.classList.remove("fa-regular");
        likeFirst.classList.add("fas");
    increment()
    }
    else if (likeFirst.classList.contains("fas")){
        likeFirst.classList.remove("fas");
        likeFirst.classList.add("fa-regular");
        decrement()
    }
})

function increment(){
    likeNumberFirst += 1
    firstLikeNumber.innerHTML = likeNumberFirst + " likes"
}

function decrement() {
    likeNumberFirst = likeNumberFirst - 1
    firstLikeNumber.innerHTML = likeNumberFirst + " likes"
}

likeSecond.addEventListener("click", function(){
    if (likeSecond.classList.contains("fa-regular")){
        likeSecond.classList.remove("fa-regular");
        likeSecond.classList.add("fas");
    incrementSecond()
    }
    else if (likeSecond.classList.contains("fas")){
        likeSecond.classList.remove("fas");
        likeSecond.classList.add("fa-regular");
        decrementSecond()
    }
})

function incrementSecond(){
    likeNumberSecond += 1
    secondLikeNumber.innerHTML = likeNumberSecond + " likes"
}

function decrementSecond() {
    likeNumberSecond = likeNumberSecond - 1
    secondLikeNumber.innerHTML = likeNumberSecond + " likes"
}

likeThird.addEventListener("click", function(){
    if (likeThird.classList.contains("fa-regular")){
        likeThird.classList.remove("fa-regular");
        likeThird.classList.add("fas");
    incrementThird()
    }
    else if (likeThird.classList.contains("fas")){
        likeThird.classList.remove("fas");
        likeThird.classList.add("fa-regular");
        decrementThird()
    }
})

function incrementThird(){
    likeNumberThird += 1
    thirdLikeNumber.innerHTML = likeNumberThird + " likes"
}

function decrementThird() {
    likeNumberThird = likeNumberThird - 1
    thirdLikeNumber.innerHTML = likeNumberThird + " likes"
}

likeTokhir.addEventListener("click", function(){
    if (likeTokhir.classList.contains("fa-regular")){
        likeTokhir.classList.remove("fa-regular");
        likeTokhir.classList.add("fas");
    incrementTokhir()
    }
    else if (likeTokhir.classList.contains("fas")){
        likeTokhir.classList.remove("fas");
        likeTokhir.classList.add("fa-regular");
        decrementTokhir()
    }
})

function incrementTokhir(){
    likeNumberTokhir += 1
    tokhirLikeNumber.innerHTML = likeNumberTokhir + " likes"
}

function decrementTokhir() {
    likeNumberTokhir = likeNumberTokhir - 1
    tokhirLikeNumber.innerHTML = likeNumberTokhir + " likes"
}