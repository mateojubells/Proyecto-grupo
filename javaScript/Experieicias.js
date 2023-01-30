// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtenir el fitxer json corresponent
  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

  // Canviar els texts (Aquesta és la part que heu de modificar)

  //Header
  document.getElementById('txt_header_servicios').innerHTML = data.txt_header_servicios
  document.getElementById('txt_header_nosotros').innerHTML = data.txt_header_nosotros
  document.getElementById('txt_header_experiencias').innerHTML = data.txt_header_experiencias
  document.getElementById('txt_header_contactanos').innerHTML = data.txt_header_contactanos

  //Experiencies
  document.getElementById('txt_experiencias').innerHTML = data.txt_experiencias
  document.getElementById('txt_OrganizamosTodo').innerHTML = data.txt_OrganizamosTodo
  document.getElementById('txt_OrganizamosFiestas').innerHTML = data.txt_OrganizamosFiestas
  document.getElementById('txt_VariosMunicipios').innerHTML = data.txt_VariosMunicipios
  document.getElementById('txt_paraLosMas').innerHTML = data.txt_paraLosMas
  //Footer
  document.getElementById('txt_serviciosFooter').innerHTML = data.txt_serviciosFooter
  document.getElementById('txt_sobreNosotrosFooter').innerHTML = data.txt_sobreNosotrosFooter
  document.getElementById('txt_experienciasFooter').innerHTML = data.txt_experienciasFooter
  document.getElementById('txt_contactanosFooter').innerHTML = data.txt_contactanosFooter
}
