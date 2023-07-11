/* function changeH1 () {
    document.querySelector('h1').innerHTML = "MAGLIETTE INTER"
}

const changeBackground = function () {
    document.querySelector('body').style.backgroundColor = 'lightblue'
}

const changeAddress = function() {
document.querySelector('footer').innerHTML  = "Via germonio 1, Grugliasco 10095"
}
const addCss = function() {
let aLink = document.querySelectorAll('a')

    for (let i = 0; i < aLink.length; i++) {
        aLink[i].classList.add('newCss')
}
}

const remImg = function(){
let outImg = document.querySelectorAll('img')

for (let i=0; i < outImg.length; i++) {
    outImg[i].classList.toggle('hide')
}
}

const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  }

  const setRandomColor = function () {
    const randomColor = getRandomColor()
    let prices = document.querySelectorAll('.price')
    for (let i = 0; i < prices.length; i++) {
      let singlePrince = prices[i]
      singlePrince.style.color = randomColor
    }
} */


/* const getColor = function(n){
    const red = Math.round(Math.floor()* 255)
    const green = Math.round(Math.floor()* 255)
    const blue = Math.round(Math.floor()* 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'

}
console.log(getColor())


const setRandomColor = function () {
    const randomColor = getColor()
    let prices = document.querySelectorAll('.price')
    for (let i = 0; i < prices.length; i++) {
      let singlePrince = prices[i]
      singlePrince.style.color = randomColor
    }
} */

const getColor = function () {
    const red = Math.round(Math.floor()* 255)
    const green = Math.round(Math.floor()* 255)
    const blue = Math.round(Math.floor()* 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

/* const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  } */
  console.log(getColor())