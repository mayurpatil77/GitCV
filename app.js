
// Getting Refrence To Elements 

const usernameInput = document.querySelector("#usernameInput");
const searchBtn = document.querySelector("#searchBtn");
const profile_img = document.querySelector("#profile-img");
const resume = document.querySelector(".resume")

// Getting Access To Variables For Poppulating Data 

const username = document.querySelector("#username");
const publicRepo = document.querySelector("#publicRepo");
const publicRepoUrl = document.querySelector("#publicRepoUrl")
const followers = document.querySelector("#followers");
const followersUrl = document.querySelector("#followersUrl");
const userprofilelink = document.querySelector("#userprofilelink");
const bio = document.querySelector("#bio");
const repoListDiv = document.querySelector('#repo-info');
const repo_ul = document.querySelector("#repo-ul");
const userLocation = document.querySelector("#location");
const git_profile_username = document.querySelector("#git-profile-username")
const git_profile_location = document.querySelector("#git-profile-location")



// Loader 


const loader = document.getElementById("loader");

function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}



// Calling API 

function fetchGitProfile() {

    showLoader();


    const searchUsername = usernameInput.value;

    fetch(`https://api.github.com/users/${searchUsername}`)
    .then((res) => res.json())
    .then((data) => {
        hideLoader();

        resume.style.display = "block";

        username.innerText = data.name;
        publicRepo.innerText = data.public_repos + " Repositories " ;
        followers.innerText = data.followers + " Followers ";
        followersUrl.href = `https://github.com/${searchUsername}?tab=followers`
        publicRepoUrl.href= `https://github.com/${searchUsername}?tab=repositories` ;
        bio.innerText = data.bio;
        userprofilelink.href = `${data.html_url}`
        profile_img.src= data.avatar_url ;
        userLocation.innerText = data.location;
        git_profile_username.innerText = data.name
        git_profile_location.innerText = data.location;
    })
    .catch((error) => {
        hideLoader();
        console.error("Error:", error);
    });

    fetch(`https://api.github.com/users/${searchUsername}/repos`)
    .then((response) => response.json())
    .then((reposdata) => {
        while (repo_ul.firstChild) {
            repo_ul.removeChild(repo_ul.firstChild);
        }
        reposdata.forEach((repo) => {
            const repoName = repo.name;
             
            const li = document.createElement('li');
            li.textContent = repoName;
            repo_ul.appendChild(li);
       }); 
    })      
    .catch((error) => {
        console.error("Error:", error);
    }); 
}


// Event Listener 

searchBtn.addEventListener("click", fetchGitProfile); 
