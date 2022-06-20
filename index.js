const foregroundFront = document.querySelector(".foreground--front")
const foregroundBack = document.querySelector(".foreground--back")

const foregroundFrontText = document.querySelector(
  ".foreground--front .foreground__text"
)
const foregroundBackText = document.querySelector(
  ".foreground--back .foreground__text"
)
const backgroundTopText = document.querySelector(
  ".background--top .background__text"
)
const backgroundBottomText = document.querySelector(
  ".background--bottom .background__text"
)

let numNow = 1

foregroundFrontText.innerText = numNow
foregroundBackText.innerText = numNow + 1

foregroundFront.addEventListener("animationend", () => {
  foregroundFront.style.display = "none"
  foregroundBack.style.display = "none"
  backgroundBottomText.innerText = numNow + 1
  numNow += 1
  foregroundFrontText.innerText = numNow
  foregroundBackText.innerText = numNow + 1
})

const handleOnClick = () => {
  backgroundTopText.innerText = numNow + 1
  foregroundFront.style.display = "inline-block"
  foregroundBack.style.display = "inline-block"
}
