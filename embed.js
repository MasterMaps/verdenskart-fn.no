const mapId = "embedkart";
const langSelect = document.getElementById("lang-select");
const layerSelect = document.getElementById("map-select");
const countrySelect = document.getElementById("country-select");
const codeEl = document.getElementById("code");

const updateCode = ({ lang, layer, country }) => {
  codeEl.innerText = `<div data-id="embedkart" data-lang="${lang}" data-layer="${layer}" data-country="${country}" />`;
};

verdenskart(mapId).then((updateMap) => {
  const setMapConfig = () => {
    const config = {
      lang: langSelect.value,
      layer: layerSelect.value,
      country: countrySelect.value,
    };

    updateMap(config);
    updateCode(config);
  };

  langSelect.onchange = setMapConfig;
  layerSelect.onchange = setMapConfig;
  countrySelect.onchange = setMapConfig;

  setMapConfig();
});
