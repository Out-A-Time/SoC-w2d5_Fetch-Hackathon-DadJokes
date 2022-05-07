/* PLAN
1- make a dad joke wesite
2- ammend CSS file- done
3- have a picture gallery that fetches pictures from the API
5-button for fav jokes - done
6 - button for new jokes - done 
7- amend style of the buttons
8- get src for main image of dad jokes - done
9 -animation added to H2
10- play music in background - done
*/
//Fetching API
let globalData;
async function getDadJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  globalData = data.joke;
  //Adding Dad Joke to H2
  let h2 = document.querySelector("#new-dad-joke");
  h2.innerText = data.joke;
  console.log(globalData);
  return globalData;
}
console.log(globalData);
getDadJoke();

//Generate New Joke Button
let generateNewJokeButton = document.querySelector("#new-joke");
generateNewJokeButton.addEventListener("click", getDadJoke);

//Add Fav Joke Button
let addJokeToFavButton = document.querySelector("#fav-joke");
addJokeToFavButton.addEventListener("click", addJoketoFavList);

//Adding Favorite Joke to the List
let newArray = [];
function addJoketoFavList() {
  // for (let i = 0; i < newArray.length; i++) {
  //   if (newArray[i] !== globalData) {
  //     console.log("I'm comparing data here");
  //     let favJokeList = document.querySelector("#fav-joke-list");
  //     let newLi = document.createElement("li");
  //     newLi.innerText = globalData;
  //     favJokeList.appendChild(newLi);
  //     newArray.push(globalData);
  //   }
  // }
  let favJokeList = document.querySelector("#fav-joke-list");
  let repeatedJoke = document.querySelector("#repeated");
  if (!newArray.includes(globalData)) {
    newArray.push(globalData);
    let newLi = document.createElement("li");
    newLi.innerText = globalData;
    favJokeList.appendChild(newLi);
  } else {
    repeatedJoke.innerText = "This joke already exists";
    setTimeout(removeDuplicate, "2000");
  }
  function removeDuplicate() {
    repeatedJoke.innerText = "";
  }
}
