//función que se ejecutará al cargar la página
$(document).ready(function(){

    //función que se ejecutará al presionar el botón #botonToggle
    $('#botonToggle').on('click', function(){

        //hacemos toggle de la sección
        $('#seccionToggle').toggle();

        //cambiamos texto según lo que corresponde
        var textoActual = $(this).text();
        if(textoActual == 'Mostrar sección'){
            $(this).text('Ocultar sección'); 
        }else{
            $(this).text('Mostrar sección'); 
        }               
    });
})