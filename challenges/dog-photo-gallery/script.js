const url = "https://dog.ceo/api/breeds/image/random";

const button = document.querySelector("#button_id");
const container = document.querySelector("#container");
const li = document.querySelector("#li_id");
const image = document.querySelector("#img_id");



button.addEventListener("click", async function fetchAPI() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // image.src = data.messages;
   image.src = data.message;
   li.textContent = data.status;
});

container.appendChild(image);
container.appendChild(li)
