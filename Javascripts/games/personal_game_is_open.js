
function readBase64ToHTML(base64) {
    let HTML = b64_to_utf8(base64)
    
    return HTML
}



function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
  }
  
  function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
  }
  

document.getElementById('personalGameBody').innerHTML = readBase64ToHTML(localStorage.getItem('base64_html'))
