import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let pNombre = "";
  if (variables.name !== null) {
    pNombre = variables.name;
  } else {
    pNombre = "Name";
  }

  let pApellido = "";
  if (variables.lastname !== null) {
    pApellido = variables.lastname;
  } else {
    pApellido = "Last Name";
  }

  let cargo = "";
  if (variables.role !== null) {
    cargo = variables.role;
  } else {
    cargo = "Role";
  }

  let ciudad = "";
  if (variables.city !== null) {
    ciudad = variables.city;
  } else {
    ciudad = "City";
  }

  let pais = "";
  if (variables.country !== null) {
    pais = variables.country;
  } else {
    pais = "Country";
  }

  let sMedia = "";
  if (variables.socialMediaPosition !== null)
    sMedia = variables.socialMediaPosition;

  let twitterHandler = "twitter";
  if (variables.twitter !== null) twitterHandler = variables.twitter;

  let githubHandler = "github";
  if (variables.github !== null) githubHandler = variables.github;

  let linkedinHandler = "linkedin";
  if (variables.linkedin !== null) linkedinHandler = variables.linkedin;

  let instaHandler = "instagram";
  if (variables.instagram !== null) instaHandler = variables.instagram;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${pNombre} ${pApellido}</h1>
          <h2>${cargo}</h2>
          <h3>${ciudad} ${pais}</h3>
          <ul class="${sMedia}">
            <li><a href="https://twitter.com/${twitterHandler}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${githubHandler}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/${linkedinHandler}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instaHandler}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
