function toggleMobileMenu() {
  const myMenu = document.getElementById("mobileMenu");
  if (myMenu.style.display === "block") {
    myMenu.style.display = "none";
  } else {
    myMenu.style.display = "block";
  }
}

// function changeText () {
//   const btn = document.getElementById('buttn');
//   btn.innerHTML = "My Projects";

//   btn.addEventListener('click', function () {
//     if (btn.innerHTML = "My Projects") {
//       btn.innerHTML = "Build a web app";
//     } else if (btn.innerHTML = "Build a web app") {
//       btn.innerHTML = "My Projects";
//     }
//   })

// }
