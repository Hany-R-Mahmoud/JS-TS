// Main variables
let theInput = document.querySelector(".get-repos input"),
  getBtn = document.querySelector(".get-button"),
  reposData = document.querySelector(".show-data");

getBtn.addEventListener("click", () => {
  getRepos();
});
// function
function getRepos() {
  if (theInput.value == "") {
    Swal.fire("Empty Value");
    reposData.innerHTML = "<span>Please write GitHub Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        reposData.innerHTML = "";
      
        repositories.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let repoName = document.createTextNode(repo.name);
         
          let theUrl = document.createElement("a");
          theUrl.textContent= "Visit";
          theUrl.href= `https://github.com/${theInput.value}/${repo.name}`;
          theUrl.setAttribute("target","_blank");
         
          let starsSpan = document.createElement("span");
          let starText = document.createTextNode(`Stars ${repo.stargazers_count}`);
         starsSpan.appendChild(starText);
         mainDiv.className= "repo-box";
         mainDiv.appendChild(starsSpan);
          mainDiv.appendChild(repoName);
          
          mainDiv.appendChild(theUrl);
          reposData.appendChild(mainDiv);

        });
      });
  }
}
// "https://catfact.ninja/facts"
// api.github.com/users/ElementlzeroWebSchool/repos
