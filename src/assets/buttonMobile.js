export default function preventMobile (event) {
  if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (this.className="btn-portfolio prevent-mobile") ) {
        event.preventDefault(); 
  alert("Ce site n'est pas accessible sur mobile");
  } else { return; }
}