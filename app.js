const appElement = document.querySelector("#app");
const source = document.querySelector("#starships-template").innerHTML;
const template = Handlebars.compile(source);

/*
const endpoint = "https://swapi.dev/api/starships";

fetch(endpoint)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
*/

const html = template({ starships: [{ name: "Ship A1" }, { name: "Ship B1" }] });
appElement.innerHTML = html;
