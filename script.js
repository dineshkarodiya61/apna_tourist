document.querySelector('.card#about').addEventListener('mouseenter', () => {
document.querySelector('.card#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const accountModal = document.getElementById("accountModal");
const loginModal = document.getElementById("loginModal");
const forgotModal = document.getElementById("forgotModal");

const createAccountBtn = document.getElementById("createAccountBtn");
const loginModalBtn = document.getElementById("loginModalBtn");

const closeAccountModal = document.getElementById("closeAccountModal");
const closeLoginModal = document.getElementById("closeLoginModal");
const closeForgotModal = document.getElementById("closeForgotModal");

const backBtn = document.getElementById("backBtn");
const goLogin = document.getElementById("goLogin");
const backLogin = document.getElementById("backLogin");
const forgotBtn = document.getElementById("forgotBtn");
const backForgot = document.getElementById("backForgot");

createAccountBtn.onclick = () => accountModal.style.display = "block";
loginModalBtn.onclick = () => loginModal.style.display = "block";

closeAccountModal.onclick = () => accountModal.style.display = "none";
closeLoginModal.onclick = () => loginModal.style.display = "none";
closeForgotModal.onclick = () => forgotModal.style.display = "none";

backBtn.onclick = () => accountModal.style.display = "none";
backLogin.onclick = () => loginModal.style.display = "none";
backForgot.onclick = () => forgotModal.style.display = "none";

goLogin.onclick = () => {
  accountModal.style.display = "none";
  loginModal.style.display = "block";
};

forgotBtn.onclick = () => {
  loginModal.style.display = "none";
  forgotModal.style.display = "block";
};

window.onclick = (event) => {
  if (event.target == accountModal) accountModal.style.display = "none";
  if (event.target == loginModal) loginModal.style.display = "none";
  if (event.target == forgotModal) forgotModal.style.display = "none";
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
