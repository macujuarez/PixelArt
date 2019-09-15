var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
   $("#indicador-de-color").css({"background-color": colorActual});
});

var $paleta= $("#paleta");
var $grillaPixeles= $("#grilla-pixeles");
var $apretado = $grillaPixeles.children();
var $suelto = $grillaPixeles.children();

function paleta_de_colores() { 
    nombreColores.forEach(function paleta(color){
    var $color = $('<div>',{"class":'color_paleta'}).css({"background-color": color});
      $paleta.append($color);
      });
}

paleta_de_colores();

  function grilla(){
    for (i=0; i<=1748; i++){
    $grillaPixeles.append($("<div>"));
   }
  }
  grilla();
  
 $paleta.children().click(function paletaColor(){
    var $color = $(this).css("background-color");
    $("#indicador-de-color").css({"background-color": $color});
    $("#container").css({"background-color": $color});
  }); 

 $grillaPixeles.children().click(function pintar(){
    var $color= $("#indicador-de-color").css("background-color");
    $(this).css({"background-color":$color});
 });

 var apretado= false;

  $grillaPixeles.children().mousedown(function(){
    apretado= true;
  }); ;
  $grillaPixeles.children().mouseup(function(){
    apretado= false;
  }); ;
 
  $grillaPixeles.children().mousemove(function(){
     if (apretado=== true){
     var $color= $("#indicador-de-color").css("background-color");
      $(this).css({"background-color":$color});
    }
  });

  var $borrar = $("#borrar");
  $borrar.click(function(){
    $grillaPixeles.children().animate({"background-color":"white"},1000, "swing");
  });

  var $batman = $("#batman"); 
  $batman.click(function(){
    cargarSuperheroe(batman);
  });
  var $wonder = $("#wonder");
  $("#wonder").click(function(){
    cargarSuperheroe(wonder);
  });
  var $flash=$("#flash");
  $("#flash").click(function(){
    cargarSuperheroe(flash);
  });
  var $invisible =$("#invisible")
  $("#invisible").click(function(){
    cargarSuperheroe(invisible);
  });

  var $guardar = $("#guardar");
  $guardar.click(function(){
    guardarPixelArt();
  });

  console.log($guardar);
