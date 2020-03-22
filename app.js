const Input = document.getElementById("searchuser");
const gihub = new GitHub();
const ui = new UI();

Input.addEventListener("keyup", e => {
  const InputValue = e.target.value;
  if (InputValue !== "") {
    gihub.getUser(InputValue).then(data => {
      if (data.profile.message === "Not Found") {
        //show error alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //show user detail
        console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.profileRepo);
      }
    });
  } else {
    ui.clearProfile();
  }
});
