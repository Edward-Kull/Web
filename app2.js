const board = document.querySelector('#board')
const colors = ['#00FFFF','#7FFFD4','#7FFF00','#8A2BE2','#FF7F50','#8B008B','#00FFFF','#FFF8DC']
const SQUARES_NUMBER = 1800

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() => setColor(square))

    square.addEventListener('mouseleave',() => removeColor(square))

    board.append(square)
}
function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
element.style.backgroundColor = '#4d36e5'
element.style.boxShadow = `0 0 2px #4d36e5`

}


function getRandomColor (){
 const index = Math.floor(Math.random() * colors.length)
 return colors [index]
}