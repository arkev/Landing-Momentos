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
$(".url").on('click', function () {
    window.location = "https://umvirtual.org";
});


// al hacer click muestra el Modal
$(".mostrar").on("click", function () {
    $(".mask").addClass("activo");
    $('iframe').attr({
        'src': 'https://www.youtube-nocookie.com/embed/j6UIlgu3UYg?rel=0&amp;showinfo=0?ecver=1?&autoplay=1&yt:stretch=16:9'
    });
});

// al hacer click se cierra el Modal
function closeModal2() {
    $(".mask").removeClass("activo");
    $('iframe').attr({
        'src': ''
    });
}

// Cerrar el Modal con el teclado con la tecla ESC
$(".close, .mask").on("click", function () {
    closeModal2();
});
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal2();
    }
});