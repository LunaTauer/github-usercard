import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/LunaTauer')
  .then(res =>{
    const user = res.data
    document.querySelector('.cards').append(gitMaker(user));
    console.log(res.data);
  })
  .catch(err =>{
    console.log(err);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell']

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitMaker (data){
const card = document.createElement('div')
const image = document.createElement('img')
const cardinfo = document.createElement('div')
const name = document.createElement('h3')
const username = document.createElement('p')
const Location = document.createElement('p')
const Profile = document.createElement('p')
const address = document.createElement('a')
const Followers = documnent.createElement('p')
const Following = document.createElement('p')
const Bio = document.createElement('P')

card.classList.add('card')
image.src = data.avatar_url
cardinfo.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')

card.appendChild(image)
card.appendChild(cardinfo)
cardinfo.appendChild(name)
cardinfo.appendChild(username)
cardinfo.appendChild(Location)
cardinfo.appendChild(Profile)
cardinfo.appendChild(address)
cardinfo.appendChild(Followers)
cardinfo.appendChild(Following)
cardinfo.appendChild(Bio)

name.textContent = data.name
username.textcontent = data.usernamne
location.textcontent = `Location: ${data.Location}`
Followers.textcontent = `Followers: ${data.Followers}`
Following.textcontent = `Following: ${data.Following}`
Bio.textcontent = `Bio: ${data.Bio}`

return card
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
