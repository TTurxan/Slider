let images = document.querySelectorAll(".gallery a");
let popap = document.querySelector(".popap");
let bigImg = document.querySelector(".popap .inner img");
let cancel = document.querySelector(".popap .cancel i");
let prev = document.querySelector(".popap .previos .prev");
let next = document.querySelector(".popap .previos .next");
console.log(next);
images.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this);
    doOpen();
    changeSlider(this);
    this.classList.add("showSlide")
  });
});

const doOpen = () => {
  popap.style.display = "flex";
};
const doClose = () => {
  popap.style.display = "none";
};
const doPrev = () => {
    console.log("prev");
    
  };
  const doNext = () => {
    console.log("next");
    let showItem = document.querySelector(".showSlide")
    if (showItem.nextElementSibling != null) {
      showItem.nextElementSibling.classList.add("showSlide")
      changeSlider(showItem.nextElementSibling)
    } else {
      showItem.parentElement.children[0].classList.add("showSlide")
      changeSlider(showItem.parentElement.children[0])
    }
    showItem.classList.remove("showSlide")
    
    console.log(showItem);
  };

cancel.addEventListener("click", function () {
    doClose()
});

function changeSlider(item) {
  let img = item.getAttribute("href");
  bigImg.setAttribute("src", img);
}
  
popap.addEventListener("click", function (e) {
  if (e.target.classList.contains("popap")) {
    doClose();
    // console.log(e.target.classList.contains("popap"));
  }
});

prev.addEventListener("click",function(){
    doPrev()
})

next.addEventListener("click",function(){
    doNext()
})