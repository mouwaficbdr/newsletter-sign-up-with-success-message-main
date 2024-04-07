const email = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const form = document.getElementById("form");
let registeredMail = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
})

const subscribe = () => {
  if (email.checkValidity()) {
    registeredMail = email.value;
    document.getElementById("mail").textContent = registeredMail;
    document.querySelector('.signup').classList.add('hidden');
    document.querySelector('.success').classList.remove('hidden');
  }
}

subscribeBtn.addEventListener("click", subscribe);


dismissBtn.addEventListener("click", () => {
  document.querySelector('.signup').classList.toggle('hidden');
  document.querySelector('.success').classList.toggle("hidden");
})