$(function(){
    $('#btnEnviar').click(function(e){
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        if($.trim($('#validationDefaultUsername').val())=="")
        {
            alert("Falta especificar el correo");
            $('#validationDefaultUsername').focus();
        }
        // validar que el correo tenga el formato correcto
        else if(! (/^[^\s@]+@[^\s@]+.[^\s@]+$/.test($.trim($('#validationDefaultUsername').val()))))
        {
            alert("El formato del correo no es correcto");
            $('#validationDefaultUsername').focus();
        }
        else if($.trim($('#validationDefault05').val())=="")
        {
            alert("Falta especificar el Teléfono");
            $('#validationDefault05').focus();
        }
        // permitir que el telefono contenga solo numeros
        else if(!(/^\d+$/.test($.trim($('#validationDefault05').val()))))
        {
            alert("El formato del Teléfono no es válido, debe contener solo números");
            $('#validationDefault05').focus();
        }
        else
        {
            var mensaje = 'Los datos enviados son:\n' +
                          'Nombre: ' + $('#validationDefault01').val() + '\n' +
                          'Apellido: ' + $('#validationDefault02').val() + '\n' +
                          'Correo: ' + $('#validationDefaultUsername').val() + '\n' +
                          'Teléfono: ' + $('#validationDefault05').val() + '\n' +
                          'Fecha de Nacimiento: ' + $('#validationDefault06').val() + '\n' +
                          'Región: ' + $('#validationDefault04 option:selected').text() + '\n' +
                          'Nivel educacional: ' + $('#Educacion option:selected').text(); // Cambio aquí
            alert(mensaje);
        }
    });
});
