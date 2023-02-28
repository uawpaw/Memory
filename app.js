const cardArray =[
    {
        name: 'boobs',
        img: 'Images/boobs.jpg'
    },
    {
        name: 'cat',
        img: 'Images/cat.jpg'
    },
    {
        name: 'dog',
        img: 'Images/dog.jpg'
    },
    {
        name: 'face',
        img: 'Images/face.jpg'
    },
    {
        name: 'hold',
        img: 'Images/hold.jpg'
    },
    {
        name: 'woof',
        img: 'Images/woof.jpg'
    },
    {
        name: 'boobs',
        img: 'Images/boobs.jpg'
    },
    {
        name: 'cat',
        img: 'Images/cat.jpg'
    },
    {
        name: 'dog',
        img: 'Images/dog.jpg'
    },
    {
        name: 'face',
        img: 'Images/face.jpg'
    },
    {
        name: 'hold',
        img: 'Images/hold.jpg'
    },
    {
        name: 'woof',
        img: 'Images/woof.jpg'
    }
]

cardArray.sort(() => 0.5- Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen =[]
let cardsChosenIds =[]
const cardsWon =[]

function createBoard () {
    for (let i = 0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','Images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'Images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/blank.jpg')
        alert('you have clicked the same image')

    }

   else if (cardsChosen[0] == cardsChosen[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'Images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/white.jpg')
        cards[optionOneId].removeEventListener('clicks',flipCard)
        cards[optionTwoId].removeEventListener('clicks',flipCard)

        cardsWon.push(cardsChosen)

    }else{
        cards[optionOneId].setAttribute('src', 'Images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/blank.jpg')
        alert('Sorry try again')

    }

    resultDisplay.textContent =  cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length == cardArray.length/2){
       resultDisplay.textContent= 'Congrats you found them all'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}
