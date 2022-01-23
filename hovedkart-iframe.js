const map = document.getElementById("map");
const select = document.getElementById("map-select");
const url = "https://mastermaps.github.io/verdenskart/#/";
const language = "nb";

const setMap = (id) => (map.src = `${url}${language}/${id}`);

select.onchange = () => setMap(select.value);

setMap(select.value);
