$(document).ready(function() {
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();

    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    $("html, body").animate({
      scrollTop: offset
    }, 800);
  });
});

$(document).ready(function() {
    // Faz com que o título apareça suavemente quando a página é carregada
    $(".titulo").hide().fadeIn(2000);
     // Adiciona uma animação de rolagem suave para todos os links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
     // Faz com que o botão mude de cor quando o mouse passa sobre ele
    $(".conteudo-principal-botao").hover(function() {
      $(this).css("background-color", "#c5af9e");
    }, function() {
      $(this).css("background-color", "#ffffff");
    });
  });
  

  
  
  