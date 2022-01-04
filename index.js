const map = document.getElementById("map");
const select = document.getElementById("map-select");
const url = "https://mastermaps.github.io/verdenskart/#/";
const language = "nb";

select.onchange = () => (map.src = `${url}${language}/${select.value}`);
