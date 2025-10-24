document.querySelector('.card#about').addEventListener('mouseenter', () => {
  document.querySelector('.card#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
const createBtn = document.getElementById('createAccountBtn');
const modal = document.getElementById('accountModal');
const closeModal = document.getElementById('closeModal');
const backBtn = document.getElementById('backBtn');
const accountForm = document.getElementById('accountForm');
const loginBtn = document.getElementById('loginBtn');

createBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
backBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

accountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Account Created Successfully!');
  modal.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
  alert('Redirecting to Login...');
  modal.style.display = 'none';
});


const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  sidebar.style.right = '0'; 
});

closeBtn.addEventListener('click', () => {
  sidebar.style.right = '-280px'; 
});

