const map = document.getElementById("map");
const langSelect = document.getElementById("lang-select");
const layerSelect = document.getElementById("map-select");
const countrySelect = document.getElementById("country-select");
const codeEl = document.getElementById("code");
const baseUrl = "https://mastermaps.github.io/verdenskart/#/";

const updateCode = (url) => {
  codeEl.innerText = `<iframe src="${url}" title="Kart" frameborder="0" allowfullScreen="true" />`;
};

const setMapConfig = () => {
  const lang = langSelect.value;
  const layer = layerSelect.value;
  const country = countrySelect.value;
  const url = `${baseUrl}${lang}/${layer}/${country}`;

  map.src = url;
  updateCode(url);
};

langSelect.onchange = setMapConfig;
layerSelect.onchange = setMapConfig;
countrySelect.onchange = setMapConfig;

setMapConfig();
