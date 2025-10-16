document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    const links = document.getElementsByClassName("btn-portfolio prevent-mobile");

    links.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Ce site n'est pas accessible sur mobile");
      });

  }
});
