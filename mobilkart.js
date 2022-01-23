const select = document.getElementById("map-select");
const language = "nb";

verdenskart("mobilkart").then((updateMap) => {
  updateMap({ language, layer: select.value });
  select.onchange = () => updateMap({ layer: select.value });
});
