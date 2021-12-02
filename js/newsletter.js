$("#suscripcion").append(`
<h6><b>¡Suscribite a nuestro newsletter...</b> y recibí las últimas noticias sobre hardware!</h6>
<form class="input-group" id="newsFormulario">
<input class="col-sm-3 border" type="text" id="email" placeholder="Ingresa tu email">
<button type="submit" class="btn btn-danger">Suscribite</button>
</form>`);

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

$("#newsFormulario").submit(function(e) {
    e.preventDefault();
    if (validarEmail($("#email").val())) {
        Swal.fire(
            'Bienvenido al Newsletter de<br>Solo Leveling Components',
            $("#email").val(),
            'success');
        let emailNuevo = $("#email").val();
        localStorage.setItem("emailNewsletter", emailNuevo);
    } else {
        Swal.fire({
            title: 'El email ingresado no es válido',
            icon: 'error'
        });
    }
    $("#email").val('');
});