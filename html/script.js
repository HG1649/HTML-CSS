document.addEventListener('DOMContentLoaded', function() {
    // Mostrar formulario de contacto
    const showContactFormButton = document.getElementById('show-contact-form');
    const contactFormContainer = document.getElementById('contact-form-container');
    showContactFormButton.addEventListener('click', function() {
      contactFormContainer.style.display = 'block';
      showContactFormButton.style.display = 'none';
    });

    // Gestionar el envío del formulario de contacto
    const form = document.getElementById('contact-form');
    const resultNombre = document.getElementById('result-nombre');
    const resultApellidos = document.getElementById('result-apellidos');
    const resultCorreo = document.getElementById('result-correo');
    const resultAsunto = document.getElementById('result-asunto');
    const resultMensaje = document.getElementById('result-mensaje');
    const formResult = document.getElementById('form-result');
    const backToMainButton = document.getElementById('back-to-main');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const apellidos = document.getElementById('apellidos').value;
      const correo = document.getElementById('correo').value;
      const asunto = document.getElementById('asunto').value;
      const mensaje = document.getElementById('mensaje').value;

      resultNombre.textContent = nombre;
      resultApellidos.textContent = apellidos;
      resultCorreo.textContent = correo;
      resultAsunto.textContent = asunto;
      resultMensaje.textContent = mensaje;

      formResult.style.display = 'block';
    });

    // Botón para volver a la página principal
    backToMainButton.addEventListener('click', function() {
      contactFormContainer.style.display = 'none';
      showContactFormButton.style.display = 'block';
    });
  });

  