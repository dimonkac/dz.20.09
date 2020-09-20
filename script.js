let xml = new XMLHttpRequest();
let input = document.getElementById("input");
let button = document.getElementById("button");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let onSearch = (e) => {
  let user = {
    userId: input.value,
  };
  console.log(user);
  input.value = "";
};

button.addEventListener("click", onSearch);

xml.open("get", "https://jsonplaceholder.typicode.com/posts");
xml.send();
// console.log(xml);
xml.onload = () => {
  if (xml.status === 200) {
    const data = JSON.parse(xml.response);
    data.forEach(() => {
      console.log(data);
    });
  }
};
