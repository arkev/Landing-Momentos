// al hacer click muestra el Modal
$(".show").on("click", function () {
    $(".mask").addClass("active");
});

// al hacer click se cierra el Modal
function closeModal() {
    $(".mask").removeClass("active");
}

// Cerrar el Modal con el teclado con la tecla ESC
$(".close, .mask").on("click", function () {
    closeModal();
});
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});

//Ir a la URL de UM Virtual
$(".url").on('click', function(){
     window.location = "https://umvirtual.org";    
});