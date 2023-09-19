// Getting Refrence To Elements 

const usernameInput = document.querySelector("#usernameInput");
const searchBtn = document.querySelector("#searchBtn");
const printResumePDF = document.getElementById("printResumePDF");

// Getting Access To Variables For Poppulating Data 

const username = document.querySelector("#username");
const publicRepo = document.querySelector("#publicRepo");
const publicRepoUrl = document.querySelector("#publicRepoUrl")
const followers = document.querySelector("#followers");
const followersUrl = document.querySelector("#followersUrl");
const userprofilelink = document.querySelector("#userprofilelink");


// Calling API 

function fetchGitProfile() {

    const searchUsername = usernameInput.value;

    fetch(`https://api.github.com/users/${searchUsername}`)
    .then((res) => res.json())
    .then((data) => {
        username.innerText = data.name;
        publicRepo.innerText = data.public_repos;
        followers.innerText = data.followers;
        // followersUrl.href = data.followers_url;
        // publicRepoUrl.href= data.repos_url;
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


// Event Listener 

searchBtn.addEventListener("click", fetchGitProfile); 
