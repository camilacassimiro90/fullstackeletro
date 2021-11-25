function exibir_categoria(categoria){
  // alert(categoria);

  let elementos = document.getElementsByClassName('box_produto');
  console.log(elementos);
  for (var i = 0; i<elementos.length; i++) {
    console.log(elementos[i].id);
    if (categoria == elementos[i].id)
    elementos[i].style="display:block";
    else
    elementos[i].style="display:none";

  }
}