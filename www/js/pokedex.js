function consultar(){
    nombre = $('#txtNombre').val();
    dir = "https://pokeapi.co/api/v2/pokemon/"+nombre

    $.ajax({
        url:dir,
        error:function(err){
            alert("El Pokemon no fue encontrado");
            console.log(err);

            $("#divCargando").hide();
        },
        beforeSend:function(){
            $("#pokeInfo").hide();
            $("#divCargando").show();
        }

    }).done(function(data){
        $("#divCargando").hide();
        $("#pokeInfo").show();
        console.log(data);
        document.getElementById('fotoPoke').src = data.sprites.front_default;
        $('#dataPeso').html(data.weight);

    });
}