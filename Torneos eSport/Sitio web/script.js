// Navegación con desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
 document.getElementById('boton-tema').addEventListener('click', () => {
      const html = document.documentElement;
      html.dataset.tema = html.dataset.tema === 'claro' ? 'oscuro' : 'claro';
    });
