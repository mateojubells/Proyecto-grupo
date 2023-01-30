// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang){
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

  //Sobre Nosotros
  document.getElementById('txt_quienSomosPregunta').innerHTML = data.txt_quienSomosPregunta
  document.getElementById('txt_quienSomos').innerHTML = data.txt_quienSomos
  document.getElementById('txt_txt_queEventosOfrecemos').innerHTML = data.txt_queEventosOfrecemos
  document.getElementById('txt_enQue1').innerHTML = data.txt_enQue1
  document.getElementById('txt_enQue2').innerHTML = data.txt_enQue2
  document.getElementById('txt_eventoOfrecemos1').innerHTML = data.txt_eventoOfrecemos1
  document.getElementById('txt_eventoOfrecemos2').innerHTML = data.txt_eventoOfrecemos2
  document.getElementById('txt_enQueNosCentramos').innerHTML = data.txt_enQueNosCentramos
  document.getElementById('txt_trabajounicoTitulo').innerHTML = data.txt_trabajounicoTitulo 
  document.getElementById('txt_TrabajoUnico').innerHTML = data.txt_TrabajoUnico
  document.getElementById('txt_textoRes').innerHTML = data.txt_textoRes
  document.getElementById('txt_nuestrosLocales').innerHTML = data.txt_nuestrosLocales
  document.getElementById('txt_FotoLocalBadalona').innerHTML = data.txt_FotoLocalBadalona
  document.getElementById('txt_FotoLocalGracia').innerHTML = data.txt_FotoLocalGracia
  document.getElementById('txt_FotoLocalHospitalet').innerHTML = data.txt_FotoLocalHospitalet
  document.getElementById('txt_FotoLocalPuerto').innerHTML = data.txt_FotoLocalPuerto
  document.getElementById('txt_Locales1').innerHTML = data.txt_Locales1
  document.getElementById('txt_Locales2').innerHTML = data.txt_Locales2
  document.getElementById('txt_Locales3').innerHTML = data.txt_Locales3
  document.getElementById('txt_Locales4').innerHTML = data.txt_Locales4
  document.getElementById('txt_paraLosMas').innerHTML = data.txt_paraLosMas
  document.getElementById('txt_paraLosMas').innerHTML = data.txt_paraLosMas
  //Footer
  document.getElementById('txt_serviciosFooter').innerHTML = data.txt_serviciosFooter
  document.getElementById('txt_sobreNosotrosFooter').innerHTML = data.txt_sobreNosotrosFooter
  document.getElementById('txt_experienciasFooter').innerHTML = data.txt_experienciasFooter
  document.getElementById('txt_contactanosFooter').innerHTML = data.txt_contactanosFooter
}
