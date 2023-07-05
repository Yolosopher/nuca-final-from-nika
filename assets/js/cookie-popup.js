const cookieValue = localStorage.getItem("cookie-policy");

const cookie_popup = document.querySelector(".cookies");
if (cookieValue) {
	cookie_popup.classList.add("hidden");
} else {

  const agreeBtn = document.getElementById("agree");

  window.addEventListener("load", () => {
    agreeBtn.addEventListener("click", () => {
      localStorage.setItem("cookie-policy", "agreed");
      cookie_popup.classList.add("hidden");
    });
  });
}
