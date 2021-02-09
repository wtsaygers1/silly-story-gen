/* the customName is using a .getElementById which is used to select a specific element
and find it quickly
the randomize and story variables are using querySelector which are used when no specific element id
is availalbe but allows you to find an element using any selector */

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

/* this function will pick a random string from an array and the .length method will multiply by the most
current number of elements in the array */

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/* the variable storyText is the generated story with key spots to be 
replaced with the randomized arrays
the other three variables are the arrays with the strings to be inserted randomly
into the generated story */

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

/* the .addEventListener generates a story with the randomization when an event
(in this case a click) is executed */

randomize.addEventListener('click', result);

/* this last function is where the magic happens. the function populates the generated
story with random strings from the insertX/Y/Z array.  */

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

/* the .replace method seraches for :insertx: string and replaces it with a random string
from the different arrays -- something to note is the x/x/y/z are case sensitive */    

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

// this generates the name value inputted in the custom name unless the name is Bob //

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  /* this if statement prepares the story for a US or UK version with 
  appropriate weight and temp values */

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286) + ' stone';
    let temperature =  Math.round((94-32)*5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  /* the .textContent concatenates the story and the story.style.visibility seems
  like it may be related to CSS??? */

  story.textContent = newStory;
  story.style.visibility = 'visible';
} 
