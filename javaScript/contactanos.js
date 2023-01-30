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

  //Contactanos
  document.getElementById('txt_titoloForm').innerHTML = data.txt_titoloForm
  document.getElementById('txt_contacta_con_nosotros').innerHTML = data.txt_contacta_con_nosotros
  document.getElementById('txt_firstName').innerHTML = data.txt_firstName
  document.getElementById('txt_lastName').innerHTML = data.txt_lastName
  document.getElementById('txt_email').innerHTML = data.txt_email
  document.getElementById('txt_CExplicacion').innerHTML = data.txt_CExplicacion
  document.getElementById('txt_birthday').innerHTML = data.txt_birthday
  document.getElementById('txt_portBarcelona').innerHTML = data.txt_portBarcelona
  //Footer
  document.getElementById('txt_serviciosFooter').innerHTML = data.txt_serviciosFooter
  document.getElementById('txt_sobreNosotrosFooter').innerHTML = data.txt_sobreNosotrosFooter
  document.getElementById('txt_experienciasFooter').innerHTML = data.txt_experienciasFooter
  document.getElementById('txt_contactanosFooter').innerHTML = data.txt_contactanosFooter
}  