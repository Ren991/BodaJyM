function onAttend() {
    // Obtener el nombre ingresado por el usuario
    var name = document.getElementsByName("name")[0].value;

    // Verificar si se ingresó un nombre
    if (!name) {
        alert("Por favor, ingresa tu nombre antes de confirmar tu asistencia.");
        return;
    }

    // Preparar los parámetros del correo electrónico
    var params = {
        from_name: name,
        to_name: "Tu nombre aquí", // Nombre del destinatario
        message: "¡Confirmo mi asistencia a tu boda!" // Mensaje del correo electrónico
    };

    // Enviar el correo electrónico utilizando EmailJS
    emailjs.send('service_kiiclnh', 'template_lk3xo6y', params,"lrvye9J6cyY_WhcfY")
        .then(function(response) {
            console.log('Correo electrónico enviado con éxito:', response);
            alert("¡Gracias por confirmar tu asistencia! Te hemos enviado un correo electrónico de confirmación.");
        }, function(error) {
            console.error('Error al enviar el correo electrónico:', error);
            alert("Hubo un error al enviar tu confirmación. Por favor, inténtalo de nuevo más tarde.");
        });
}
