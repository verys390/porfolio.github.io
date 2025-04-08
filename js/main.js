
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitamos envío tradicional

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola Verónica! 👋%0AMi nombre es: ${nombre}%0AMi email es: ${email}%0AMensaje: ${mensaje}`;
    const url = `https://wa.me/5492344413407?text=${texto}`;

    window.open(url, "_blank");

    // Opcional: mostrar mensaje de confirmación
    Swal.fire({
      title: '¡Redireccionando a WhatsApp! 📱',
      text: 'Se abrirá un chat con tus datos cargados.',
      icon: 'info',
      confirmButtonColor: '#20c997',
      confirmButtonText: 'Perfecto'
    });

    form.reset();
  });


  