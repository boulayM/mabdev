export default function preventMobile (event) {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        event.preventDefault(); 
  alert("Ce site n'est pas accessible sur mobile");
  } else { return; }
}