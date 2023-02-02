const data = [
  {
    id: 1,
    img: 'https://cdn.britannica.com/81/160781-050-8B7BF24D/Selena-Gomez-2010.jpg?w=400&h=300&c=crop',
    name: 'Selena gomez',
    age: 30,
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/M/MV5BMGI3OTI0NjctMjM2ZC00MjZiLWIxMjctODczN2M4MTFjZmY1XkEyXkFqcGdeQXJoYW5uYWg@._V1_QL75_UX500_CR0,0,500,281_.jpg',
    name: 'Will Smith',
    age: 50,
  },
  {
    id: 3,
    img: 'https://informatesalta.com.ar/download/multimedia.normal.b3004b6326591311.656c6f5f6e6f726d616c2e6a7067.jpg',
    name: 'Leo messi',
    age: 35,
  },
  {
    id: 4,
    img: 'https://static10.tgstat.ru/channels/_0/ed/ed7069c194b0fa28924bb0b66f32d704.jpg',
    name: 'Shoxruhxon',
    age: 34,
  },
  {
    id: 5,
    img: 'https://static.dw.com/image/64258094_605.jpg',
    name: 'Cristiano Ronaldo',
    age: 37,
  },
];


const box = document.getElementById("box");
const numberOfPeople = document.getElementById("number-of-people");
const  clearAll = document.getElementById("clear-all");

function displeyPeople(birthdasArr) {
  let peopleArr = birthdasArr.map((itemObj) =>{
    const {img, name, age} =itemObj;
    return`<article class="person">
    <img
      src=${img}
      alt="person image"
    />
    <div>
      <h4>${name}</h4>
      <p>${age}</p>
    </div>
  </article>`;
  });
  peopleArr = peopleArr.join('');
  box.innerHTML = peopleArr;
  numberOfPeople.innerHTML = `${birthdasArr.length}Birthdays`;
}
displeyPeople(data);

let isClicked = false;
clearAll.addEventListener('click', ()=>{
  if(isClicked === true){
    displeyPeople(data);
    clearAll.innerHTML = 'Clear all';
    isClicked = false;
  }else{
    displeyPeople([]);
    clearAll.innerHTML = 'Show all';
    isClicked = true;
  }
})