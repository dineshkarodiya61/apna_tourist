const accountModal = document.getElementById('accountModal');
const loginModal = document.getElementById('loginModal');
const forgotModal = document.getElementById('forgotModal');

const createAccountBtn = document.getElementById('createAccountBtn');
const loginModalBtn = document.getElementById('loginModalBtn');
const goLoginBtn = document.getElementById('goLogin');
const backBtn = document.getElementById('backBtn');
const backLoginBtn = document.getElementById('backLogin');
const forgotBtn = document.getElementById('forgotBtn');
const backForgotBtn = document.getElementById('backForgot');
const closeAccountModal = document.getElementById('closeAccountModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeForgotModal = document.getElementById('closeForgotModal');

createAccountBtn.onclick = () => {
  accountModal.style.display = 'flex';
};
loginModalBtn.onclick = () => {
  loginModal.style.display = 'flex';
};
goLoginBtn.onclick = () => {
  accountModal.style.display = 'none';
  loginModal.style.display = 'flex';
};

backBtn.onclick = () => {
  accountModal.style.display = 'none';
};
backLoginBtn.onclick = () => {
  loginModal.style.display = 'none';
};
forgotBtn.onclick = () => {
  loginModal.style.display = 'none';
  forgotModal.style.display = 'flex';
};
backForgotBtn.onclick = () => {
  forgotModal.style.display = 'none';
  loginModal.style.display = 'flex';
};
closeAccountModal.onclick = () => (accountModal.style.display = 'none');
closeLoginModal.onclick = () => (loginModal.style.display = 'none');
closeForgotModal.onclick = () => (forgotModal.style.display = 'none');

window.onclick = (e) => {
  if (e.target === accountModal) accountModal.style.display = 'none';
  if (e.target === loginModal) loginModal.style.display = 'none';
  if (e.target === forgotModal) forgotModal.style.display = 'none';
};

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

