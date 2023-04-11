window.onload = function themeSwitcher() {
  const toggleButton = document.getElementById("themeToggle");
  const body = document.getElementsByTagName("body")[0];
  console.log(body);
  console.log(toggleButton);

  toggleButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  });
};
