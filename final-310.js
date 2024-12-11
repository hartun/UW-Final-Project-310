//using fetch to get the YouTube API
const videoSection = document.querySelector('section');

function getVideo() {

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=UUWgIYO_NDj9RyuqUXY4GttQ&key=[API KEY HERE]')
.then(result => result.json())
.then(data => {
 data.items.forEach(e => {
  videoSection.innerHTML = 
  `<a target="_blank" href="https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}" class="video">
  <img src="${e.snippet.thumbnails.medium.url}" />
  <h4>${e.snippet.title}</h4>
  </a>`
  });
});
};
getVideo();

let alertContent = 'Have questions? Text (260) 867-5309.'

function helpMessage() {
  alert(alertContent);
}
setTimeout(helpMessage, 2000);

//local storage
let notice = JSON.stringify(alertContent);

localStorage.setItem('notice', notice);
localStorage.getItem('notice');

//form validation
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const regex = /\w+@\w+\.\w+/;

form.addEventListener('submit', (e) => {
  let messages = [];
  if (fName.value === '' || fName.value == null || lName.value === '' || lName.value == null) {
    alert('First and last name is required.');
  }

  if (messages.length > 0) {
    e.preventDefault();
  }

  //using regex to validate emails
  if (!email.value.match(/\w+@\w+\.\w+/)) {
     alert('Please enter a valid email.')
     return false;
   }

});

//Setting up the snackbar
const button = document.getElementById('snackbarButton');
const snackBar = document.getElementById('snackbar');
button.addEventListener('click', function() {
   snackBar.className = 'show';
   setTimeout(function(){ snackBar.className = snackBar.className.replace('show', ''); }, 3000);
});
