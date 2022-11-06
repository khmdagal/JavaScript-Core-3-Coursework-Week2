const url = "https://xkcd.now.sh/?comic=latest";
const image = document.querySelector("#image_id");
fetch(url).then((response) => response.json())
    .then((data) => image.src = data.img);

// I used arrow function 