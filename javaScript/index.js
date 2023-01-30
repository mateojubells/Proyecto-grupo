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

  document.getElementById('txt_header_servicios').innerHTML = data.txt_header_servicios
  document.getElementById('txt_header_nosotros').innerHTML = data.txt_header_nosotros
  document.getElementById('txt_header_experiencias').innerHTML = data.txt_header_experiencias
  document.getElementById('txt_header_contactanos').innerHTML = data.txt_header_contactanos

  document.getElementById('txt_section1').innerHTML = data.txt_section1
  document.getElementById('txt_section2').innerHTML = data.txt_section2
  //Serveis
  document.getElementById('txt_boda').innerHTML = data.txt_boda
  document.getElementById('descripcion_boda').innerHTML = data.descripcion_boda
  document.getElementById('txt_convencion').innerHTML = data.txt_convencion
  document.getElementById('descripcion_convencion').innerHTML = data.descripcion_convencion

  document.getElementById('txt_ver_mas').innerHTML = data.txt_ver_mas

//Footer
  document.getElementById('txt_serviciosFooter').innerHTML = data.txt_serviciosFooter
  document.getElementById('txt_sobreNosotrosFooter').innerHTML = data.txt_sobreNosotrosFooter
  document.getElementById('txt_experienciasFooter').innerHTML = data.txt_experienciasFooter
  document.getElementById('txt_contactanosFooter').innerHTML = data.txt_contactanosFooter
}