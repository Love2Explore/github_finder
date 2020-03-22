class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  //Display profile for User
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3" > 
        <div class="row" >
            <div class="col-md-3">
              <img src=${user.avatar_url} class="img-fluid"/>
              <a href="${user.html_url}" target="_blant" class="btn btn-primary
              btn-block mt-3 mb-3">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary mb-2" >Public Respos:  
              ${user.public_repos}</span>
              <span class="badge badge-secondary mb-2">Public Gist:  
              ${user.public_gists}</span>
              <span class="badge badge-success mb-2">Follower: 
              ${user.followers}</span>
              <span class="badge badge-info mb-2">Following: 
              ${user.following}</span>
              <br/>
              <ul class="list-group">
                <li class="list-group-item">Company:${user.company} </li>
                <li class="list-group-item">Website/Blog:${user.blog} </li>
                <li class="list-group-item">Location:${user.location} </li>
                <li class="list-group-item">Member Since:${user.created_at} </li>
                <li class="list-group-item">Last Changed:${user.updated_at} </li>
              </ul>
            </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Lastest Repos</h3>
      <div id="repos"></div>
      `;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2"> 
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                    <span class="badge badge-primary mb-2" >Stars :  
                    ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary mb-2">Watcher Count:  
                    ${repo.watchers_count}</span>
                    <span class="badge badge-success mb-2">Form Count : 
                    ${repo.forms_count}</span>
                    <span class="badge badge-info mb-2">Watchers : 
                    ${repo.watchers}</span>
                </div>    
            </div>
      </div>
      `;
    });
    document.getElementById("repos").innerHTML = output;
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
  //show Alert Mesage
  showAlert(message, className) {
    //remobve alert
    this.removeAlert();
    this.clearProfile();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const input = document.querySelector(".searchConatiner");
    //get Search Box
    const search = document.querySelector(".search");
    //Insert Message
    input.insertBefore(div, search);
    //Tiout After 2 second
    setTimeout(() => {
      this.removeAlert();
    }, 2000);
  }
  //remove alert message
  removeAlert() {
    const currentalert = document.querySelector(".alert");
    if (currentalert) {
      currentalert.remove();
    }
  }
}
